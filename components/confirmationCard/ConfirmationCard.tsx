// Libs
import { ChangeEvent, ReactElement } from "react";

// Components
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Unstable_Grid2";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";

export const ConfirmationCard = ({
  question,
}: {
  question?: any; // TODO: types
}): ReactElement => {
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
        disabled
      >
        <Input value={question?.question} />
      </FormControl>

      <Box sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0, minHeight: 0 }}>
        <Grid container spacing={1}>
          {question?.options.map((option: any, index: number) => (
            <Grid xs={6} key={option.id}>
              <FormControl disabled sx={{ flexGrow: 1 }}>
                <InputLabel>{`Option ${index + 1}`}</InputLabel>
                <Input
                  size="small"
                  value={option?.option}
                  label={`Option ${index + 1}`}
                />
              </FormControl>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: "1vw",
          }}
        >
          <Button variant="contained" color="success" size="small">
            Confirm
          </Button>
          <Button variant="outlined" color="success" size="small">
            Evaluate
          </Button>
          <Button variant="contained" color="error" size="small">
            Close
          </Button>
        </Box>
        <Box sx={{ marginTop: "1vw" }}>
          <Button variant="contained" color="success" size="small">
            Push to Chat
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
