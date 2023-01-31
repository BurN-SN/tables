// export const columnsByTable = {
//   labor: ["asset", "component", "repair", "hours", "rate", "total"],
//   laborMarkup: ["asset", "component", "repair", "hours", "rate", "total"],
//   laborSpecialRate: ["asset", "component", "repair", "hours", "rate", "total"],
//   parts: ["qty", "oem", "asset", "partNumber", "description", "price", "total"]
// };
export const LABOR_COLS = [
  {
    dataField: "asset",
    text: "ASSET"
  },
  {
    dataField: "component",
    text: "COMPONENT"
  },
  {
    dataField: "repair",
    text: "REPAIR"
  },
  {
    dataField: "hours",
    text: "HOURS"
  },
  {
    dataField: "rate",
    text: "RATE"
  },
  {
    dataField: "total",
    text: "TOTAL"
    // isDummyField: true
  }
];

export const LABOR_SPECIAL_RATE_COLS = [
  {
    dataField: "asset",
    text: "ASSET"
  },
  {
    dataField: "component",
    text: "COMPONENT"
  },
  {
    dataField: "repair",
    text: "REPAIR"
  },
  {
    dataField: "repairCode",
    text: "REPAIR CODE"
  },
  {
    dataField: "percent",
    text: "PCT %"
  },
  {
    dataField: "rate",
    text: "RATE"
  },
  {
    dataField: "total",
    text: "TOTAL"
  }
];
