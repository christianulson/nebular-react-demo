/* eslint-disable jsx-a11y/alt-text */
import { useForceUpdate } from '@mantine/hooks';
import { Button, Icon } from '@nebular-react/core';
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useStyles from './TemperatureDragger.styles';

let uniqueId = 0;
const VIEW_BOX_SIZE = 300;

interface TemperatureDraggerProps {
  fillColors?: string | string[];
  disableArcColor?: string;
  bottomAngle?: number;
  arcThickness?: number;
  thumbRadius?: number;
  thumbBorder?: number;
  thumbBg?: string;
  thumbBorderColor?: string;
  maxLeap?: number;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onPowerChange?: (off: boolean) => void;
  onValueChange?: (value: number) => void;
  children?: React.ReactNode;
}

export function TemperatureDragger(props: TemperatureDraggerProps) {
  const {
    fillColors = [],
    disableArcColor,
    bottomAngle = 90,
    arcThickness = 18,
    thumbRadius = 16,
    thumbBorder = 3,
    thumbBg,
    thumbBorderColor,
    maxLeap = 0.4,
    value = 50,
    min = 0,
    max = 100,
    step = 0.1,
    onPowerChange,
    onValueChange,
    children
  } = props;

  const oldValue = useRef<number>(value);
  const isMouseDown = useRef<boolean>(false);
  const off = useRef<boolean>(false);
  const svgControlId = useRef<number>(uniqueId++);
  const location = useLocation();
  const { classes, cx } = useStyles();
  const forceUpdate = useForceUpdate();

  const styles = useRef({
    viewBox: '0 0 300 300',
    arcTranslateStr: 'translate(0, 0)',
    clipPathStr: '',
    gradArcs: [],
    nonSelectedArc: {},
    thumbPosition: { x: 0, y: 0 },
    blurRadius: 15
  });

  const svgRoot = useRef<SVGSVGElement>(null);

  const bottomAngleRad = useRef<number>(0);
  const colors = useRef([]);
  const scaleFactor = useRef<number>(1);
  const radius = useRef<number>(100);
  const translateXValue = useRef<number>(0);
  const translateYValue = useRef<number>(0);
  const thickness = useRef<number>(6);
  const pinRadius = useRef<number>(10);

  const calculateVars = () => {
    bottomAngleRad.current = toRad(bottomAngle);
    colors.current = typeof fillColors === 'string' ? [fillColors] : fillColors;

    const halfAngle = bottomAngleRad.current / 2;

    const svgBoundingRect = svgRoot.current?.getBoundingClientRect();
    const svgAreaFactor =
      (svgBoundingRect.height && svgBoundingRect.width / svgBoundingRect.height) || 1;
    const svgHeight = VIEW_BOX_SIZE / svgAreaFactor;
    const thumbMaxRadius = thumbRadius + thumbBorder;
    const thumbMargin =
      2 * thumbMaxRadius > arcThickness
        ? (thumbMaxRadius - arcThickness / 2) / scaleFactor.current
        : 0;
    scaleFactor.current = svgBoundingRect.width / VIEW_BOX_SIZE || 1;
    styles.current.viewBox = `0 0 ${VIEW_BOX_SIZE} ${svgHeight}`;

    const circleFactor =
      bottomAngleRad.current <= Math.PI
        ? 2 / (1 + Math.cos(halfAngle))
        : (2 * Math.sin(halfAngle)) / (1 + Math.cos(halfAngle));
    if (circleFactor > svgAreaFactor) {
      if (bottomAngleRad.current > Math.PI) {
        radius.current = (VIEW_BOX_SIZE - 2 * thumbMargin) / (2 * Math.sin(halfAngle));
      } else {
        radius.current = VIEW_BOX_SIZE / 2 - thumbMargin;
      }
    } else {
      radius.current = (svgHeight - 2 * thumbMargin) / (1 + Math.cos(halfAngle));
    }

    translateXValue.current = VIEW_BOX_SIZE / 2 - radius.current;
    translateYValue.current = svgHeight / 2 - (radius.current * (1 + Math.cos(halfAngle))) / 2;

    styles.current.arcTranslateStr = `translate(${translateXValue.current}, ${translateYValue.current})`;

    thickness.current = arcThickness / scaleFactor.current;
    pinRadius.current = thumbRadius / scaleFactor.current;
  };

  const calculateClipPathSettings = () => {
    const halfAngle = bottomAngleRad.current / 2;
    const innerRadius = radius.current - thickness.current;

    const xStartMultiplier = 1 - Math.sin(halfAngle);
    const yMultiplier = 1 + Math.cos(halfAngle);
    const xEndMultiplier = 1 + Math.sin(halfAngle);

    return {
      outer: {
        start: {
          x: xStartMultiplier * radius.current,
          y: yMultiplier * radius.current
        },
        end: {
          x: xEndMultiplier * radius.current,
          y: yMultiplier * radius.current
        },
        radius: radius.current
      },
      inner: {
        start: {
          x: xStartMultiplier * innerRadius + thickness.current,
          y: yMultiplier * innerRadius + thickness.current
        },
        end: {
          x: xEndMultiplier * innerRadius + thickness.current,
          y: yMultiplier * innerRadius + thickness.current
        },
        radius: innerRadius
      },
      thickness: thickness.current,
      big: bottomAngleRad.current < Math.PI ? '1' : '0'
    };
  };

  const invalidateClipPathStr = () => {
    const s = calculateClipPathSettings();

    let path = `M ${s.outer.start.x},${s.outer.start.y}`; // Start at startangle top

    // Outer arc
    // Draw an arc of radius 'radius'
    // Arc details...
    path += ` A ${s.outer.radius},${s.outer.radius}
       0 ${s.big} 1
       ${s.outer.end.x},${s.outer.end.y}`; // Arc goes to top end angle coordinate

    // Outer to inner connector
    path += ` A ${s.thickness / 2},${s.thickness / 2}
       0 1 1
       ${s.inner.end.x},${s.inner.end.y}`;

    // Inner arc
    path += ` A ${s.inner.radius},${s.inner.radius}
       1 ${s.big} 0
       ${s.inner.start.x},${s.inner.start.y}`;

    // Outer to inner connector
    path += ` A ${s.thickness / 2},${s.thickness / 2}
       0 1 1
       ${s.outer.start.x},${s.outer.start.y}`;

    // Close path
    path += ' Z';
    styles.current.clipPathStr = path;
  };

  const getValuePercentage = () => (value - min) / (max - min);

  const invalidateNonSelectedArc = () => {
    const angle =
      bottomAngleRad.current / 2 +
      (1 - getValuePercentage()) * (2 * Math.PI - bottomAngleRad.current);
    styles.current.nonSelectedArc = {
      color: disableArcColor,
      d: `M ${radius.current},${radius.current}
       L ${radius.current},${3 * radius.current}
       A ${2 * radius.current},${2 * radius.current}
       1 ${angle > Math.PI ? '1' : '0'} 0
       ${radius.current + radius.current * 2 * Math.sin(angle)},${
        radius.current + radius.current * 2 * Math.cos(angle)
      }
       Z`
    };
  };

  const invalidatePinPosition = () => {
    const radiusOffset = thickness.current / 2;
    const curveRadius = radius.current - radiusOffset;
    const actualAngle =
      (2 * Math.PI - bottomAngleRad.current) * getValuePercentage() + bottomAngleRad.current / 2;
    styles.current.thumbPosition = {
      x: curveRadius * (1 - Math.sin(actualAngle)) + radiusOffset,
      y: curveRadius * (1 + Math.cos(actualAngle)) + radiusOffset
    };
    invalidateNonSelectedArc();
  };

  const calculateGradientConePaths = (angleStep) => {
    const calcX = (angle) => radius.current * (1 - 2 * Math.sin(angle));

    const calcY = (angle) => radius.current * (1 + 2 * Math.cos(angle));

    const gradArray = [];

    for (
      let i = 0, currentAngle = bottomAngleRad.current / 2;
      i < colors.current.length;
      i++, currentAngle += angleStep
    ) {
      gradArray.push({
        start: { x: calcX(currentAngle), y: calcY(currentAngle) },
        end: { x: calcX(currentAngle + angleStep), y: calcY(currentAngle + angleStep) },
        big: Math.PI <= angleStep ? 1 : 0
      });
    }
    return gradArray;
  };

  const invalidateGradientArcs = () => {
    const getArc = (des) => `M ${radius.current},${radius.current}
         L ${des.start.x},${des.start.y}
         A ${2 * radius.current},${2 * radius.current}
         0 ${des.big} 1
         ${des.end.x},${des.end.y}
         Z`;

    const angleStep = (2 * Math.PI - bottomAngleRad.current) / colors.current.length;
    const s = calculateGradientConePaths(angleStep);

    styles.current.gradArcs = [];
    for (let i = 0; i < s.length; i++) {
      const si = s[i];
      const arcValue = getArc(si);
      styles.current.gradArcs.push({
        color: colors.current[i],
        d: arcValue
      });
    }

    styles.current.blurRadius = 2 * radius.current * Math.sin(angleStep / 6);
  };

  const toValueNumber = (factor) => Math.round((factor * (max - min)) / step) * step + min;

  const recalculateValue = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    allowJumping = false
  ) => {
    if (isMouseDown.current && !off.current) {
      const rect = svgRoot.current?.getBoundingClientRect();
      const center = {
        x: rect.left + (VIEW_BOX_SIZE * scaleFactor.current) / 2,
        y: rect.top + (translateYValue.current + radius.current) * scaleFactor.current
      };
      let actualAngle = Math.atan2(center.x - event.clientX, event.clientY - center.y);
      if (actualAngle < 0) {
        actualAngle += 2 * Math.PI;
      }

      const previousRelativeValue = getValuePercentage();
      let relativeValue = 0;
      if (actualAngle < bottomAngleRad.current / 2) {
        relativeValue = 0;
      } else if (actualAngle > 2 * Math.PI - bottomAngleRad.current / 2) {
        relativeValue = 1;
      } else {
        relativeValue =
          (actualAngle - bottomAngleRad.current / 2) / (2 * Math.PI - bottomAngleRad.current);
      }

      const newValue = toValueNumber(relativeValue);

      if (
        value !== newValue &&
        (allowJumping || Math.abs(relativeValue - previousRelativeValue) < maxLeap)
      ) {
        typeof onValueChange === 'function' && onValueChange(newValue);
      }
    }
  };

  const invalidate = () => {
    calculateVars();

    invalidateClipPathStr();
    invalidatePinPosition();

    invalidateGradientArcs();
    forceUpdate();
  };

  useEffect(() => {
    invalidate();

    window.addEventListener('resize', invalidate);

    return () => {
      window.removeEventListener('resize', invalidate);
    };
  }, []);

  useEffect(() => {
    invalidate();
  }, [value]);

  const mouseDown = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    isMouseDown.current = true;
    if (!off.current) {
      recalculateValue(event, true);
    }
  };

  const mouseUp = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    recalculateValue(event);
    isMouseDown.current = false;
  };

  const mouseMove = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    recalculateValue(event);
  };

  const getUrlPath = (id: string) => `url(${location.pathname}${id}${svgControlId.current})`;

  const switchPower = () => {
    off.current = !off.current;
    typeof onPowerChange === 'function' && onPowerChange(!off.current);

    if (off.current) {
      oldValue.current = value;
      typeof onValueChange === 'function' && onValueChange(min);
    } else {
      typeof onValueChange === 'function' && onValueChange(oldValue.current);
    }

    invalidatePinPosition();
  };

  return (
    <div className={cx(classes.root)}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACJJREFUaN7twTEBAAAAwiD7pzbFPmAAAAAAAAAAAAAAAGQOLbQAAU3zwM4AAAAASUVORK5CYII=" />
      <div className="svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          viewBox={styles.current.viewBox}
          preserveAspectRatio="xMinYMin meet"
          onMouseDown={(event) => mouseDown(event)}
          onMouseUp={(event) => mouseUp(event)}
          onMouseMove={(event) => mouseMove(event)}
          ref={svgRoot}
        >
          <defs>
            <filter id={`blurFilter${svgControlId.current}`} x="0" y="0" width="100%" height="100%">
              <feGaussianBlur in="SourceGraphic" stdDeviation={styles.current.blurRadius} />
              <feComponentTransfer>
                <feFuncA type="discrete" tableValues="1 1" />
              </feComponentTransfer>
            </filter>

            <clipPath id={`sliderClip${svgControlId.current}`}>
              <path d={styles.current.clipPathStr} stroke="black" />
            </clipPath>
          </defs>
          <g transform={styles.current.arcTranslateStr}>
            <g className="toClip" clipPath={getUrlPath('#sliderClip')}>
              <g className="toFilter" filter={getUrlPath('#blurFilter')}>
                {styles.current.gradArcs.map((arc, index) => (
                  <path
                    d={arc.d}
                    fill={off.current ? (styles.current.nonSelectedArc as any).color : arc.color}
                    key={`grad-arc-${index}`}
                  />
                ))}
              </g>
              {[0, 1, 2, 3, 4, 5].map((n, index) => (
                <path
                  d={(styles.current.nonSelectedArc as any).d}
                  fill={(styles.current.nonSelectedArc as any).color}
                  key={`non-selected-arc-${index}`}
                />
              ))}
            </g>

            <circle
              cx={styles.current.thumbPosition.x}
              cy={styles.current.thumbPosition.y}
              r={pinRadius.current}
              strokeWidth={thumbBorder / scaleFactor.current}
              fill={off.current ? 'none' : thumbBg}
              stroke={off.current ? 'none' : thumbBorderColor}
            />
          </g>
        </svg>
      </div>

      <div className="temperature-bg">{children}</div>

      <Button
        appearance="ghost"
        wrapperClassName={cx('power-bg', {
          on: !off.current
        })}
        onClick={() => switchPower()}
      >
        <Icon className="power-icon" icon="power-outline" pack="eva" />
      </Button>
    </div>
  );
}

function toRad(angle: number) {
  return (Math.PI * angle) / 180;
}
