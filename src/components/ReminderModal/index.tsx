import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalWrapper } from "./styles";

interface IProps {
  open: boolean;
  setOpen: any;
  reminderDate: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ReminderModal: React.FC<IProps> = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <ModalWrapper>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box" sx={style}></Box>
      </Modal>
    </ModalWrapper>
  );
};

export default ReminderModal;
