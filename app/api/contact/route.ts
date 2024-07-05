import { ContactFormSchema } from "@/app/schema/ContactFormSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const json = await request.json();
  console.log(json);
  const parseResult = ContactFormSchema.safeParse(json);
  if (parseResult.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json(
      {
        success: false,
        errors: parseResult.error.issues,
      },
      { status: 400 },
    );
  }
}
