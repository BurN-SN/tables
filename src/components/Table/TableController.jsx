import { useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { columns } from "../../lib/columns";
import { data } from "../../lib/data";
import { currentTab } from "../../lib/helpers";
import styles from "./Table.module.scss";
import { COLUMNS, contractTypes } from "./util";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { useZustand } from "../../lib/store";

export const TableController = () => {
  const { tableId, tableConfigType } = currentTab();
  const [init, activeTab, currentTable] = useZustand((state) => [
    state.init,
    state.activeTab,
    state[tableId]
  ]);

  useEffect(() => {
    if (currentTable) return;

    const neededTables = contractTypes[tableConfigType];
    // const initialState = {};
    // neededTables.forEach(
    //   (t) =>
    //     (initialState[t] = {
    //       tableType: t,
    //       data: []
    //     })
    // );

    init(tableId, neededTables);
    //   // if (state[tab.tableId]) use stored data on tab
  }, [tableId, activeTab]);

  console.log("current", currentTable);
  return currentTable?.map((t) => <h2>{t}</h2>);

  // const table
  // return neededTables.map((table) => (
  //   <BootstrapTable
  //     key={table}
  //     classes={styles.w100}
  //     columns={COLUMNS[table]}
  //     data={data}
  //     keyField={"asset"}
  //     striped={true}
  //     bordered
  //   />
  // ));
};
