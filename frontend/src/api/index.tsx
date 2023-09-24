import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3001"})

export const listEvents = async () => {
  const resp = await api.get("/event")
  return resp.data;
}

export const login = async (data: {email:string, password:string}) => {
  const resp = await api.post("/login", data)
  return resp.data;
}

export default api;