// Libs
import { ReactElement, useCallback } from "react";

// Components
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";

// Constants
import * as ACTION_TYPES from "../actionTypes";

// Types
import { OnAction } from "../types";

const Question = ({
  question,
  onAction,
}: {
  question: any;
  onAction: OnAction;
}): ReactElement => {
  const handleActiveQuestionSelect = useCallback(() => {
    onAction({
      type: ACTION_TYPES.SELECT_ACTIVE_QUESTION,
      payload: { question },
    });
  }, [onAction, question]);

  return (
    <Box
      sx={{
        paddingY: "8px",
        display: "flex",
        background: question.sNo % 2 ? "#D9D9D9" : "",
        paddingX: "1vw",
        cursor: "pointer",
      }}
      onClick={handleActiveQuestionSelect}
    >
      <Typography>{question.sNo}.</Typography>
      <Typography sx={{ marginLeft: "4px" }}>{question.question}</Typography>
    </Box>
  );
};

export const ActiveQuestions = ({
  questions,
  onAction,
}: {
  questions: any; // TODO: define types for data, once we get mock data
  onAction: OnAction;
}): ReactElement => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        maxHeight: "30vh",
        textAlign: "left",
      }}
    >
      {questions.map((question: any, index: number) => (
        <Question
          key={question.sNo}
          question={question}
          onAction={onAction}
        ></Question>
      ))}
    </Box>
  );
};
