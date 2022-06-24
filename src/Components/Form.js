import React from "react";
import { useGlobalContext } from "./AxiosDatabase";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CardWrapper from "../Helpers/CardWrapper";

const categoryOption = [
  {
    title: "sports",
    value: "sports",
  },
  {
    title: "politics",
    value: "politics",
  },
  {
    title: "history",
    value: "history",
  },
  {
    title: "science",
    value: "science",
  },
];

const difficultyOption = [
  {
    title: "easy",
    value: "easy",
  },
  {
    title: "medium",
    value: "medium",
  },
  {
    title: "hard",
    value: "hard",
  },
];

const typeOption = [
  {
    title: "multiple choice",
    value: "multiple",
  },
  {
    title: "true or false",
    value: "boolean",
  },
];

const Form = () => {
  const { quiz, submitHandler, changeHandler, error } = useGlobalContext();

  return (
    <CardWrapper component="form" onSubmit={submitHandler}>
      <Typography variant="h3">Create your Quiz!</Typography>
      <TextField
        fullWidth
        name="amount"
        type="number"
        id="amount"
        label="Number of Quiz Questions"
        value={quiz.amount}
        onChange={changeHandler}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        fullWidth
        name="category"
        select
        label="Select Quiz Category"
        value={quiz.category}
        onChange={changeHandler}
        sx={{ textAlign: "left" }}
      >
        {categoryOption.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        name="difficulty"
        select
        label="Select Quiz Difficulty"
        value={quiz.difficulty}
        onChange={changeHandler}
        sx={{ textAlign: "left" }}
      >
        {difficultyOption.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        name="type"
        select
        label="Select Quiz Type"
        value={quiz.type}
        onChange={changeHandler}
        sx={{ textAlign: "left" }}
      >
        {typeOption.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </TextField>

      {error && (
        <Typography sx={{ color: "red" }} variant="subtitle1">
          Can't Generate Questions, Please Try Different Options
        </Typography>
      )}
      <Button size="large" fullWidth type="submit" variant="contained">
        Start The Quiz!
      </Button>
    </CardWrapper>
  );
};

export default Form;
