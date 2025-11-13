import { rows } from "../data/teams";
import bracket from "../assets/brackets.jpg";

export const Calendar = () => {
  const allTeams = rows.flatMap((row) => row.teams);

  return (
    <div className="w-full min-h-screen bg-[#0b0b0b] text-white flex flex-col items-center py-10 px-4">
      
      <h1 className="text-3xl font-bold mb-10 text-center">
        Bracket & Equipos
      </h1>

      {/* 🔹 TÍTULO RESPONSIVE */}
      <div
        className="
          m-5
          w-full sm:w-3/4 md:w-1/2 
          text-center 
          px-4 sm:px-6 py-5
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
          Transmisión en vivo desde Kick 👉{" "}
          <a
            href="https://kick.com/laksgg"
            target="_blank"
            className="text-amber-300 underline"
          >
            Laksgg
          </a>
        </p>
      </div>

      {/* 🔹 CONTENEDOR GENERAL RESPONSIVE */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-10 justify-center">
        
        {/* 🔹 SIDEBAR IZQUIERDO (solo en desktop) */}
        <aside className="hidden md:block w-[320px]">
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

        {/* 🔹 BRACKET CENTRO (100% en móvil) */}
        <main className="flex-1 max-w-4xl mx-auto">
          <img
            src={bracket}
            alt="Bracket del torneo"
            className="w-full rounded-2xl shadow-xl object-contain"
          />
        </main>

        {/* 🔹 LISTA DE EQUIPOS (solo móvil) */}
        <aside className="md:hidden w-full mt-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Equipos Clasificados
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
      </div>
    </div>
  );
};
