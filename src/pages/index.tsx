import React from "react";
import { Tabs } from "antd";
import { AllButtons } from "@/components/buttons/allButtons";

const Home: React.FC = () => {
  const tabLabels = [
    "Buttons",
    "Inputs",
    "File Upload",
    "Slider",
    "Chips & Badges",
    "Selects",
    "Toggles",
    "Checkbox & Radio",
    "Switches",
    "Tooltips",
    "Date Picker",
    "Modals",
    "Table",
  ];

  const tabComponents: { [key: string]: React.ReactNode } = {
    Buttons: <AllButtons />,

    Inputs: <div>Inputs Component</div>,
    "File Upload": <div>File Upload Component</div>,
    Slider: <div>Slider Component</div>,
    "Chips & Badges": <div>Chips & Badges Component</div>,
    Selects: <div>Selects Component</div>,
    Toggles: <div>Toggles Component</div>,
    "Checkbox & Radio": <div>Checkbox & Radio Component</div>,
    Switches: <div>Switches Component</div>,
    Tooltips: <div>Tooltips Component</div>,
    "Date Picker": <div>Date Picker Component</div>,
    Modals: <div>Modals Component</div>,
    Table: <div>Table Component</div>,
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size="large"
        items={tabLabels.map((label, i) => {
          const id = String(i + 1);
          return {
            label: label,
            key: id,
            children: tabComponents[label] || <div>Default Content</div>,
          };
        })}
      />
    </div>
  );
};

export default Home;
