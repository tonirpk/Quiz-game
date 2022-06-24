import React from "react";
import Form from "./Form";
import LoadingScreen from "./LoadingScreen";
import ScoreModal from "./ScoreModal";
import { useGlobalContext } from "./AxiosDatabase";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardWrapper from "../Helpers/CardWrapper";

const QuestionForm = () => {
  const { waiting, loading, index, questions, nxtQuestion, answerCheacker } =
    useGlobalContext();

  if (waiting) {
    return <Form />;
  }
  if (loading) {
    return <LoadingScreen />;
  }

  const { incorrect_answers, correct_answer, question } = questions[index];

  const answers = [...incorrect_answers];

  if (incorrect_answers.length > 1) {
    let num = Math.floor(Math.random() * 4);
    if (num === 3) {
      answers.push(correct_answer);
    } else {
      answers.push(answers[num]);
      answers[num] = correct_answer;
    }
  } else {
    let num = Math.floor(Math.random() * 2);
    answers.push(answers[num]);
    answers[num] = correct_answer;
  }

  return (
    <CardWrapper>
      <ScoreModal />
      <Typography variant="subtitle2" sx={{ color: "green", ml: "auto" }}>
        Question number: {index + 1}/{questions.length}
      </Typography>
      <Typography
        sx={{ textAlign: "center" }}
        variant="h4"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <Stack spacing={1}>
        {answers.map((answer, index) => {
          return (
            <Button
              key={index}
              onClick={() => answerCheacker(answer === correct_answer)}
              variant="outlined"
            >
              <Typography
                variant="h6"
                dangerouslySetInnerHTML={{
                  __html: answer,
                }}
              />
            </Button>
          );
        })}
      </Stack>

      <Button size="large" variant="contained" onClick={nxtQuestion}>
        Next question
      </Button>
    </CardWrapper>
  );
};

export default QuestionForm;
