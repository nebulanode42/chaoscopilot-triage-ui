'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  TriangleAlert,
  Sparkles,
  Loader2,
  Container,
  Cpu,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'

type Phase = 'idle' | 'diagnosing' | 'diagnosed'

export function AlertCard() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [healing, setHealing] = useState(false)

  function runDiagnosis() {
    setPhase('diagnosing')
    setTimeout(() => setPhase('diagnosed'), 2000)
  }

  function executeSelfHeal() {
    setHealing(true)
    toast.success('Self-healing triggered successfully. Container restarting.', {
      description: 'Payment-Gateway · restarting with +512MB RAM limit',
    })
    setTimeout(() => setHealing(false), 2500)
  }

  return (
    <div className="overflow-hidden rounded-xl border border-destructive/30 bg-card shadow-lg shadow-destructive/5">
      {/* Alert header */}
      <div className="flex items-start gap-4 border-b border-border p-5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-destructive/15 text-destructive">
          <TriangleAlert className="size-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-destructive/15 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-destructive">
              Critical
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Container className="size-3.5" />
              Payment-Gateway
            </span>
          </div>
          <h2 className="mt-2 text-base font-semibold text-foreground text-balance">
            {"'Payment-Gateway' Docker container memory spike detected."}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Memory utilization exceeded 94% of the allocated limit over the last 3 minutes.
          </p>
        </div>
      </div>

      {/* Action / loading */}
      <div className="p-5">
        {phase !== 'diagnosed' && (
          <Button
            size="lg"
            onClick={runDiagnosis}
            disabled={phase === 'diagnosing'}
            className="w-full sm:w-auto"
          >
            {phase === 'diagnosing' ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Analyzing telemetry...
              </>
            ) : (
              <>
                <Sparkles className="size-4" />
                Run AI Root-Cause Diagnosis
              </>
            )}
          </Button>
        )}

        {/* AI Diagnosis Panel */}
        {phase === 'diagnosed' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="flex size-6 items-center justify-center rounded-md bg-primary/15 text-primary">
                <Sparkles className="size-3.5" />
              </span>
              AI Diagnosis Panel
            </div>

            <div className="rounded-lg border border-border bg-background/50 p-4">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                <Cpu className="size-3.5" />
                Analysis Complete
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                Analysis complete. The Go microservice in this container experienced a memory
                leak during a high-volume transaction spike. It is currently unresponsive.
              </p>
            </div>

            <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/5 p-4">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-emerald-400">
                <ShieldCheck className="size-3.5" />
                Recommended Action
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                Execute automated self-heal{' '}
                <span className="text-muted-foreground">
                  (Restart container with +512MB RAM limit)
                </span>
                .
              </p>

              <Button
                size="lg"
                onClick={executeSelfHeal}
                disabled={healing}
                className="mt-4 bg-emerald-600 text-white hover:bg-emerald-600/90 focus-visible:ring-emerald-500/40"
              >
                {healing ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Restarting container...
                  </>
                ) : (
                  <>
                    Execute Self-Heal
                    <ArrowRight className="size-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
