// Libs
import { ReactElement } from "react";

// Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { QuestionFilterForm } from "./components/QuestionFilterForm";
import { AllQuestions } from "./components/AllQuestions";

// Hooks
import { useQuestionsState } from "./hooks/useQuestionsState";
import { useGetAllQuestionsQuery } from "./hooks/useGetAllQuestionsQuery";

// Types
import { OnAction } from "../../hooks/useQuestionCardGrid/types";

export const QuestionsCard = ({
  onAction: onParentAction,
}: {
  onAction: OnAction;
}): ReactElement => {
  const { requestState, onAction } = useQuestionsState({
    onParentAction,
  });
  const { data } = useGetAllQuestionsQuery({ requestState });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, m: 1, marginTop: "1vw" }}
        >
          List of All Questions
        </Typography>
      </Box>
      <QuestionFilterForm requestState={requestState} onAction={onAction} />
      {data.length ? (
        <AllQuestions questions={data} onAction={onAction} />
      ) : null}
    </Box>
  );
};
