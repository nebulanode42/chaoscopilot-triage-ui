import { Sidebar } from '@/components/dashboard/sidebar'
import { Header } from '@/components/dashboard/header'
import { StatsStrip } from '@/components/dashboard/stats-strip'
import { AlertCard } from '@/components/dashboard/alert-card'

export default function Page() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="flex-1 space-y-6 overflow-y-auto p-6">
          <StatsStrip />
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">Active Incidents</h2>
              <span className="text-xs text-muted-foreground">Updated just now</span>
            </div>
            <AlertCard />
          </section>
        </main>
      </div>
    </div>
  )
}
