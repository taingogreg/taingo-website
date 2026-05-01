"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface SliderFieldProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}

function SliderField({ label, value, min, max, step, format, onChange }: SliderFieldProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className="text-paper/65 text-xs font-medium">{label}</span>
        <span className="text-sun font-bold text-sm tabular-nums">{format(value)}</span>
      </div>
      <div className="relative h-1.5 bg-steel rounded-full">
        {/* filled track */}
        <div
          className="absolute top-0 left-0 h-1.5 bg-copper rounded-full pointer-events-none"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-1.5"
          style={{ margin: 0 }}
        />
        {/* thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-copper rounded-full border-2 border-paper shadow pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
    </div>
  );
}

function fmt$(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

export default function ROICalculator() {
  const [callsPerDay, setCallsPerDay] = useState(25);
  const [pctNew, setPctNew] = useState(30);
  const [jobValue, setJobValue] = useState(500);
  const [pctMissed, setPctMissed] = useState(25);

  const { missedPerDay, missedNew, lostMonth, lostYear } = useMemo(() => {
    const missed = callsPerDay * (pctMissed / 100);
    const missedNewVal = missed * (pctNew / 100);
    const month = missedNewVal * jobValue * 30;
    return {
      missedPerDay: missed,
      missedNew: missedNewVal,
      lostMonth: month,
      lostYear: month * 12,
    };
  }, [callsPerDay, pctNew, jobValue, pctMissed]);

  return (
    <section className="bg-midnight py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-copper-light mb-3">
            ROI Calculator
          </p>
          <h2
            className="font-black text-paper leading-tight mb-3 [font-family:var(--font-poppins),system-ui,sans-serif]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.025em" }}
          >
            Unlock Your Hidden Revenue
          </h2>
          <p className="text-paper/60 text-sm max-w-lg mx-auto leading-relaxed">
            Find out how much revenue your business could gain by answering every call.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Sliders */}
          <div className="bg-steel/50 rounded-2xl p-6 space-y-6">
            <SliderField
              label="Average calls per day"
              value={callsPerDay}
              min={1}
              max={200}
              step={1}
              format={(v) => `${v} calls`}
              onChange={setCallsPerDay}
            />
            <SliderField
              label="% of callers who are new customers"
              value={pctNew}
              min={1}
              max={100}
              step={1}
              format={(v) => `${v}%`}
              onChange={setPctNew}
            />
            <SliderField
              label="Average new customer job value"
              value={jobValue}
              min={100}
              max={10000}
              step={50}
              format={(v) => `$${v.toLocaleString()}`}
              onChange={setJobValue}
            />
            <SliderField
              label="% of calls currently not answered"
              value={pctMissed}
              min={1}
              max={80}
              step={1}
              format={(v) => `${v}%`}
              onChange={setPctMissed}
            />

            {/* Intermediate stats */}
            <div className="flex gap-4 pt-2 border-t border-steel">
              <div>
                <p className="text-paper/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                  Missed calls / day
                </p>
                <p className="text-paper font-bold text-lg tabular-nums">
                  {missedPerDay.toFixed(1)}
                </p>
              </div>
              <div className="w-px bg-steel" />
              <div>
                <p className="text-paper/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                  Missed new customers / day
                </p>
                <p className="text-paper font-bold text-lg tabular-nums">
                  {missedNew.toFixed(1)}
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {/* Monthly */}
            <div className="bg-midnight border border-steel rounded-2xl p-6">
              <div className="w-full min-w-0 overflow-x-auto overflow-y-visible pb-0.5 [scrollbar-width:thin] mb-2">
                <p className="text-paper/82 font-extrabold uppercase tracking-[0.2em] whitespace-nowrap text-[clamp(10px,1.35vw,0.6875rem)]">
                  Revenue you&rsquo;re losing / month
                </p>
              </div>
              <p
                className="font-bold text-sun leading-none tabular-nums [font-family:var(--font-poppins),system-ui,sans-serif]"
                style={{ fontSize: "clamp(48px, 6vw, 72px)", letterSpacing: "-0.03em" }}
              >
                {fmt$(lostMonth)}
              </p>
              <div className="w-full min-w-0 overflow-x-auto overflow-y-visible pb-0.5 [scrollbar-width:thin] mt-2">
                <p className="text-paper/75 font-semibold whitespace-nowrap tracking-tight text-[clamp(11px,1.85vw,0.8125rem)]">
                  That&rsquo;s {missedNew.toFixed(1)} new customers slipping away every
                  day.
                </p>
              </div>
            </div>

            {/* Yearly */}
            <div className="bg-copper rounded-2xl p-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-paper text-xs font-extrabold tracking-[0.2em] uppercase mb-1">
                  Yearly opportunity
                </p>
                <p
                  className="font-bold text-paper leading-none tabular-nums [font-family:var(--font-poppins),system-ui,sans-serif]"
                  style={{ fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-0.03em" }}
                >
                  {fmt$(lostYear)}
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 bg-paper text-copper font-bold text-sm px-5 py-3 rounded-xl hover:bg-bone transition-colors whitespace-nowrap"
              >
                Get it back →
              </Link>
            </div>

            <div className="w-full min-w-0 overflow-x-auto overflow-y-visible pb-0.5 [scrollbar-width:thin] flex justify-center px-2">
              <p className="text-paper/70 text-[clamp(11px,1.65vw,0.8125rem)] font-semibold whitespace-nowrap tracking-tight text-center">
                Estimate based on your inputs. Actual results vary by industry and
                market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
