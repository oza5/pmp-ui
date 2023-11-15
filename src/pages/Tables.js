import { useState, useEffect, useMemo } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Tables = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();

  const tabData = useMemo(
    () => [
      {
        label: "A - Recommended",
        items: [
          { id: "Diabetes", name: "Diabetes", details: "Details for Item 1" },
          {
            id: "Hypertension",
            name: "Hyper tension",
            details: "Details for Item 2",
          },
          { id: "Syphillis", name: "Syphillis", details: "Details for Item 3" },
        ],
      },
      {
        label: "B - Recommended",
        items: [
          { id: "item4", name: "Item 4", details: "Details for Item 4" },
          { id: "item5", name: "Item 5", details: "Details for Item 5" },
        ],
      },
      {
        label: "C - Selectively Recommended",
        items: [
          { id: "item6", name: "Item 6", details: "Details for Item 6" },
          { id: "item7", name: "Item 7", details: "Details for Item 7" },
          { id: "item8", name: "Item 8", details: "Details for Item 8" },
        ],
      },
    ],
    [],
  );

  const handleChangeTab = (event, newTab) => {
    setActiveTab(newTab);
  };

  useEffect(() => {
    const pathname = location.pathname;
    const tabValue = tabData.findIndex((tab) =>
      pathname.includes(`/details/${tab.items[0].id}`),
    );
    if (tabValue !== -1) {
      setActiveTab(tabValue);
    }
  }, [location.pathname, tabData]);

  return (
    <div className="tables-container">
      <Typography variant="h5">Screening Results:</Typography>
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
                <ListItem
                  key={item.id}
                  button
                  component={Link}
                  to={`/details/${item.id}`}
                >
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

export default Tables;
