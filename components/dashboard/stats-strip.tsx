import { Box, Activity, Clock, Gauge } from 'lucide-react'

const stats = [
  { label: 'Active Containers', value: '42', icon: Box, hint: '3 scaling' },
  { label: 'Avg Latency', value: '128ms', icon: Clock, hint: 'p95' },
  { label: 'Req / sec', value: '8.4k', icon: Activity, hint: '+12%' },
  { label: 'CPU Load', value: '61%', icon: Gauge, hint: 'cluster-wide' },
]

export function StatsStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map(({ label, value, icon: Icon, hint }) => (
        <div
          key={label}
          className="rounded-xl border border-border bg-card p-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{label}</span>
            <Icon className="size-4 text-muted-foreground" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-xl font-semibold text-foreground">{value}</span>
            <span className="text-[11px] text-muted-foreground">{hint}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
