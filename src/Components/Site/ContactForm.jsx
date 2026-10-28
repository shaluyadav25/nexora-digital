import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowUpRight, Check, Copy, LoaderCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { company } from "../../data/siteContent"
import { services } from "../../data/services"

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().refine((value) => !value || (/^\+?[0-9\s()-]{7,20}$/.test(value) && value.replace(/\D/g, "").length >= 7), "Enter a valid phone number."),
  service: z.string().min(1, "Choose the kind of help you need."),
  budget: z.string(),
  message: z.string().trim().min(20, "Add a little more detail (at least 20 characters)."),
})

function ContactForm() {
  const [deliveryStatus, setDeliveryStatus] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [draftText, setDraftText] = useState("")
  const [mailtoLink, setMailtoLink] = useState("")
  const [copied, setCopied] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(enquirySchema), defaultValues: { name: "", email: "", phone: "", service: "", budget: "", message: "" } })

  async function submitEnquiry(values) {
    setErrorMessage("")
    setDeliveryStatus("")
    setMailtoLink("")
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "Not provided"}`,
      `Service: ${values.service}`,
      `Budget: ${values.budget || "Not specified"}`,
      "",
      values.message,
    ].join("\n")

    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
      if (endpoint) {
        const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) })
        if (!response.ok) throw new Error(`The enquiry service returned ${response.status}. Please try again or email us directly.`)
        setDeliveryStatus("Your enquiry was sent. We’ll be in touch soon.")
        return
      }

      if (company.email) {
        const mailto = `mailto:${company.email}?subject=${encodeURIComponent(`Project enquiry from ${values.name}`)}&body=${encodeURIComponent(body)}`
        setDraftText(body)
        setMailtoLink(mailto)
        setDeliveryStatus("Your enquiry draft is ready. Open it in your email app and press Send to deliver it.")
        return
      }

      setDraftText(body)
      setDeliveryStatus("Your enquiry is ready. This demo has no receiving email or form endpoint configured, so copy the draft below to send it.")
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "The enquiry could not be sent. Please try again.")
    }
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draftText)
      setCopied(true)
    } catch {
      setErrorMessage("Clipboard access was unavailable. Select and copy the enquiry draft manually.")
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(submitEnquiry)} noValidate>
      <div className="form-row">
        <label htmlFor="enquiry-name">Your name <span aria-hidden="true">*</span><input id="enquiry-name" autoComplete="name" placeholder="Alex Morgan" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "enquiry-name-error" : undefined} {...register("name")} />{errors.name && <span className="field-error" id="enquiry-name-error">{errors.name.message}</span>}</label>
        <label htmlFor="enquiry-email">Email address <span aria-hidden="true">*</span><input id="enquiry-email" autoComplete="email" type="email" placeholder="alex@company.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "enquiry-email-error" : undefined} {...register("email")} />{errors.email && <span className="field-error" id="enquiry-email-error">{errors.email.message}</span>}</label>
      </div>
      <div className="form-row">
        <label htmlFor="enquiry-phone">Phone number <span className="field-optional">Optional</span><input id="enquiry-phone" autoComplete="tel" type="tel" placeholder="+91 98765 43210" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "enquiry-phone-error" : undefined} {...register("phone")} />{errors.phone && <span className="field-error" id="enquiry-phone-error">{errors.phone.message}</span>}</label>
        <label htmlFor="enquiry-service">What do you need? <span aria-hidden="true">*</span><select id="enquiry-service" aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "enquiry-service-error" : undefined} {...register("service")}><option value="">Choose a service</option>{services.map((service) => <option value={service.title} key={service.slug}>{service.title}</option>)}<option value="Something else">Something else</option></select>{errors.service && <span className="field-error" id="enquiry-service-error">{errors.service.message}</span>}</label>
      </div>
      <label htmlFor="enquiry-budget">Approximate budget <span className="field-optional">Optional</span><select id="enquiry-budget" {...register("budget")}><option value="">Prefer to discuss</option><option>Under ₹1 lakh</option><option>₹1–5 lakh</option><option>₹5–15 lakh</option><option>₹15 lakh+</option></select></label>
      <label htmlFor="enquiry-message">A little about your project <span aria-hidden="true">*</span><textarea id="enquiry-message" placeholder="What are you trying to make easier, clearer or possible?" rows="5" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "enquiry-message-error" : undefined} {...register("message")} />{errors.message && <span className="field-error" id="enquiry-message-error">{errors.message.message}</span>}</label>
      <div className="form-submit-row"><button className="button button-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? <>Preparing enquiry <LoaderCircle className="spinner" size={16} /></> : <>Send project enquiry <ArrowUpRight size={17} /> </>}</button><span className="form-required">* Required fields</span></div>
      {errorMessage && <p className="form-status form-status-error" role="alert">{errorMessage}</p>}
      {deliveryStatus && <div className="form-status" role="status"><Check size={17} /><p>{deliveryStatus}</p></div>}
      {mailtoLink && <a className="button button-primary mailto-draft-link" href={mailtoLink}>Open email draft <ArrowUpRight size={16} /></a>}
      {draftText && <div className="enquiry-draft"><div><strong>Enquiry draft</strong><button className="draft-copy" type="button" onClick={copyDraft}><Copy size={14} /> {copied ? "Copied" : "Copy draft"}</button></div><pre>{draftText}</pre></div>}
      <p className="form-demo-note">Your details stay in this browser unless you configure <code>VITE_CONTACT_ENDPOINT</code> or add a receiving email in the company settings.</p>
    </form>
  )
}

export default ContactForm
