import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import platform from "../../PlatformStat/js_origin.json";

const data = [
  { name: "넷플릭스", value: 612 },
  { name: "웨이브", value: 2503 },
  { name: "티빙", value: 1173 },
  { name: "쿠팡플레이", value: 341 },
  { name: "왓챠", value: 2858 },
  { name: "디즈니+", value: 528 },
  { name: "seezn", value: 441 },
  { name: "라프텔", value: 260 },
];
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#1188FE",
  "#00C45F",
  "#FFBB58",
  "#DD8042",
];

console.log(platform);

export default class Example extends PureComponent {
  render() {
    console.log(this.props.data);

    return (
      <PieChart width={500} height={500} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={250}
          cy={250}
          innerRadius={100}
          outerRadius={200}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }
}
