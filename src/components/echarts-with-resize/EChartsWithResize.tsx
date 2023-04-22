import React, { ComponentType, useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import { debounce } from 'lodash';

export function EChartWithResize<T>(Component: ComponentType<T>) {
  return (hocProps: T) => {
    const echartsRef = useRef<ReactECharts>();

    const resizeChart = debounce(() => {
      const echartsInstance = echartsRef.current?.getEchartsInstance();
      echartsInstance?.resize();
    }, 50);

    useEffect(() => {
      const layoutColumn = document.querySelector('.nebular-layout-column-root');
      const layoutColumnObserver = new ResizeObserver(() => {
        resizeChart();
      });

      layoutColumn && layoutColumnObserver.observe(layoutColumn);

      return () => {
        layoutColumnObserver.disconnect();
      };
    }, []);

    return <Component {...hocProps} ref={echartsRef} />;
  };
}
