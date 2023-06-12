import { Api } from "../services/ApiService";
import { Vehicle } from "../types/vehicleType";

export const getVehicleList = async () => {
    const response = await Api.get<Vehicle[]>("/vehicles");
    return response;
};