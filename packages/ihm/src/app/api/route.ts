import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_APP_API_HOST}:${process.env.NEXT_APP_API_PORT}`
    );

    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    return NextResponse.json({
      id: "POST",
    });
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
};
