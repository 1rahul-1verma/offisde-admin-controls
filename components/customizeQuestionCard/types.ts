import * as CUSTOM_QUESTION_ACTION_TYPES from "./actionTypes";

type SetCustomQuestion = {
  type: typeof CUSTOM_QUESTION_ACTION_TYPES.SET_CUSTOM_QUESTION;
  payload: {
    question: string;
  };
};

export type SetCustomOption = {
  type: typeof CUSTOM_QUESTION_ACTION_TYPES.SET_CUSTOM_OPTION;
  payload: { id: string; option: string };
};

type AddCustomOption = {
  type: typeof CUSTOM_QUESTION_ACTION_TYPES.ADD_CUSTOM_OPTION;
};

type PushCustomOption = {
  type: typeof CUSTOM_QUESTION_ACTION_TYPES.PUSH_CUSTOM_QUESTION;
};

export type RemoveCustomOption = {
  type: typeof CUSTOM_QUESTION_ACTION_TYPES.REMOVE_CUSTOM_OPTION;
  payload: { id: string };
};

export type CustomQuestionActions =
  | SetCustomQuestion
  | SetCustomOption
  | AddCustomOption
  | RemoveCustomOption
  | PushCustomOption;

export type OnAction = (action: CustomQuestionActions) => void;

export type CustomQuestion = {
  question: string;
  options: { id: string; option: string }[];
};

export type FormError = {
  question: undefined | string;
  options: {
    [key: string]: string | undefined;
  };
};
