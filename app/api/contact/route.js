import Contact from "@/models/Contact";
import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const contacts = await Contact.find({});
    return NextResponse.json({ success: true, data: contacts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    if (!body.name || !body.number || !body.email) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 });
    }

    const contact = new Contact(body);
    await contact.save();

    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  await dbConnect();
  try {
    const { id } = await req.json();
    await Contact.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Contact deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
export async function PUT(req) {
  await dbConnect();
  const { id, name, number, email } = await req.json();
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { name, number, email },
      { new: true }
    );
    return NextResponse.json({ success: true, data: updatedContact }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
