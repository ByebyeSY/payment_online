import useApi from "@/hooks/useApi";

export const GET = () => {
  return useApi(
    `${process.env.NEXT_APP_API_HOST}:${process.env.NEXT_APP_API_PORT}/users`,
    { method: "GET" }
  );
};

export const POST = () => {
  return useApi(
    `${process.env.NEXT_APP_API_HOST}:${process.env.NEXT_APP_API_PORT}/users`,
    { method: "POST" }
  );
};
