import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MixBarChart = () => {
  const data = [
    {
      name: "넷플릭스",
      drama: 1906,
      docu: 293,
      ent: 321,
      ani: 752,
    },
    {
      name: "웨이브",
      drama: 2735,
      docu: 27,
      ent: 608,
      ani: 743,
    },
    {
      name: "티빙",
      drama: 1325,
      docu: 44,
      ent: 1188,
      ani: 781,
    },
    {
      name: "쿠팡플레이",
      drama: 323,
      docu: 57,
      ent: 46,
      ani: 160,
    },
    {
      name: "왓챠",
      drama: 1884,
      docu: 419,
      ent: 604,
      ani: 1112,
    },
    {
      name: "디즈니+",
      drama: 398,
      docu: 91,
      ent: 25,
      ani: 206,
    },
    {
      name: "seezn",
      drama: 288,
      docu: 1,
      ent: 107,
      ani: 10,
    },
    {
      name: "라프텔",
      drama: 0,
      docu: 0,
      ent: 0,
      ani: 1285,
    },
  ];

  return (
    <ResponsiveContainer width={1000} height={650}>
      <BarChart
        width={500}
        height={800}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="drama" stackId="a" fill="#ffcdd2" />
        <Bar dataKey="docu" stackId="a" fill="#ffd180" />
        <Bar dataKey="ent" stackId="a" fill="#ff9e80" />
        <Bar dataKey="ani" stackId="a" fill="#b2ebf2" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MixBarChart;
