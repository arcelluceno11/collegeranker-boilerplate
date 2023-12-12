import { Tab, Tabs } from "@material-ui/core";
import React from "react";
import Pane from "../Pane";
import { NavigationItemProps } from "../../pages/CollegeView";

type Props = {
  navItems: NavigationItemProps[];
  value: number;
  handleChange: (event: React.ChangeEvent<{}>, value: any) => void;
};

const Navigation = (props: Props) => {
  const { navItems, value, handleChange } = props;

  return (
    <Tabs value={value} onChange={handleChange}>
      {navItems.map((navItem, index) => (
        <Tab key={index} label={navItem.label} />
      ))}
    </Tabs>
  );
};

export default Navigation;
