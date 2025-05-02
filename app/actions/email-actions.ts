"use server"

import { headers } from "next/headers"

export async function sendNotificationEmail() {
  try {
    const headersList = headers()
    const userAgent = headersList.get("user-agent") || "Unknown"
    const referer = headersList.get("referer") || "Direct"

    // Email content
    const subject = "New Walkthrough Request - Auryon CRM"
    const body = `
      Hello Sean,
      
      Someone has requested a walkthrough of Auryon CRM.
      
      Request Details:
      - Date/Time: ${new Date().toLocaleString()}
      - Source: ${referer}
      - User Agent: ${userAgent}
      
      You may want to follow up with them soon.
      
      Best regards,
      Auryon CRM Notification System
    `

    // For now, we'll just log this since we don't have an email service set up
    console.log("Email notification would be sent to sean@unfoldedproject.com")
    console.log("Subject:", subject)
    console.log("Body:", body)

    // In a real implementation, you would use an email service like SendGrid, AWS SES, etc.
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'sean@unfoldedproject.com',
      from: 'notifications@auryon.cloud',
      subject,
      text: body,
    })
    */

    return { success: true }
  } catch (error) {
    console.error("Failed to send notification email:", error)
    return { success: false, error }
  }
}
