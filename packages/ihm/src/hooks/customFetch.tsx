"use client";

import toast from "react-hot-toast";

const customFetch = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE"
) => {
  try {
    const response = await (await fetch(url, { method })).json();

    if (
      typeof response === "string" ||
      response.status === 200 ||
      response.status === 202
    ) {
      return response;
    }

    const errors = Object.values(response.errors);
    toast.error(`Error status ${response.status} \n\n ${errors.join("\n\n")}`);

    return null;
  } catch (error) {
    toast.error(`Error status 500 \n Internal Server Error`);
    return null;
  }
};

export default customFetch;
