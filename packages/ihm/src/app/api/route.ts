import useApi from "@/hooks/useApi";

export const GET = () => {
  return useApi("", { method: "GET" });
};
