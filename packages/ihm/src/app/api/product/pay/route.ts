import useApi from "@/hooks/useApi";

export const POST = () => {
  return useApi("products/pay", { method: "POST" });
};
