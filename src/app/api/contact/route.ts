import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

// Declare resend at the module level without initializing it
let resend: Resend;

// Function to initialize the Resend client if it hasn't been already
const initializeResend = () => {
    if (!resend) {
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            // This error will be caught by the try-catch block in the handler
            throw new Error("RESEND_API_KEY environment variable is not set on the server.");
        }
        resend = new Resend(resendApiKey);
    }
};

export async function POST(request: NextRequest) {
    try {
        // Ensure the Resend client is initialized
        initializeResend();

        const myEmail = process.env.MY_GMAIL_ADDRESS;
        if (!myEmail) {
            throw new Error("MY_GMAIL_ADDRESS environment variable is not set on the server.");
        }

        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: myEmail,
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
        console.error('API route error:', e);
        let errorMessage = 'An unknown error occurred';
        if (e instanceof Error) {
            errorMessage = e.message;
        }
        // Return a 500 status code for server-side errors
        return NextResponse.json({ message: 'Internal Server Error', error: errorMessage }, { status: 500 });
    }
}