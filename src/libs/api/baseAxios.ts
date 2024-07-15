"use client";
import axios, { AxiosRequestConfig } from "axios";

export const restApiBase = async (
  data: any,
  endPoint: string,
  method?: string
) => {
  const headers = {
    "Content-Type": "application/json",
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_KEY,
    "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPID_HOST,
  };

  const config: AxiosRequestConfig = {
    url: `${process.env.NEXT_PUBLIC_URL_SERVER}${endPoint}`,
    method: method ? method : "GET",
    params: data,
    withCredentials: true,
    headers: headers,
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error: any) {
    console.log("Network or other error", error);
    throw error;
  }
};
