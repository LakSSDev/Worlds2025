import { rows } from "../../data/teams";

export default function QualifiedTeams() {
  return (
    <section className="mx-auto max-w-4xl rounded-xl bg-[#0f0f0f]/80 p-5 shadow-lg ring-1 ring-white/10">
      <h2 className="text-xl font-semibold text-white">Equipos Clasificados</h2>
      <p className="mt-3 text-sm text-white/70">
        Los equipos clasificados son los siguientes:
      </p>

      <div className="mt-4 space-y-3">
        {rows.map((row, idx) => (
          <div
            key={row.region + idx}
            className="rounded-lg bg-[#151515]/80 px-4 py-3 ring-1 ring-white/10 hover:ring-white/20 transition"
          >


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

