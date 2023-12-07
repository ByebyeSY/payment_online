import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { NextResponse } from "next/server";

const useApi = async <T>(url: string, config?: AxiosRequestConfig) => {
  try {
    const res: AxiosResponse<T> = await axios(
      `${process.env.NEXT_PUBLIC_API_HOST}:${process.env.NEXT_PUBLIC_API_PORT}/${url}`,
      config
    );

    return NextResponse.json(res.data);
  } catch (error: any) {
    return NextResponse.json(error.response.data);
  }
};

export default useApi;
