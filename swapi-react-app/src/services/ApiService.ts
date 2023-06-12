import axios, {AxiosInstance} from 'axios';

export class Api {
    private static axiosInstance: AxiosInstance;

    static init() {
        this.axiosInstance = axios.create({
            baseURL: 'https://swapi.dev/api'
    });
    }

    static async get<ResponseType>(url: string) {
        return await this.axiosInstance.get<ResponseType>(url);
    }
}