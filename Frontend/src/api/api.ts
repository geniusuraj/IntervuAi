import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Define a base URL for your API
const baseURL = "http://localhost:8080/";

interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  // Add other properties as needed
}

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000, // Set a timeout (optional)
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need
  },
});

// Define a function to handle responses and enforce types
function handleResponse<T>(response: AxiosResponse): ApiResponse<T> {
  return {
    data: response.data,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    // Add other properties as needed
  };
}

// Define your API request functions
export function get<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  return axiosInstance
    .get(url, config)
    .then((response: AxiosResponse) => handleResponse<T>(response));
}

export function post<T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  return axiosInstance
    .post(url, data, config)
    .then((response: AxiosResponse) => handleResponse<T>(response));
}

// Add more request functions as needed (e.g., put, delete, etc.)

export default axiosInstance;
