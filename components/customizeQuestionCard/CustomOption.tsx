// Libs
import {
  ChangeEvent,
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
} from "react";

// Components
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

// Constants
import { SET_CUSTOM_OPTION, REMOVE_CUSTOM_OPTION } from "./actionTypes";
import { MANDATORY_ERROR_MESSAGE } from "./constants";

// Types
import { SetCustomOption, RemoveCustomOption, FormError } from "./types";

// Icons
import CancelIcon from "@mui/icons-material/Cancel";

export const CustomOption = ({
  option,
  required,
  label,
  placeholder,
  disableRemove,
  onAction,
  error,
  setError,
}: {
  option: any;
  required: boolean;
  label: string;
  placeholder: string;
  disableRemove: boolean;
  error: FormError;
  setError: Dispatch<SetStateAction<FormError>>;
  onAction: (action: SetCustomOption | RemoveCustomOption) => void;
}): ReactElement => {
  const { id } = option;
  const handleOptionChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      onAction({
        type: SET_CUSTOM_OPTION,
        payload: { id, option: event.target.value },
      });
      if (event.target.value) {
        setError((prevError) => ({
          ...prevError,
          options: { ...prevError.options, [id]: undefined },
        }));
      } else {
        setError((prevError) => ({
          ...prevError,
          options: { ...prevError.options, [id]: "error" },
        }));
      }
    },
    [id, onAction, setError]
  );

  const handleRemoveOption = useCallback(() => {
    onAction({ type: REMOVE_CUSTOM_OPTION, payload: { id } });
    setError((prevError) => ({
      ...prevError,
      options: { ...prevError.options, [id]: undefined },
    }));
  }, [id, onAction, setError]);

  return (
    <FormControl sx={{ flexGrow: 1 }} error={!!error.options?.[id]}>
      <TextField
        required={required}
        label={label}
        placeholder={placeholder}
        size="small"
        value={option?.option}
        onChange={handleOptionChange}
        InputProps={{
          startAdornment: (
            <Box
              sx={{
                pointerEvents: disableRemove ? "none" : "auto",
                cursor: disableRemove ? "not-allowed" : "pointer",
              }}
              onClick={handleRemoveOption}
            >
              <InputAdornment position="start">
                <CancelIcon data-element-id={option.id} />
              </InputAdornment>
            </Box>
          ),
        }}
      />
      {!!error.options?.[id] ? (
        <FormHelperText>{MANDATORY_ERROR_MESSAGE}</FormHelperText>
      ) : null}
    </FormControl>
  );
};
