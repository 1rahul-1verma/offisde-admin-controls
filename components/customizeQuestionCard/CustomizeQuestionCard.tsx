// Libs
import { ChangeEvent, ReactElement, useCallback, useState } from "react";

// Components
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import { CustomOption } from "./CustomOption";

// Hooks
import { useCustomizeQuestion } from "./hooks/useCustomizeQuestion";

// Constants
import {
  SET_CUSTOM_QUESTION,
  PUSH_CUSTOM_QUESTION,
  ADD_CUSTOM_OPTION,
} from "./actionTypes";
import { MANDATORY_ERROR_MESSAGE } from "./constants";

// Types
import { FormError } from "./types";

// Helpers
import { validate } from "./utils";

export const CustomizeQuestionCard = ({
  question,
}: {
  question?: any; // TODO: types
}): ReactElement => {
  const { customQuestion, onAction } = useCustomizeQuestion({ question });
  const [formError, setFormError] = useState<FormError>({
    question: undefined,
    options: {},
  });

  const { options } = customQuestion;

  const handleCustomQuestionChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      onAction({
        type: SET_CUSTOM_QUESTION,
        payload: { question: event.target.value },
      });

      // Setting form errors...
      if (!event.target.value) {
        setFormError((prevError) => ({ ...prevError, question: "error" }));
      } else {
        setFormError((prevError) => ({ ...prevError, question: undefined }));
      }
    },
    [onAction]
  );

  const handlePushCustomQuestion = useCallback(() => {
    setFormError((prevError) => {
      const optionsError = customQuestion.options.reduce(
        (acc, option) =>
          !!option.option
            ? { ...acc, [option.id]: undefined }
            : { ...acc, [option.id]: "error" },
        {}
      );
      return {
        question: !!customQuestion.question ? undefined : "error",
        options: optionsError,
      };
    });
    if (validate(customQuestion)) {
      console.log("Mutation Called"); // TODO: remove
      onAction({ type: PUSH_CUSTOM_QUESTION });
    }
  }, [customQuestion, onAction]);

  const handleAddCustomOption = useCallback(() => {
    onAction({ type: ADD_CUSTOM_OPTION });
  }, [onAction]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "1vw",
        height: "40vh",
        paddingBottom: "5vh",
      }}
    >
      <FormControl
        sx={{
          m: 1,
          paddingX: "0.5vw",
          flexGrow: 0,
          flexShrink: 0,
          flexBasis: "auto",
        }}
        error={!!formError?.question}
      >
        <TextField
          required
          label="Question"
          placeholder="Add Question"
          value={customQuestion?.question}
          onChange={handleCustomQuestionChange}
        />
        {!!formError?.question ? (
          <FormHelperText>{MANDATORY_ERROR_MESSAGE}</FormHelperText>
        ) : null}
      </FormControl>

      <Box sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0, minHeight: 0 }}>
        <Grid container spacing={1}>
          {customQuestion?.options.map((option: any, index: number) => (
            <Grid xs={6} key={option.id}>
              <CustomOption
                option={option}
                required={index === 0 || index === 1}
                label={`Option ${index + 1}`}
                placeholder={`Option ${index + 1}`}
                disableRemove={customQuestion?.options.length <= 2}
                onAction={onAction}
                error={formError}
                setError={setFormError}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          flexGrow: 0,
          flexShrink: 0,
          flexBasis: "auto",
          display: "flex",
          justifyContent: "space-between",
          paddingX: "2vw",
        }}
      >
        <Button
          variant="contained"
          onClick={handlePushCustomQuestion}
          color="success"
        >
          Push & Activate
        </Button>
        <Button
          variant="outlined"
          onClick={handleAddCustomOption}
          disabled={options.length >= 4}
          color="success"
        >
          Add Option
        </Button>
      </Box>
    </Box>
  );
};
