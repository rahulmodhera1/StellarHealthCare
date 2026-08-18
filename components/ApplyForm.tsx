"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { careersOpenRoles } from "@/lib/constants";

const positionOptions = [...careersOpenRoles.map((role) => role.title), "Other"];

const scheduleOptions = ["Full-time", "Part-time", "Per-diem", "Flexible / open to any"];

/**
 * Client-side stubbed submission; no backend is wired up yet, and resume
 * files are not actually uploaded anywhere. Before launch, wire this to a
 * real endpoint that can accept a file (e.g. a Next.js API route storing
 * the resume in S3/Vercel Blob and emailing the team, or an ATS form
 * action such as Breezy/BambooHR).
 */
export default function ApplyForm() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");
  const initialPosition = positionOptions.includes(roleParam ?? "")
    ? (roleParam as string)
    : "";

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
    event.currentTarget.reset();
    setFileName(null);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-teal-100 bg-teal-50 p-8 text-center"
      >
        <p className="font-display text-xl font-semibold text-navy-900">
          Thank you for applying.
        </p>
        <p className="mt-2 text-sm text-grey-500">
          Our team reviews every application personally and will follow up
          within a few business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-teal-600 hover:text-teal-700"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="position" className="text-sm font-semibold text-navy-900">
            Position applying for
          </label>
          <select
            id="position"
            name="position"
            required
            defaultValue={initialPosition}
            className="mt-2 w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-teal-600"
          >
            <option value="" disabled>
              Select a position
            </option>
            {positionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="schedule" className="text-sm font-semibold text-navy-900">
            Preferred schedule
          </label>
          <select
            id="schedule"
            name="schedule"
            required
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-border-subtle bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-teal-600"
          >
            <option value="" disabled>
              Select a schedule
            </option>
            {scheduleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="resume" className="text-sm font-semibold text-navy-900">
          Resume
        </label>
        <div className="mt-2 flex items-center gap-3 rounded-xl border border-dashed border-border-subtle px-4 py-3">
          <label
            htmlFor="resume"
            className="shrink-0 cursor-pointer rounded-full bg-grey-50 px-4 py-2 text-xs font-semibold text-navy-900 hover:bg-teal-50"
          >
            Choose file
          </label>
          <span className="truncate text-sm text-grey-500">
            {fileName ?? "PDF or Word document, up to 10MB"}
          </span>
        </div>
        <input
          id="resume"
          name="resume"
          type="file"
          required
          accept=".pdf,.doc,.docx"
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)}
          className="sr-only"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy-900">
          Anything else you&apos;d like us to know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-xl border border-border-subtle px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-teal-600"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-teal-500 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
