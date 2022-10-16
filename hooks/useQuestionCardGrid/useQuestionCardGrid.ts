import { useCallback, useState } from "react";

import * as QUESTION_CARD_ACTION_TYPES from "../../components/questionsCard/components/question/actionTypes";
import * as ACTIVE_QUESTION_ACTION_TYPES from "../../components/activeQuestionsCard/actionTypes";

import { OnAction } from "./types";

export const useQuestionCardGrid = () => {
  const [selectedQuestion, setSelectedQuestion] = useState();
  const [selectedActiveQuestion, setSelectedActiveQuestion] = useState();

  const onAction = useCallback<OnAction>((action) => {
    switch (action.type) {
      case QUESTION_CARD_ACTION_TYPES.SELECT_QUESTION: {
        setSelectedQuestion(action.payload.question);
        break;
      }

      case ACTIVE_QUESTION_ACTION_TYPES.SELECT_ACTIVE_QUESTION: {
        setSelectedActiveQuestion(action.payload.question);
        break;
      }

      default:
        break;
    }
  }, []);

  return { selectedQuestion, selectedActiveQuestion, onAction };
};
