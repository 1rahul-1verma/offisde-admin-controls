// Libs
import { ReactElement, useCallback } from "react";

// Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Constants
import * as ACTION_TYPES from "./actionTypes";

// Types
import { OnAction } from "../../../../hooks/useQuestionCardGrid/types";

export const Question = ({
  question,
  onAction,
}: {
  question: any;
  onAction: OnAction;
}): ReactElement => {
  const handleQuestionSelect = useCallback(() => {
    onAction({
      type: ACTION_TYPES.SELECT_QUESTION,
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
      onClick={handleQuestionSelect}
    >
      <Typography>{question.sNo}.</Typography>
      <Typography sx={{ marginLeft: "4px" }}>{question.question}</Typography>
    </Box>
  );
};
