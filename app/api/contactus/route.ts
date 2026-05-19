import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, type, mobile } = await req.json();

    if (!name || !email || !message || !type) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    const options: Record<string, string> = { "freelance": "Freelance", "full-time": "Full Time", "contract": "Contract" };

    const getSubject = (name: string, type: string) => {
      switch (type) {
        case "freelance":
          return `Freelance Opportunity from ${name}`;
        case "full-time":
          return `Full-Time Hiring Inquiry from ${name}`;
        case "contract":
          return `Contract Opportunity from ${name}`;
        default:
          return `New Message from ${name}`;
      }
    };
    const showMobile = type === "freelance" && mobile?.trim();
    let htmlContent = `
<div style="font-family: Arial, sans-serif; background:#05060a; padding:40px; color:#ffffff;">
  
  <div style="max-width:600px; margin:auto; background:#0b0d14; border:1px solid rgba(255,255,255,0.08); border-radius:16px; overflow:hidden;">

    <!-- HEADER -->
    <div style="padding:24px; background: linear-gradient(135deg,#22d3ee33,#3b82f633); text-align:center;">
      <h1 style="margin:0; font-size:22px; letter-spacing:1px;">
        ${getSubject(name, type)}
      </h1>
     
    </div>

    <!-- BODY -->
    <div style="padding:30px;">

      <div style="margin-bottom:20px;">
        <p style="margin:0; font-size:13px; opacity:0.6;">Name</p>
        <p style="margin:4px 0 0; font-size:16px; font-weight:600;">${name}</p>
      </div>

      <div style="margin-bottom:20px;">
        <p style="margin:0; font-size:13px; opacity:0.6;">Email</p>
        <p style="margin:4px 0 0; font-size:16px; font-weight:600;">${email}</p>
      </div>
       ${showMobile
        ? `
      <div style="margin-bottom:20px;">
        <p style="margin:0; font-size:13px; opacity:0.6;">Phone No</p>
        <p style="margin:4px 0 0; font-size:16px; font-weight:600;">${mobile}</p>
      </div>
      `
        : ""
      }
      <div style="margin-bottom:20px;">
        <p style="margin:0; font-size:13px; opacity:0.6;">Type</p>
        <p style="margin:4px 0 0; font-size:16px; font-weight:600;">${options[type as string] || "Not specified"}</p>
      </div>

      <div style="margin-bottom:20px;">
        <p style="margin:0; font-size:13px; opacity:0.6;">Message</p>
        <div style="
          margin-top:8px;
          padding:16px;
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:12px;
          line-height:1.6;
          font-size:14px;
          white-space:pre-wrap;
        ">
          ${message}
        </div>
      </div>

      <!-- CTA -->
      <div style="text-align:center; margin-top:30px;">
        <a href="mailto:${email}" 
          style="
            display:inline-block;
            padding:12px 20px;
            border-radius:999px;
            background:linear-gradient(90deg,#22d3ee,#3b82f6);
            color:#000;
            font-weight:600;
            text-decoration:none;
            font-size:14px;
          ">
          Reply to Sender
        </a>
      </div>

    </div>

    <!-- FOOTER -->
    <div style="
      padding:16px;
      text-align:center;
      font-size:12px;
      opacity:0.5;
      border-top:1px solid rgba(255,255,255,0.08);
    ">
      Sent from your Portfolio Contact Form • ${new Date().getFullYear()}
    </div>

  </div>
</div>
`




    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: getSubject(name, type),
      html: htmlContent,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}


