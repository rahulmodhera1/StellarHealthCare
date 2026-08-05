import { site } from "@/lib/constants";

export default function MapEmbed({ className }: { className?: string }) {
  const query = encodeURIComponent(`${site.address.full}`);

  return (
    <div className={className}>
      <iframe
        title={`Map showing ${site.name} at ${site.address.full}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
      />
    </div>
  );
}
