import axios, { AxiosHeaders } from "axios";
import { getAuthToken } from "../utils/auth.utils";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

instance.interceptors.request.use((cfg) => {
  const token = getAuthToken();
  if (cfg.headers && token)
    (cfg.headers as AxiosHeaders)?.set("authorization", `Bearer ${token}`);
  return cfg;
});

export default instance;
