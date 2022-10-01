import React, { useState } from "react";
import { ModalBox, ModalWrapper, CloseButton } from "./styles";
import { MenuItem, Select, TextField, Modal, Button } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { AiOutlineClose } from "react-icons/ai";
import { colors } from "../../styles/GlobalStyles";
import { CONFIG } from "../../config";
import axios from "axios";
import { ErrorMessage } from "../../styles/errorMessage";

interface IProps {
  open: boolean;
  setOpen: any;
  reminderDate: string;
  day: any;
}

const ReminderModal: React.FC<IProps> = ({ open, setOpen, day }) => {
  const handleClose = () => setOpen(false);
  const [color, setColor] = useState("blue");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [date, setDate] = React.useState<any>(moment(day, "DD-MM-YYYY"));

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setErrorMessage("");

      await axios.post(`${CONFIG.BACKEND_URL}`, {
        message,
        date,
        colorHex: color,
        city,
      });

      setOpen(false);
    } catch (error: any) {
      const rawErrorMessage = error.response.data.message;
      setErrorMessage(rawErrorMessage || "Error try again later.");
    }
  };

  return (
    <ModalWrapper>
      <Modal open={open} onClose={handleClose}>
        <ModalBox>
          <CloseButton onClick={handleClose}>
            <AiOutlineClose size={20} />
          </CloseButton>

          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              label="Color"
              onChange={(e) => setColor(e.target.value)}
            >
              <MenuItem value={"blue"}>Blue</MenuItem>
              <MenuItem value={"yellow"}>Yellow</MenuItem>
            </Select>
            <TimePicker
              label="Hour"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            {errorMessage && (
              <ErrorMessage className="onSubmitErrorMessage">
                {errorMessage}
              </ErrorMessage>
            )}
            <Button
              style={{ background: colors.darkRed }}
              type="submit"
              variant="contained"
            >
              Save
            </Button>
          </form>
        </ModalBox>
      </Modal>
    </ModalWrapper>
  );
};

export default ReminderModal;