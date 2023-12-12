import { Modal } from "@material-ui/core";
import React from "react";

import "./styles.css";

type Props = {
  link: string;
  open: boolean;
  onClose: () => void;
};

const VideoModal = (props: Props) => {
  const { link, open, onClose } = props;

  return (
    <div className="modal">
      <Modal open={open} onClose={onClose}>
        <iframe width="420" height="315" src={link}></iframe>
      </Modal>
    </div>
  );
};

export default VideoModal;
