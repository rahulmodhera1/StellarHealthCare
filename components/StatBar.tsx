import { stats } from "@/lib/constants";

export default function StatBar() {
  return (
    <section className="bg-teal-600 text-white">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-8 py-10 sm:grid-cols-4 sm:gap-x-8 sm:py-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-display text-3xl font-semibold sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-white sm:text-sm sm:tracking-normal sm:normal-case">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
