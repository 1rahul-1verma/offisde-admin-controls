// Libs
import { ReactElement } from "react";

// Components
import Box from "@mui/system/Box";
import { Question } from "./question";

// Types
import { OnAction } from "../../../hooks/useQuestionCardGrid/types";

export const AllQuestions = ({
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
        maxHeight: "24vh",
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
