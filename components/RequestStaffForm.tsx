"use client";

import { useState, type FormEvent } from "react";

const facilityTypes = [
  "Hospital",
  "Long-Term Care Home",
  "Retirement Residence",
  "Other",
];

const staffTypes = ["RN", "RPN", "PSW", "Multiple / not sure"];

const urgencyOptions = [
  "ASAP (within 24-48 hours)",
  "This week",
  "Ongoing / recurring coverage",
  "Future planning",
];

/**
 * Client-side stubbed submission; no backend is wired up yet. Swap the
 * onSubmit handler for a real endpoint (e.g. a Next.js API route emailing
 * the staffing coordinator on-call, or a CRM intake webhook) before launch.
 */
export default function RequestStaffForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
    event.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-teal-100 bg-teal-50 p-8 text-center"
      >
        <p className="font-display text-xl font-semibold text-navy-900">
          Request received.
        </p>
        <p className="mt-2 text-sm text-grey-500">
          A staffing coordinator will call you back shortly. For anything
          urgent, please call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-teal-600 hover:text-teal-700"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="facilityName" className="text-sm font-semibold text-navy-900">
            Facility name
          </label>
          <input
            id="facilityName"
            name="facilityName"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-border-subtle px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-teal-600"
          />
        </div>
        <div>
          <label htmlFor="facilityType" className="text-sm font-semibold text-navy-900">
            Facility type
          </label>
          <select
            id="facilityType"
            name="facilityType"
            required
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-teal-600"
          >
            <option value="" disabled>
              Select facility type
            </option>
            {facilityTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contactName" className="text-sm font-semibold text-navy-900">
            Your name
          </label>
          <input
            id="contactName"
            name="contactName"
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

      <fieldset>
        <legend className="text-sm font-semibold text-navy-900">
          Type of staff needed
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {staffTypes.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 rounded-xl border border-border-subtle px-3 py-2.5 text-sm font-medium text-grey-700 transition-colors hover:border-teal-400"
            >
              <input
                type="checkbox"
                name="staffType"
                value={option}
                className="h-4 w-4 accent-teal-600"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="positions" className="text-sm font-semibold text-navy-900">
            Number of positions
          </label>
          <input
            id="positions"
            name="positions"
            type="number"
            min={1}
            required
            defaultValue={1}
            className="mt-2 w-full rounded-xl border border-border-subtle px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-teal-600"
          />
        </div>
        <div>
          <label htmlFor="urgency" className="text-sm font-semibold text-navy-900">
            Timeline
          </label>
          <select
            id="urgency"
            name="urgency"
            required
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-teal-600"
          >
            <option value="" disabled>
              Select a timeline
            </option>
            {urgencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="details" className="text-sm font-semibold text-navy-900">
          Additional details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Shift times, unit or care needs, anything else we should know"
          className="mt-2 w-full rounded-xl border border-border-subtle px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-teal-600"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-teal-500 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request Staff"}
      </button>
    </form>
  );
}
