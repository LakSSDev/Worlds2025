// src/components/QualifiedTeams.tsx
type Team = { name: string; tag: string; logo: string };
type Row = { region: string; teams: Team[] };

import TG from '../../assets/equipos/TG.png';

const rows: Row[] = [
  {
    region: "LTA",
    teams: [
      { name: "LTA", tag: "LTA", logo: TG },
      { name: "VKS", tag: "VKS", logo: "/equipos/vks.png" },
      { name: "FLY", tag: "FLY", logo: "/equipos/fly.png" },
      { name: "100T", tag: "100T", logo: "/equipos/100t.png" },
    ],
  },
  {
    region: "LEC",
    teams: [
      { name: "LEC", tag: "LEC", logo: "/equipos/lec.png" },
      { name: "G2", tag: "G2", logo: "/equipos/g2.png" },
      { name: "MKOI", tag: "MKOI", logo: "/equipos/mkoi.png" },
      { name: "FNC", tag: "FNC", logo: "/equipos/fnc.png" },
    ],
  },
  {
    region: "LCP",
    teams: [
      { name: "LCP", tag: "LCP", logo: "/equipos/lcp.png" },
      { name: "CFO", tag: "CFO", logo: "/equipos/cfo.png" },
      { name: "PSG", tag: "PSG", logo: "/equipos/psg.png" },
      { name: "TSW", tag: "TSW", logo: "/equipos/tsw.png" },
    ],
  },
  {
    region: "LCK",
    teams: [
      { name: "LCK", tag: "LCK", logo: "/equipos/lck.png" },
      { name: "KT", tag: "KT", logo: "/equipos/kt.png" },
      { name: "HLE", tag: "HLE", logo: "/equipos/hle.png" },
      { name: "GEN", tag: "GEN", logo: "/equipos/gen.png" },
      // si quieres 5, añade { name: "T1", tag: "T1", logo: "/equipos/t1.png" },
    ],
  },
];

export default function QualifiedTeams() {
  return (
    <section className="mx-auto max-w-4xl rounded-xl bg-[#0f0f0f]/80 p-5 shadow-lg ring-1 ring-white/10">
      <h2 className="text-xl font-semibold text-white">Equipos Clasificados</h2>
      <div className="mt-2 h-px w-full bg-white/10" />
      <p className="mt-3 text-sm text-white/70">
        Los equipos clasificados son los siguientes:
      </p>

      <div className="mt-4 space-y-3">
        {rows.map((row, idx) => (
          <div
            key={row.region + idx}
            className="rounded-lg bg-[#151515]/80 px-4 py-3 ring-1 ring-white/10 hover:ring-white/20 transition"
          >
            {/* Si deseas mostrar la región */}
            {/* <div className="mb-2 text-xs font-medium text-white/60">{row.region}</div> */}

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {row.teams.map((t) => (
                <div
                  key={t.tag}
                  className="flex items-center gap-2 rounded-md bg-black/20 px-2 py-1.5"
                >
                  <img
                    src={t.logo}
                    alt={t.name}
                    className="h-6 w-6 object-contain"
                  />
                  <span className="text-white text-sm font-medium tracking-wide">
                    {t.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

