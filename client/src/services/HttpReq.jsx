import api from "./ApiConfig";

export const getAllPrints = async () => {
  const resp = await api.get("/prints")
  return resp.data
}
export const getOnePrint = async (id) => {
  const resp = await api.get(`/prints/${id}`)
  return resp.data
}
export const createPrint = async (printData) => {
  const resp = await api.post("/prints", { print: printData });
  return resp.data
}
export const updatePrint = async (id, printData) => {
  const resp = await api.put(`/prints/${id}`, { print: printData })
  return resp.data
}
export const deletePrint = async (id) => {
  const resp = await api.delete(`/prints/${id}`)
  return resp.data
}