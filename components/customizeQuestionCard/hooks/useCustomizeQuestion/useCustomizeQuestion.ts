// Libs
import { useState, useCallback } from "react";

// Constants
import * as ACTION_TYPES from "../../actionTypes";

// Types
import { OnAction, CustomQuestion } from "../../types";

const DEFAULT_CUSTOM_QUESTION = {
  question: "",
  options: [
    { id: "1", option: "" },
    { id: "2", option: "" },
  ],
};

export const useCustomizeQuestion = ({
  question,
}: {
  question?: any;
}): { customQuestion: CustomQuestion; onAction: OnAction } => {
  const [customQuestion, setCustomQuestion] = useState<CustomQuestion>(
    question ?? DEFAULT_CUSTOM_QUESTION
  );

  const onAction = useCallback<OnAction>(
    (action) => {
      switch (action.type) {
        case ACTION_TYPES.SET_CUSTOM_QUESTION: {
          setCustomQuestion((prevState) => ({
            ...prevState,
            question: action.payload.question,
          }));
          break;
        }

        case ACTION_TYPES.SET_CUSTOM_OPTION: {
          const updatedOptionId = action.payload.id;
          const updatedOptions = customQuestion.options.map((option) =>
            option.id === updatedOptionId
              ? { ...option, option: action.payload.option }
              : option
          );
          setCustomQuestion((prevState) => ({
            ...prevState,
            options: updatedOptions,
          }));
          break;
        }

        case ACTION_TYPES.REMOVE_CUSTOM_OPTION: {
          const removedOptionId = action.payload.id;
          const _remainingOptions = customQuestion.options.filter(
            (option) => option.id !== removedOptionId
          );
          // Updating serial number of remaining option...
          const remainingOptions = _remainingOptions.map((option, index) => ({
            ...option,
            id: `${index + 1}`,
          }));
          setCustomQuestion((prevState) => ({
            ...prevState,
            options: remainingOptions,
          }));
          break;
        }

        case ACTION_TYPES.ADD_CUSTOM_OPTION: {
          const newOptions = customQuestion.options;
          newOptions.push({
            id: `${customQuestion.options.length + 1}`,
            option: "",
          });
          setCustomQuestion((prevState) => ({
            ...prevState,
            options: newOptions,
          }));
          break;
        }

        case ACTION_TYPES.PUSH_CUSTOM_QUESTION: {
          // TODO: add mutation for adding question here
        }

        default:
          break;
      }
    },
    [customQuestion.options]
  );

  return { customQuestion, onAction };
};
