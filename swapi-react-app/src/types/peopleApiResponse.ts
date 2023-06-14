import { FullCaracter } from "./caracterType";

export interface PeopleApiResponse {
  count: number;
  next: string;
  previous: string;
  results: FullCaracter[];
}
