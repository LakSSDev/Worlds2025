import { rows } from "../data/teams";
import bracket from "../assets/brackets.jpg";

export const Calendar = () => {
  const allTeams = rows.flatMap((row) => row.teams);

  return (
    <div className="w-full min-h-screen bg-[#0b0b0b] text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-10">Bracket & Equipos</h1>

      {/* Título con fecha del sorteo */}
      <div
        className="
    m-5
    w-1/2 
    text-center 
    px-2 py-5
    rounded-2xl
    bg-white/5 
    backdrop-blur-md 
    border border-white/10
    shadow-xl
"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Sorteo Oficial • Worlds Unlimited 2025
        </h2>

        <p className="mt-2 text-lg md:text-xl text-indigo-200/80 font-medium">
          Este sábado • 9:00 PM (Hora Perú)
        </p>

        <p className="mt-1 text-sm text-indigo-200/50">
          Transmisión en vivo desde kick https://kick.com/laksgg
        </p>
      </div>
    

      <div className="flex w-full max-w-7xl gap-10 justify-center">
        {/* -------- SIDEBAR IZQUIERDO (2 COLUMNAS, SIN SCROLL) -------- */}
        <aside className="hidden md:block w-[360px]">
          <h2 className="text-xl font-semibold mb-4">Equipos</h2>

          <div className="grid grid-cols-2 gap-3">
            {allTeams.map((t, i) => (
              <div
                key={i}
                className="
                  flex items-center gap-2
                  bg-[#111111]/90
                  hover:bg-[#1a1a1a]
                  transition-all duration-200
                  rounded-xl
                  px-3 py-2
                  shadow-sm
                "
              >
                <img
                  src={t.logo}
                  alt={t.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="leading-tight">
                  <p className="text-xs font-semibold">{t.name}</p>
                  <p className="text-[10px] text-blue-300">{t.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* -------- BRACKET CENTRADO (NO TOCO EL FONDO) -------- */}
        <main className="flex-1 max-w-4xl">
          <img
            src={bracket}
            alt="Bracket del torneo"
            className="w-full rounded-2xl shadow-xl"
          />
        </main>
      </div>
    </div>
  );
};
