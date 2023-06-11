import { Api } from './../services/ApiService';

export const getPeopleList = async () => {
    const response = Api.get("people/?search={name}");
    return response;
};