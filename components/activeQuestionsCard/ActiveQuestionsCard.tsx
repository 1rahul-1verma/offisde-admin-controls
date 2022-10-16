// Libs
import { ReactElement } from "react";

// Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ActiveQuestions } from "./components/ActiveQuestions";

// Hooks
import { useActiveQuestionsQuery } from "./hooks/useActiveQuestionsQuery";

// Types
import { OnAction } from "./types";

export const ActiveQuestionsCard = ({
  onAction,
}: {
  onAction: OnAction;
}): ReactElement => {
  const { data } = useActiveQuestionsQuery();
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
          Active Questions
        </Typography>
      </Box>
      {data.length ? (
        <ActiveQuestions questions={data} onAction={onAction} />
      ) : null}
    </Box>
  );
};
