const FORMSPARK_ID = "A705f9bY"

export interface SubmitFormsparkParams {
  message: string
  subject?: string
  from?: string
  data?: Record<string, unknown>
}

export const submitFormspark = async (
  params: SubmitFormsparkParams
): Promise<void> => {
  const {message, subject, from, data} = params

  await fetch(`https://submit-form.com/${FORMSPARK_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      message,
      ...data,
      _email: {
        subject: subject ?? "HackUSU Contact Form Submission",
        from: `${from ?? "Submission"} via Contact Form`
      }
    })
  })
}
