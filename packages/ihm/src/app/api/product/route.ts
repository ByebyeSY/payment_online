import useApi from "@/hooks/useApi";
import { NextRequest } from "next/server";

export const GET = () => {
  return useApi("products");
};

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  return useApi("products/create", {
    method: "POST",
    data,
  });
};
