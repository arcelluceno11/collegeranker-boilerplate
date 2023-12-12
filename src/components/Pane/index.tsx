import React from "react";

import "./styles.css";
import { PaneItemProps } from "../../pages/CollegeView";
import Chip from "./Chip";

const Pane = (props: PaneItemProps) => {
  const { title, description, chips } = props;

  return (
    <div className="pane-container">
      <div className="pane-header">{title}</div>
      <div className="pane-body">
        <div className="pane-body-right">{description}</div>
        <div className="pane-body-left">
          {chips.map((chip, index) => (
            <Chip
              key={index}
              label={chip.label}
              text={chip.text}
              link={chip.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pane;
