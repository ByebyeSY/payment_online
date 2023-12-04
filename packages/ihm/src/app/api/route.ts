import useApi from "@/hooks/useApi";

export const GET = () => {
  return useApi("users", { method: "GET" });
};

export const POST = () => {
  return useApi("users", { method: "POST" });
};
