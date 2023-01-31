// import { useStore } from "zustand";

import { useStore } from "./store";

export const columns = [
  {
    dataField: "id",
    title: "ID",
    footer: ""
  },
  {
    dataField: "component",
    title: "COMPONENT",
    footer: ""
  },
  {
    dataField: "qty",
    title: "HOURS",
    footer: ""
  },
  {
    formatter: (cell) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(cell),
    dataField: "rate",
    title: "RATE",
    footer: "Total:"
  },
  {
    dataField: "total",
    title: "TOTAL",
    isDummyField: true,
    formatter: (_, row) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(row.qty * row.rate);
    }
  }
];
