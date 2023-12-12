import { Button } from "@material-ui/core";
import { ChipItemProps } from "../../../pages/CollegeView";
import { CiCircleInfo } from "react-icons/ci";

import "./styles.css";
import { useState } from "react";
import VideoModal from "./VideoModal";

const Chip = (props: ChipItemProps) => {
  const { label, text, link } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="chip-item">
      <div className="chip-item-left">{label}</div>
      <div className="chip-item-right">
        <p>{text}</p>
        <CiCircleInfo
          className="chip-item-right-button"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <VideoModal
        link={link}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Chip;
