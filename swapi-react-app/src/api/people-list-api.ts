import { Api } from "../services/ApiService";
import { Caracter } from "../types/caracterType";

export const getPeopleList = async () => {
    const response = await Api.get<Caracter[]>("/people");
    return response.data;
};