import axios from "axios"

export const jsonConfig = axios.create({baseURL: "https://jsonplaceholder.typicode.com"})
export const fakeStoreConfig = axios.create({baseURL: "https://fakestoreapi.com"})