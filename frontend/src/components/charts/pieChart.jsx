import React, { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const data = [
  { name: "Group A", value: 11.8 },
  { name: "Group B", value: 21.1 },
  { name: "Group C", value: 31.7 },
  { name: "Group D", value: 33.1 },
  { name: "Group D", value: 2.1 },
  { name: "Group D", value: 0.2 },
];

const RenderPieChart = (props) => {
  const w = props.w;
  const h = props.h;

  return (
    <div style={{ width: w, height: h }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#8884d8" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RenderPieChart;
