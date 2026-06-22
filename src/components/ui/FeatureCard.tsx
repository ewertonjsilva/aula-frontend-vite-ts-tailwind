interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  accent?: string;
}

export function FeatureCard({ icon, title, description, accent = 'bg-sky-100 text-sky-700' }: FeatureCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200/70 bg-white p-5 shadow-sm shadow-slate-900/5">
      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${accent}`}>
        <span className="text-xl">{icon}</span>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
