import React from 'react';
import { AgentStatus } from '../lib/types';
import { CheckCircle2, Loader2, Clock, Sparkles } from 'lucide-react';

interface AgentTimelineProps {
  agents: AgentStatus[];
  isGenerating: boolean;
}

export const AgentTimeline: React.FC<AgentTimelineProps> = ({ agents }) => {
  return (
    <div className="bg-[#14171C] border border-white/[0.08] rounded-2xl p-4 md:p-5 shadow-lg">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#F5BAC9]" />
          <h3 className="font-bold text-sm text-white">
            Equipe Multi-Agente Seu Pet Equilibrado
          </h3>
        </div>
        <span className="text-[11px] font-semibold text-[#9DA3B4]">
          5 Agentes Especializados em Adestramento e Design
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
        {agents.map((ag) => {
          const isRunning = ag.status === 'running';
          const isDone = ag.status === 'completed';

          return (
            <div
              key={ag.role}
              className={`relative p-3 rounded-xl border transition-all ${
                isRunning
                  ? 'border-[#F5BAC9] bg-[#2B181E]/50 shadow-rose scale-[1.02]'
                  : isDone
                  ? 'border-emerald-500/30 bg-emerald-500/5'
                  : 'border-white/[0.06] bg-[#0C0E12] opacity-75'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-lg">{ag.avatar}</span>
                {isRunning && (
                  <Loader2 className="w-3.5 h-3.5 text-[#F5BAC9] animate-spin" />
                )}
                {isDone && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                )}
                {ag.status === 'idle' && (
                  <Clock className="w-3.5 h-3.5 text-zinc-600" />
                )}
              </div>

              <div className="font-bold text-xs text-white truncate">
                {ag.name}
              </div>
              <div className="text-[10px] text-[#9DA3B4] truncate mb-1">
                {ag.title.split(' ')[0]}
              </div>

              <p className="text-[10px] line-clamp-2 leading-tight text-zinc-300 font-medium">
                {ag.message}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
