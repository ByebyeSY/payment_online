import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { NextResponse } from "next/server";

const useApi = async <T>(url: string, config?: AxiosRequestConfig) => {
  try {
    const res: AxiosResponse<T> = await axios(url, config);

    return NextResponse.json(res.data);
  } catch (error: any) {
    throw new Error("Internal server error");
  }
};

export default useApi;
