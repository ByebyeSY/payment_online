import axios from "axios";

export const getHello = async () => {
  const res = await axios.get(
    `${process.env.NEXT_APP_API_HOST}:${process.env.NEXT_APP_API_PORT}`
  );

  return res.data;
};
