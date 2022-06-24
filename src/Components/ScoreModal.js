import React from "react";
import Confetti from "react-confetti";
import { useGlobalContext } from "./AxiosDatabase";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CardWrapper from "../Helpers/CardWrapper";

const ScoreModal = () => {
  const { closeModal, isModalOpen, correct, questions } = useGlobalContext();

  let score = ((correct / questions.length) * 100).toFixed(0);
  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CardWrapper>
          {score > 40 && <Confetti />}
          <Typography variant="h3">
            Your score is{" "}
            <span style={score > 40 ? { color: "green" } : { color: "red" }}>
              {score}%
            </span>
          </Typography>
          <Typography variant="h6">
            You got <u>{correct}</u> answers out of <u>{questions.length}</u>
          </Typography>
          {score > 40 && (
            <Typography sx={{ color: "green" }} variant="h5">
              Congratulations! You made it!
            </Typography>
          )}
          <Button size="large" variant="contained" onClick={closeModal}>
            Play Again
          </Button>
        </CardWrapper>
      </Modal>
    </>
  );
};

export default ScoreModal;
