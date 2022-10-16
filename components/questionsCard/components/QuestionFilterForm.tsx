// Libs
import { ChangeEvent, ReactElement, useCallback } from "react";

// Components
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

// Constants
import * as ACTION_TYPES from "../hooks/useQuestionsState/actionTypes";

// Types
import { RequestStateType } from "../types";
import { OnAction } from "../hooks/useQuestionsState/types";
import type { SelectChangeEvent } from "@mui/material/Select";

export const QuestionFilterForm = ({
  requestState,
  onAction,
}: {
  requestState: RequestStateType;
  onAction: OnAction;
}): ReactElement => {
  const { type, searchQuery } = requestState;

  const handleTypeChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      const type = event.target.value;
      onAction({ type: ACTION_TYPES.SET_QUESTION_TYPE, payload: { type } });
    },
    [onAction]
  );

  // TODO: need to debounce this...
  const handleSearchQueryChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const query = event.target.value;
      onAction({
        type: ACTION_TYPES.SET_QUESTION_SEARCH_QUERY,
        payload: { query },
      });
    },
    [onAction]
  );

  return (
    <Box
      sx={{
        display: "flex",
        paddingX: "0.5vw",
        justifyContent: "space-between",
      }}
    >
      <FormControl sx={{ m: 1, maxWidth: 160, flexGrow: 1 }} size="small">
        <InputLabel id="demo-simple-select-label">Question Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Question Type"
          onChange={handleTypeChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, maxWidth: 160, flexGrow: 1 }}>
        <TextField
          id="outlined-required"
          label="Search Phrase"
          placeholder="Search Phrase"
          size="small"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </FormControl>
    </Box>
  );
};
