import ReactECharts from 'echarts-for-react';
import React from 'react';
import { EChartWithResize } from '../../../../components/echarts-with-resize/EChartsWithResize';

interface EarningPieChartChartProps {
  option: any;
  onChartClick: (pieData: { value: number; name: string; color: any }) => void;
}

const _EarningPieChart = React.memo(
  React.forwardRef<ReactECharts, EarningPieChartChartProps>(
    ({ option, onChartClick }: EarningPieChartChartProps, ref) => {
      const onEvents = {
        click: (event: any) => {
          const pieData = {
            value: event.value,
            name: event.name,
            color: event.color.colorStops[0].color
          };

          typeof onChartClick === 'function' && onChartClick(pieData);
        }
      };

      return (
        <div className="echarts">
          <ReactECharts
            option={option}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            onEvents={onEvents}
            ref={ref}
          />
        </div>
      );
    }
  )
);

export const EarningPieChart = EChartWithResize(_EarningPieChart);
