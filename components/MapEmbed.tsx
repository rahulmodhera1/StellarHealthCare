import { clsx } from "clsx";
import { site } from "@/lib/constants";

export default function MapEmbed({ className }: { className?: string }) {
  const query = encodeURIComponent(`${site.address.full}`);

  return (
    <div className={clsx("h-full w-full", className)}>
      <iframe
        title={`Map showing ${site.name} at ${site.address.full}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
      />
    </div>
  );
}
