import React, { ComponentType, useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import debounce from 'lodash/debounce';

export function EChartWithResize<T>(Component: ComponentType<T>) {
  function EChartWithResizeWrapper(hocProps: T) {
    const echartsRef = useRef<ReactECharts | null>(null);

    useEffect(() => {
      const resizeChart = debounce(() => {
        const echartsInstance = echartsRef.current?.getEchartsInstance();
        echartsInstance?.resize();
      }, 50);

      const layoutColumn = document.querySelector('.nebular-layout-column-root');
      const layoutColumnObserver = new ResizeObserver(() => {
        resizeChart();
      });

      layoutColumn && layoutColumnObserver.observe(layoutColumn);

      return () => {
        resizeChart.cancel();
        layoutColumnObserver.disconnect();
      };
    }, []);

    return <Component {...hocProps} ref={echartsRef} />;
  }

  return EChartWithResizeWrapper;
}
