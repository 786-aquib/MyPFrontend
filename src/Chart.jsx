import React, {
  PureComponent
} from 'react';
import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer
} from 'recharts';
const data = [
  //    { name : 'updated', value : 1692552641794},
  {
      name: "cases",
      value: 693685683
  },
  {
      name: "todayCases",
      value: 80
  },
  {
      name: "deaths",
      value: 6908728
  },
  {
      name: "todayDeaths",
      value: 0
  },
  {
      name: "recovered",
      value: 665670908
  },
  {
      name: "todayRecovered",
      value: 65098
  },
  {
      name: "active",
      value: 21106047
  },
  {
      name: "critical",
      value: 37393
  },
  {
      name: "deathsPerOneMillion",
      value: 886.3
  },
  //   { name : "tests", value : 6999799900},
  {
      name: "testsPerOneMillion",
      value: 881039.28
  },
  {
      name: "population",
      value: 794493513
  },
  {
      name: "oneCasePerPeople",
      value: 0
  },
  {
      name: "oneDeathPerPeople",
      value: 0
  },
  {
      name: "oneTestPerPeople",
      value: 0
  },
  {
      name: "activePerOneMillion",
      value: 2656.54
  },
  {
      name: "recoveredPerOneMillion",
      value: 83785.57
  },
  {
      name: "criticalPerOneMillion",
      value: 4.71
  },
  {
      name: "affectedCountries",
      value: 231
  }
];


console.log("Data");
const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF19D0',
  '#FF1931', '#19FFD7', '#1931FF', '#19A7FF', '#FF196A', '#1982FF',
  '#FF196A', '#19B5FF', '#196AFF', '#FFB619', '#7F19FF', '#B619FF',
  '#19C1FF'
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return ( <
      g >
      <
      text x = {
          cx
      }
      y = {
          cy
      }
      dy = {
          8
      }
      textAnchor = "middle"
      fill = {
          fill
      } > {
          payload.name
      }
      </text> 
      <Sector cx = {
          cx
      }
      cy = {
          cy
      }
      innerRadius = {
          innerRadius
      }
      outerRadius = {
          outerRadius
      }
      startAngle = {
          startAngle
      }
      endAngle = {
          endAngle
      }
      fill = {
          fill
      }
      /> <
      Sector cx = {
          cx
      }
      cy = {
          cy
      }
      startAngle = {
          startAngle
      }
      endAngle = {
          endAngle
      }
      innerRadius = {
          outerRadius + 6
      }
      outerRadius = {
          outerRadius + 10
      }
      fill = {
          fill
      }
      /> <
      path d = {
          `M${sx},${sy}L${mx},${my}L${ex},${ey}`
      }
      stroke = {
          fill
      }
      fill = "none" / >
      <
      circle cx = {
          ex
      }
      cy = {
          ey
      }
      r = {
          2
      }
      fill = {
          fill
      }
      stroke = "none" / >
      <
      text x = {
          ex + (cos >= 0 ? 1 : -1) * 12
      }
      y = {
          ey
      }
      textAnchor = {
          textAnchor
      }
      fill = "#333" > {
          `PV ${value}`
      }
   </text>
      <text x = {
          ex + (cos >= 0 ? 1 : -1) * 12
      }
      y = {
          ey
      }
      dy = {
          18
      }
      textAnchor = {
          textAnchor
      }
      fill = "#999" > {
          `(Rate ${(percent * 100).toFixed(2)}%)`
      }
      </text>

      </g>
  );
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state = {
      activeIndex: 0,
  };

  onPieEnter = (_, index) => {
      this.setState({
          activeIndex: index,
      });
  };

  render() {
      return <ResponsiveContainer width = "100%"
          height = "100%" >
          <PieChart width = {
              800
          }
          height = {
              800
          } >
          <
          Pie activeIndex = {
              this.state.activeIndex
          }
          activeShape = {
              renderActiveShape
          }
          data = {
              data
          }
          cx = "50%"
          cy = "50%"
          innerRadius = {
              160
          }
          outerRadius = {
              180
          }
          fill = "#8884d8"
          dataKey = "value"
          onMouseEnter = {
              this.onPieEnter
          }/>
          </PieChart>
          </ResponsiveContainer>
  }
}