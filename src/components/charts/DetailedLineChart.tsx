/* eslint-disable react-hooks/exhaustive-deps */
import * as d3 from 'd3';
import { useMemo } from 'react';

import { AxisBottom } from '@/components/charts/AxisBottom';
import { AxisLeft } from '@/components/charts/AxisLeft';

type LineChartProps = {
  width: number;
  height: number;
  data: number[];
  area?: boolean;
  margin?: { top: number; right: number; bottom: number; left: number };
  xAxis?: boolean;
  yAxis?: boolean;
};

// 16:9 aspect ratio
// const width = 640 + 2*mx; mx = 20 640 + 96 = 736
// const height = 320 + 2*my; my = 20 360 + 96 = 356

// 3:1 aspect ratio
// const width = 600;
// const height = width / 3;

const MARGIN = { top: 48, right: 48, bottom: 48, left: 48 };

export default function LineChart({
  width,
  height,
  data,
  margin = MARGIN,
  area = true,
  xAxis = false,
  yAxis = false,
}: LineChartProps) {
  // console.log('data', data);

  const boundsWidth = useMemo(
    () => width - margin.left - margin.right,
    [width]
  );
  const boundsHeight = useMemo(
    () => height - margin.top - margin.bottom,
    [height]
  );

  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, data.length ?? 600]) // note: limiting to 1000 instead of max here because of extreme values in the dataset
      .range([0, boundsWidth]);
  }, [data, width]);

  // set the dimensions and margins of the graph
  const yScale = useMemo(() => {
    const max = Math.max(...data.map((d) => Number(d)));
    return d3.scaleLinear().domain([0, max]).range([boundsHeight, 0]);
  }, [data, boundsHeight]);

  const areaPath = useMemo(() => {
    const areaGenerator = d3
      .area()
      .x((d) => xScale(d[0]))
      .y0(() => yScale(0))
      .y1((d) => yScale(d[1]));
    // .curve(d3.curveBasis);
    return areaGenerator(data.map((value, index) => [index, value]));
  }, [data]);

  const linePath = useMemo(() => {
    const lineGenerator = d3
      .line()
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]));
    // .curve(d3.curveBasis);
    return lineGenerator(data.map((value, index) => [index, value]));
  }, [data]);

  return (
    <svg width={width} height={height} overflow='visible'>
      <g
        width={boundsWidth}
        height={boundsHeight}
        transform={`translate(${margin.left}, ${margin.top})`}
        overflow='visible'
      >
        {yAxis && <AxisLeft yScale={yScale} pixelsPerTick={50} />}
        {xAxis && (
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom xScale={xScale} pixelsPerTick={50} />
          </g>
        )}
        <path
          d={linePath ? linePath : 'M0 0'}
          stroke='#3F83F8'
          strokeWidth={2}
          fillOpacity={0}
          // strokeLinejoin='round'
        />
        {area && (
          <path
            d={areaPath ? areaPath : 'M0 0'}
            fill='#3F83F8'
            fillOpacity={0.3}
          />
        )}
      </g>
    </svg>
  );
}
