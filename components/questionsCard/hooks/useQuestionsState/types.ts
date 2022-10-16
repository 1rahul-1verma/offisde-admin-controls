import * as ACTION_TYPES from "./actionTypes";
import { SelectQuestionType } from "../../../../hooks/useQuestionCardGrid/types";

type SetQuestionType = {
  type: typeof ACTION_TYPES.SET_QUESTION_TYPE;
  payload: { type: string };
};

type SetQuestionSearchQuery = {
  type: typeof ACTION_TYPES.SET_QUESTION_SEARCH_QUERY;
  payload: { query: string };
};

export type OnAction = (
  action: SetQuestionType | SetQuestionSearchQuery | SelectQuestionType
) => void;
