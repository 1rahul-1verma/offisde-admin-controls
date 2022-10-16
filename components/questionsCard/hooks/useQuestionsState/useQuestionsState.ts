// Libs
import { useState, useCallback } from "react";

// Constants
import * as ACTION_TYPES from "./actionTypes";

// Types
import { OnAction } from "./types";
import { RequestStateType } from "../../types";
import { OnAction as OnParentAction } from "../../../../hooks/useQuestionCardGrid/types";

const DEFAULT_REQUEST_STATE = {
  type: "1",
  searchQuery: "",
};

export const useQuestionsState = ({
  onParentAction,
}: {
  onParentAction: OnParentAction;
}): {
  requestState: RequestStateType;
  onAction: OnAction;
} => {
  const [requestState, setRequestState] = useState<RequestStateType>(
    DEFAULT_REQUEST_STATE
  );

  const onAction = useCallback<OnAction>(
    (action) => {
      switch (action.type) {
        case ACTION_TYPES.SET_QUESTION_TYPE: {
          const { type } = action.payload;
          setRequestState((prevRequestState) => ({
            ...prevRequestState,
            type,
          }));
          break;
        }

        case ACTION_TYPES.SET_QUESTION_SEARCH_QUERY: {
          const { query } = action.payload;
          setRequestState((prevRequestState) => ({
            ...prevRequestState,
            searchQuery: query,
          }));
          break;
        }

        default:
          onParentAction(action);
          break;
      }
    },
    [onParentAction]
  );

  return { requestState, onAction };
};
