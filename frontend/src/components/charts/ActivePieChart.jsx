import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const ActivePieChart = (props) => {
  const noExp = props.noExp;
  const yesExp = props.yesExp;

  console.log(typeof noExp);
  console.log(yesExp);

  const data = [
    { name: "이용경험 없음", value: noExp },
    { name: "이용경험 있음", value: yesExp },
  ];
  const COLORS = ["#0088FE", "#00C49F"];
  return (
    <div style={{ width: 400, height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={50}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivePieChart;

// export default class Example extends PureComponent {
//   render() {
//     const noExp = this.props.noExp;
//     const yesExp = this.props.yesExp;

//     console.log(typeof noExp);
//     console.log(yesExp);

//     const data = [
//       { name: "이용경험 없음", value: `${noExp}` },
//       { name: "이용경험 있음", value: `${yesExp}` },
//     ];
//     const COLORS = ["#0088FE", "#00C49F"];

//     return (
//       <PieChart width={500} height={500} onMouseEnter={this.onPieEnter}>
//         <Pie
//           data={data}
//           cx={250}
//           cy={250}
//           innerRadius={100}
//           outerRadius={200}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     );
//   }
// }
