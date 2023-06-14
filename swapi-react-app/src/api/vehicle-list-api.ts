import { Api } from "../services/ApiService";
import { Vehicle } from "../types/vehicleType";

export const getVehicleList = async (api: string) => {
  const response = await Api.get<Vehicle>(api);
  return response.data;
}; 