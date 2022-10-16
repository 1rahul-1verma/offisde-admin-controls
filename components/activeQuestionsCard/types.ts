import { SELECT_ACTIVE_QUESTION } from "./actionTypes";

export type SelectActiveQuestions = {
  type: typeof SELECT_ACTIVE_QUESTION;
  payload: {
    question: any; // TODO:
  };
};

export type OnAction = (action: SelectActiveQuestions) => void;
