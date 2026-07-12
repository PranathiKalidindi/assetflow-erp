import axios from "axios";

const API = "http://localhost:5000/api/assets";

export const getAssets = () => axios.get(API);

export const addAsset = (asset) => axios.post(API, asset);