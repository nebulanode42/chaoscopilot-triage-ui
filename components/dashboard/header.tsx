import { CircleCheck, TriangleAlert } from 'lucide-react'

export function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur">
      <div>
        <h1 className="text-sm font-semibold text-foreground">Triage Overview</h1>
        <p className="text-xs text-muted-foreground">Real-time microservice monitoring</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <CircleCheck className="size-3.5 text-emerald-500" />
          <span className="text-xs font-medium text-foreground">
            System Health: <span className="text-emerald-400">98%</span>
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1.5">
          <TriangleAlert className="size-3.5 text-destructive" />
          <span className="text-xs font-medium text-destructive">1 Critical Alert</span>
        </div>
      </div>
    </header>
  )
}
