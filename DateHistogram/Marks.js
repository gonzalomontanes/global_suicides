export const Marks = ({
  binnedData,
  xScale,
  yScale,
  tooltipFormat,
  innerHeight
}) =>
  binnedData.map(d => (
    <rect
      className="mark"
      x={xScale(d.x0)}
      y={yScale(d.y)}
      width={xScale(d.x1) - xScale(d.x0) + 15}
      height={innerHeight - yScale(d.y)}
    >
      <title>{tooltipFormat(d.y)}</title>
    </rect>
  ));
