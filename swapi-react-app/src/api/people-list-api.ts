import { Api } from "../services/ApiService";
import { PeopleApiResponse } from "../types/peopleApiResponse";

export const getPeopleList = async () => {
  const response = await Api.get<PeopleApiResponse>("/people");
  return response.data;
};