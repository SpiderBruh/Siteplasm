'use server';

import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

const dummyResend = {
  emails: {
    send: async () => ({ data: null, error: new Error('Resend not configured') }),
  },
} as any;

const resend = resendApiKey ? new Resend(resendApiKey) : dummyResend;

export async function sendInquiryNotification(data: {
  name: string;
  email: string;
  message: string;
  projectType?: string;
}) {
  try {
    const { data: res, error } = await resend.emails.send({
      from: 'Siteplasm* <onboarding@resend.dev>', // Replace with your verified domain
      to: [process.env.CONTACT_EMAIL || 'cesaresmero2@gmail.com'],
      subject: `[NEW LEAD] ${data.projectType || 'General Inquiry'} - ${data.name}`,
      html: `
        <div style="font-family: 'Helvetica', sans-serif; background-color: #0a0a0a; color: #ffffff; padding: 40px; border: 1px solid #333;">
          <div style="border-bottom: 2px solid #ff3e00; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="font-size: 24px; letter-spacing: 2px; margin: 0; color: #ffffff;">SITEPLASM* LEAD REPORT</h1>
            <p style="color: #666; font-size: 12px; margin-top: 5px; text-transform: uppercase; letter-spacing: 1px;">Incoming Project Inquiry</p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h2 style="font-size: 14px; color: #ff3e00; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Client Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #999; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #fff;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #999;">Email:</td>
                <td style="padding: 8px 0; color: #fff;"><a href="mailto:${data.email}" style="color: #ff3e00; text-decoration: none;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #999;">Project Type:</td>
                <td style="padding: 8px 0; color: #fff; font-weight: bold;">${data.projectType || 'N/A'}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 30px; background-color: #111; padding: 20px; border-left: 4px solid #ff3e00;">
            <h2 style="font-size: 14px; color: #ff3e00; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Project Brief</h2>
            <p style="color: #ccc; line-height: 1.6; margin: 0;">${data.message}</p>
          </div>

          <div style="border-top: 1px solid #333; padding-top: 20px; text-align: center;">
            <p style="color: #666; font-size: 11px;">This lead was captured automatically by your Siteplasm* AI Strategist.</p>
            <p style="color: #666; font-size: 11px;">&copy; 2024 Siteplasm Digital Engines</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }

    return { success: true, data: res };
  } catch (err) {
    console.error('Unexpected error sending email:', err);
    return { success: false, error: err };
  }
}
