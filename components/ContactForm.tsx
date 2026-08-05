"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

type InquiryType = "staffing" | "homecare";

const inquiryOptions: { value: InquiryType; label: string }[] = [
  { value: "staffing", label: "Staffing (hospital / facility)" },
  { value: "homecare", label: "Home Care (family)" },
];

/**
 * Client-side stubbed submission; no backend is wired up yet. Swap the
 * onSubmit handler for a real endpoint (e.g. a Next.js API route emailing
 * through Resend/Postmark, or a Formspree/HubSpot form action) before launch.
 */
export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialInquiry = searchParams.get("inquiry") === "homecare" ? "homecare" : "staffing";

  const [inquiry, setInquiry] = useState<InquiryType>(initialInquiry);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
    event.currentTarget.reset();
    setInquiry("staffing");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-teal-100 bg-teal-50 p-8 text-center"
      >
        <p className="font-display text-xl font-semibold text-navy-900">
          Thank you, we&apos;ve received your message.
        </p>
        <p className="mt-2 text-sm text-grey-500">
          A member of our care team will be in touch within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-teal-600 hover:text-teal-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <fieldset>
        <legend className="text-sm font-semibold text-navy-900">
          I&apos;m inquiring about
        </legend>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {inquiryOptions.map((option) => (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                inquiry === option.value
                  ? "border-teal-600 bg-teal-50 text-teal-700"
                  : "border-border-subtle text-grey-700 hover:border-teal-400"
              }`}
            >
              <input
                type="radio"
                name="inquiry"
                value={option.value}
                checked={inquiry === option.value}
                onChange={() => setInquiry(option.value)}
                className="h-4 w-4 accent-teal-600"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-navy-900">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-border-subtle px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-teal-600"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-navy-900">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-border-subtle px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-teal-600"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-navy-900">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-xl border border-border-subtle px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-teal-600"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy-900">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-xl border border-border-subtle px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-teal-600"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-teal-500 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
