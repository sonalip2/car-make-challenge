import { GET_MAKES, GET_MODELS, GET_VEHICLES } from "../constants";
import cusFetch from "./fetch";

export const getMakes = async () => {
  const data = await cusFetch.get(GET_MAKES);
  return data;
};

export const getModels = async (make) => {
  const data = await cusFetch.get(`${GET_MODELS}?make=${make}`);
  return data;
};

export const getVehicles = async (make, model) => {
  const data = await cusFetch.get(
    `${GET_VEHICLES}?make=${make}&model=${model}`
  );
  return data;
};
