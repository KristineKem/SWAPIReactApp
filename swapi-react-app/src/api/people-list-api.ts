import { Api } from "../services/ApiService";
import { PeopleApiResponse } from "../types/peopleApiResponse";

export const getPeopleList = async () => {
  const response = await Api.get<PeopleApiResponse>("/people");
  console.log(response);
  return response.data;
};

export const getNextPeopleList = async (api: string) => {
  const response = await Api.get<PeopleApiResponse>(`/people/?page=${api}`);
  console.log(response);
  return response.data;
};
