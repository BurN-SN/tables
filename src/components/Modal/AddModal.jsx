import styles from "./Modal.module.scss";
import { getNextTabId, randomized } from "../../lib/helpers";
import { useZustand } from "../../lib/store";
import { useState } from "react";
// import { getNextTabId } from "../../lib/helpers";

const display = {
  labor: "Labor Only",
  labor_Markup: "Labor With Markup",
  laborParts_Markup: "Parts & Labor w/ Markup",
  laborParts_SelectRate: "Select Rate",
  parts: "Parts Only",
  laborParts: "Parts & Labor",
  labor_Plus: "Labor Plus",
  laborParts_Plus: "Parts and Labor Plus"
  // partsOnlyLennox: "Parts Only (Lennox)",
  // laborMarkupLennox: "Labor Markup (Lennox)",
  // commercialPartsLaborMarkup: "Parts & Labor w/ Markup - Commercial",
  // commercialLaborMarkup: "Labor w/ Markup - Commercial"
};

export const AddModal = ({ isOpen, onClose }) => {
  const [newTab] = useZustand((state) => [state.newTab]);

  const [value, setValue] = useState("labor");
  if (!isOpen) return null;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    const id = getNextTabId();
    newTab({
      id,
      tableId: randomized(),
      tableConfigType: value
    });
    onClose();
  };

  return (
    <aside className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Select a table configuration</h2>
        <select onChange={handleChange} defaultValue={value}>
          {Object.entries(display).map((e) => (
            <option selected={value === e[0]} value={e[0]}>
              {e[1]}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>OK</button>
        <div></div>
      </div>
    </aside>
  );
};
