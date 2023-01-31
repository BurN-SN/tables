import { getNextTabId, randomized } from "../../lib/helpers";
import { useZustand } from "../../lib/store";
import styles from "./Nav.module.scss";
import cn from "classnames";
import { AddButton } from "./AddButton";

const { navWrapper, tab, addTabBtn } = styles;

export const TabNav = () => {
  const { tabs, activeTab, newTab } = useZustand();

  const handleAddTab = () => {
    const id = getNextTabId(tabs);
    newTab({
      id,
      tableId: randomized()
    });
  };

  const handleFocusTab = (tabId) => {
    useZustand.setState({ activeTab: tabId });
    console.log("click");
  };

  console.log("tabs", tabs, activeTab);
  return (
    <nav className={navWrapper}>
      {tabs.map((tab) => (
        <div
          onClick={() => handleFocusTab(tab.id)}
          className={cn(styles.tab, tab.id === activeTab && styles.active)}
        >
          {tab.id}
        </div>
      ))}
      <AddButton />
    </nav>
  );
};
