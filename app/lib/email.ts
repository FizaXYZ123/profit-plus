type DemoEmailData = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
};

type ContactEmailData = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  referralCode?: string | null;
  message: string;
};

async function sendBrevoEmail(
  subject: string,
  htmlContent: string,
) {
  const response = await fetch(
    "https://api.brevo.com/v3/smtp/email",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY!,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: process.env.BREVO_SENDER_NAME || "ProfitPlus",
          email: process.env.BREVO_SENDER_EMAIL!,
        },
        to: [
          {
            email: process.env.ADMIN_EMAIL!,
            name: "Admin",
          },
        ],
        subject,
        htmlContent,
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `Brevo email failed: ${response.status} ${errorText}`,
    );
  }

  return response.json();
}

export async function sendDemoRequestEmail(
  data: DemoEmailData,
) {
  return sendBrevoEmail(
    `New Demo Request from ${data.name}`,
    `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
          <div style="max-width:600px;margin:30px auto;background:#ffffff;border-radius:10px;overflow:hidden;">

            <div style="background:#6739b7;padding:25px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;">
                New Demo Request
              </h1>
            </div>

            <div style="padding:30px;">

              <p style="font-size:16px;">
                A new demo request has been submitted on ProfitPlus.
              </p>

              <table style="width:100%;border-collapse:collapse;margin-top:20px;">

                <tr>
                  <td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;">
                    Name
                  </td>
                  <td style="padding:10px;border-bottom:1px solid #eee;">
                    ${data.name}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;">
                    Email
                  </td>
                  <td style="padding:10px;border-bottom:1px solid #eee;">
                    ${data.email}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;">
                    Phone
                  </td>
                  <td style="padding:10px;border-bottom:1px solid #eee;">
                    ${data.countryCode} ${data.phone}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;font-weight:bold;vertical-align:top;">
                    Message
                  </td>
                  <td style="padding:10px;">
                    ${data.message}
                  </td>
                </tr>

              </table>

              <p style="margin-top:30px;color:#666;">
                Please follow up with the customer regarding their demo request.
              </p>

            </div>

            <div style="background:#f5f5f5;padding:20px;text-align:center;color:#777;">
              ProfitPlus Admin Notification
            </div>

          </div>
        </body>
      </html>
    `,
  );
}

export async function sendContactUsEmail(
  data: ContactEmailData,
) {
  return sendBrevoEmail(
    `New Contact Us Message from ${data.name}`,
    `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
          <div style="max-width:600px;margin:30px auto;background:#ffffff;border-radius:10px;overflow:hidden;">

            <div style="background:#6739b7;padding:25px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;">
                New Contact Us Message
              </h1>
            </div>

            <div style="padding:30px;">

              <p style="font-size:16px;">
                A new contact form submission has been received.
              </p>

              <table style="width:100%;border-collapse:collapse;margin-top:20px;">

                <tr>
                  <td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;">
                    Name
                  </td>
                  <td style="padding:10px;border-bottom:1px solid #eee;">
                    ${data.name}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;">
                    Email
                  </td>
                  <td style="padding:10px;border-bottom:1px solid #eee;">
                    ${data.email}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;">
                    Phone
                  </td>
                  <td style="padding:10px;border-bottom:1px solid #eee;">
                    ${data.countryCode} ${data.phone}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;">
                    Referral Code
                  </td>
                  <td style="padding:10px;border-bottom:1px solid #eee;">
                    ${data.referralCode || "N/A"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;font-weight:bold;vertical-align:top;">
                    Message
                  </td>
                  <td style="padding:10px;">
                    ${data.message}
                  </td>
                </tr>

              </table>

              <p style="margin-top:30px;color:#666;">
                Please review and respond to this enquiry.
              </p>

            </div>

            <div style="background:#f5f5f5;padding:20px;text-align:center;color:#777;">
              ProfitPlus Admin Notification
            </div>

          </div>
        </body>
      </html>
    `,
  );
}