'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { LayoutDashboard, Box, BrainCircuit, Settings, Activity } from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Containers', icon: Box },
  { label: 'AI Telemetry', icon: BrainCircuit },
  { label: 'Settings', icon: Settings },
] as const

export function Sidebar() {
  const [active, setActive] = useState<string>('Dashboard')

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-border bg-sidebar">
      <div className="flex h-14 items-center gap-2 border-b border-border px-4">
        <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Activity className="size-4" />
        </div>
        <span className="text-sm font-semibold tracking-tight text-foreground">
          ChaosCopilot
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-3">
        {navItems.map(({ label, icon: Icon }) => {
          const isActive = active === label
          return (
            <button
              key={label}
              type="button"
              onClick={() => setActive(label)}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-accent text-foreground'
                  : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground',
              )}
            >
              <Icon className="size-4" />
              {label}
            </button>
          )
        })}
      </nav>

      <div className="border-t border-border p-3">
        <div className="flex items-center gap-3 rounded-md px-3 py-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
            SR
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-foreground">Site Reliability</span>
            <span className="text-[11px] text-muted-foreground">on-call</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
