import { useState, useMemo } from "react";
import { List, ListItem, ListItemText, Tabs, Tab } from "@mui/material";

const VaccinationTables = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = useMemo(
    () => [
      {
        label: "Due",
        items: [
          { id: "item1", name: "Vaccine 1", details: "Details for Item 1" },
          {
            id: "item2",
            name: "Vaccine 2",
            details: "Details for Item 2",
          },
        ],
      },
      {
        label: "Recommended",
        items: [
          { id: "item4", name: "Vaccine 4", details: "Details for Item 4" },
          { id: "item5", name: "Vaccine 5", details: "Details for Item 5" },
        ],
      },
    ],
    [],
  );

  const handleChangeTab = (event, newTab) => {
    setActiveTab(newTab);
  };

  return (
    <div className="tables-container">
      <Tabs value={activeTab} onChange={handleChangeTab}>
        {tabData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      {tabData.map((tab, index) => (
        <TabPanel key={index} value={activeTab} index={index}>
          <div className="tab">
            <List>
              {tab.items.map((item) => (
                <ListItem>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </div>
        </TabPanel>
      ))}
    </div>
  );
};

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </div>
  );
};

export default VaccinationTables;
