// Libs
import { ReactElement } from "react";

// Components
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { QuestionsCard } from "./questionsCard";
import { ActiveQuestionsCard } from "./activeQuestionsCard";
import { ConfirmationCard } from "./confirmationCard";

// Hooks
import { useQuestionCardGrid } from "../hooks/useQuestionCardGrid";
import { CustomizeQuestionCard } from "./customizeQuestionCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  minHeight: "40vh",
  maxHeight: "40vh",
  borderRadius: "16px",
  overflow: "hidden",
}));

export const CardGrid = (): ReactElement => {
  const { selectedQuestion, selectedActiveQuestion, onAction } =
    useQuestionCardGrid();

  console.log(selectedActiveQuestion);

  return (
    <Grid container spacing={4}>
      <Grid xs={6}>
        <Item>
          <QuestionsCard onAction={onAction} />
        </Item>
      </Grid>
      <Grid xs={6}>
        <Item>
          <CustomizeQuestionCard
            question={selectedQuestion}
            // @ts-ignore
            key={selectedQuestion?.sNo}
          />
        </Item>
      </Grid>
      <Grid xs={6}>
        <Item>
          <ActiveQuestionsCard onAction={onAction} />
        </Item>
      </Grid>
      <Grid xs={6}>
        <Item>
          <ConfirmationCard question={selectedActiveQuestion} />
        </Item>
      </Grid>
    </Grid>
  );
};
