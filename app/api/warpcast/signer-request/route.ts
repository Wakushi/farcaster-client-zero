import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()
    const fcSignerRequestResponse = await fetch(
      `https://api.warpcast.com/v2/signed-key-request?token=${body.farcasterUser.token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    return NextResponse.json(fcSignerRequestResponse)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error })
  }
}
