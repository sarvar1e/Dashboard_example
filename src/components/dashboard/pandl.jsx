import * as React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";
import { PandLwrapper } from "./indexstyle";

const series = [
  {
    data: [
      { id: 0, value: 10, label: "Re-used APIs" },
      { id: 1, value: 15, label: "Webhooks" },
      { id: 2, value: 20, label: "API Calls" },
    ],
  },
];

export default function HiddenLegend() {
  return (
    <PandLwrapper>
      <h1 style={{ margin: "40px 40px 0px 25px" }}>P&L</h1>
      <p style={{ fontSize: "9.854px", margin: "0px 40px 30px 25px" }}>
        Total profit growth of 25%
      </p>

      <Stack direction="row" alignItems="center">
        {/* Place the series data on the left */}
        <Stack direction="column" alignItems="flex-start">
          {series[0].data.map((item) => (
            <p
              style={{ fontSize: "13px", margin: "10px 8px 0 15px" }}
              key={item.id}
            >{`${item.label}: ${item.value}`}</p>
          ))}
        </Stack>
        {/* Add any other components here */}
        <PieChart series={series} width={250} height={125} />
      </Stack>
    </PandLwrapper>
  );
}
