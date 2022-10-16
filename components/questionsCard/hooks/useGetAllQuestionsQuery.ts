import { useMemo } from "react";
import { RequestStateType } from "../types";

const OPTIONS = [
  { id: "1", option: "Option 1" },
  { id: "2", option: "Option 2" },
  { id: "3", option: "Option 3" },
  { id: "4", option: "Option 4" },
];

const MOCK_DATA = [
  { sNo: "1", question: "Will Virat score 50 today?", options: OPTIONS },
  { sNo: "2", question: "Will RCB win? ", options: OPTIONS },
  { sNo: "3", question: "How many catched will be dropped?", options: OPTIONS },
  { sNo: "4", question: "Who will win the toss?", options: OPTIONS },
  { sNo: "5", question: "Highest run scorer of the match?", options: OPTIONS },
  { sNo: "6", question: "How many wickets will Lee take?", options: OPTIONS },
  { sNo: "7", question: "How many maiden over in match?", options: OPTIONS },
  { sNo: "8", question: "How many wickets in PP?", options: OPTIONS },
  { sNo: "9", question: "Highest partnership in range?", options: OPTIONS },
  { sNo: "10", question: "What is your mobile number", options: OPTIONS },
  { sNo: "11", question: "What is your mobile number", options: OPTIONS },
  { sNo: "12", question: "What is your mobile number", options: OPTIONS },
];

export const useGetAllQuestionsQuery = ({
  requestState,
}: {
  requestState: RequestStateType;
}) => {
  return useMemo(() => ({ data: MOCK_DATA }), []);
};
