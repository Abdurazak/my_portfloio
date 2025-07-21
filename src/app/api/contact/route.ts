import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const MY_EMAIL = process.env.MY_GMAIL_ADDRESS as string;

if (!MY_EMAIL) {
    console.error("MY_EMAIL environment variable is not set");
}

if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY environment variable is not set");
}

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: MY_EMAIL,
            subject: `New contact form submission from ${name}`,
            replyTo: email,
            html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
        });

        if (error) {
            console.error("Error sending email:", error);
            return NextResponse.json({ error: "Failed to send email", details: error }, { status: 500 });
        }

        return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 });
    } catch (e: unknown) {
        let errorMessage = 'An unknown error occurred';
        if (e instanceof Error) {
            errorMessage = e.message;
        }
        return NextResponse.json({ message: 'Internal Server Error', error: errorMessage }, { status: 500 });
    }


}