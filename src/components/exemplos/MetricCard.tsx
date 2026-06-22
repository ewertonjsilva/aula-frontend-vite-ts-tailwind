interface MetricCardProps {
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
}

export function MetricCard({ title, value, change, isPositive }: MetricCardProps) {
    return (
        <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-zinc-400">{title}</span>
            </div>
            <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-zinc-50 tracking-tight">{value}</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>
                    {change}
                </span>
            </div>
        </div>
    );
}