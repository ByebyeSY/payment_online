import useApi from "@/hooks/useApi";

export const POST = () => {
  return useApi("products", { method: "POST" });
};
