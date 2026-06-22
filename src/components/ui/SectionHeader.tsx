interface SectionHeaderProps {
  title: string;
  subtitle: string;
  label?: string;
}

export function SectionHeader({ title, subtitle, label }: SectionHeaderProps) {
  return (
    <div className="space-y-3">
      {label ? (
        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
          {label}
        </span>
      ) : null}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}
