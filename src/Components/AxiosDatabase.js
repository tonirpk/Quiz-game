import React, { useState, useContext, createContext } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import CardWrapper from "../Helpers/CardWrapper";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
  science: 18,
};

const API_URL = "https://opentdb.com/api.php?";
const Context = createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
    type: "boolean",
  });

  const fetch = async (url) => {
    setWaiting(false);
    setLoading(true);
    try {
      const res = await axios.get(url);
      if (res) {
        const data = res.data.results;
        if (data.length > 0) {
          setQuestions(data);
          setLoading(false);
          setWaiting(false);
          setError(false);
        } else {
          setWaiting(true);
          setError(true);
        }
      } else {
        setWaiting(true);
      }
    } catch (err) {
      <CardWrapper>
        <Typography variant="h1" sx={{ color: "red" }}>
          Page is broken.. please reload
        </Typography>
      </CardWrapper>;
    }
  };

  const nxtQuestion = () => {
    setIndex((prevIndex) => {
      if (prevIndex === questions.length - 1) {
        openModal();
        return questions.length - 1;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const answerCheacker = (answer) => {
    if (answer) {
      setCorrect((prev) => prev + 1);
    }
    nxtQuestion();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIndex(0);
    setCorrect(0);
    setWaiting(true);
  };

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setQuiz({ ...quiz, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { amount, category, difficulty, type } = quiz;
    let url = `${API_URL}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=${type}`;
    fetch(url);
  };

  return (
    <Context.Provider
      value={{
        waiting,
        loading,
        index,
        questions,
        error,
        correct,
        nxtQuestion,
        answerCheacker,
        isModalOpen,
        closeModal,
        quiz,
        changeHandler,
        submitHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(Context);
};
