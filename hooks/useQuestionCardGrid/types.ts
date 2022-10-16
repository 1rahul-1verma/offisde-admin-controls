import * as QUESTION_CARD_ACTION_TYPES from "../../components/questionsCard/components/question/actionTypes";
import { SelectActiveQuestions } from "../../components/activeQuestionsCard/types";

export type SelectQuestionType = {
  type: typeof QUESTION_CARD_ACTION_TYPES.SELECT_QUESTION;
  payload: {
    question: any; // TODO: update it with question type
  };
};

export type OnAction = (
  action: SelectQuestionType | SelectActiveQuestions
) => void;
