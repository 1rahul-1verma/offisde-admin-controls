import { CustomQuestion } from "./types";

export const validate = (question: CustomQuestion) => {
  if (!question.question) return false;
  return !question.options.some((option) => !option.option);
};
