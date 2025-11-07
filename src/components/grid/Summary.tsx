export const Summary = () => {
  return (
    <section className="mx-auto max-w-5xl rounded-2xl bg-[#0f0f0f]/80 p-6 shadow-lg ring-1 ring-white/10">
      <h2 className="text-2xl font-semibold text-white">Formato del Torneo</h2>
      <div className="mt-2 h-px w-full bg-white/10" />
      <p className="mt-3 text-sm text-white/70">
        El <span className="text-cyan-400 font-medium">Worlds Unlimited 2025</span> seguirá un formato competitivo inspirado en los Worlds oficiales de League of Legends (PC), manteniendo la intensidad y equilibrio del sistema suizo. 
      </p>

      <div className="mt-6 space-y-8">
        {/* Fase Suiza */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400">⚔️ Fase Suiza (Swiss Stage)</h3>
          <p className="mt-2 text-sm text-white/70">
            La fase principal contará con <span className="font-semibold text-white">16 equipos clasificados</span> directamente. 
            Todos comienzan con un marcador <span className="font-semibold text-white">0-0</span> y se enfrentarán a oponentes con el mismo récord.
          </p>
          <ul className="mt-3 list-disc list-inside text-white/70 text-sm space-y-1">
            <li>Cada equipo jugará hasta lograr <span className="text-green-400 font-medium">3 victorias</span> o sufrir <span className="text-red-400 font-medium">3 derrotas</span>.</li>
            <li><strong>3 victorias</strong> → clasifica a los <span className="text-cyan-400 font-medium">Playoffs</span>.</li>
            <li><strong>3 derrotas</strong> → queda eliminado.</li>
            <li>Los enfrentamientos serán <span className="text-white font-medium">Bo1</span>, con partidas decisivas <span className="text-white font-medium">Bo3</span>.</li>
            <li>Duración total estimada: <span className="text-white font-medium">5 rondas</span>.</li>
          </ul>
        </div>

        {/* Playoffs */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400">🏅 Playoffs</h3>
          <p className="mt-2 text-sm text-white/70">
            Los <span className="font-semibold text-white">8 mejores equipos</span> avanzarán a la etapa final.  
            Aquí comienza la verdadera batalla por el título de campeón del <span className="text-cyan-400 font-medium">Worlds Unlimited 2025</span>.
          </p>
          <ul className="mt-3 list-disc list-inside text-white/70 text-sm space-y-1">
            <li>Formato de <span className="font-medium text-white">eliminación directa</span>.</li>
            <li>Todas las series serán al <span className="font-medium text-white">mejor de 5 (Bo5)</span>.</li>
            <li>Rondas: Cuartos de final → Semifinales → Gran Final.</li>
          </ul>
        </div>

        {/* Tabla resumen */}
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full text-sm border border-white/10 rounded-xl overflow-hidden">
            <thead className="bg-white/5 text-white/80">
              <tr>
                <th className="px-3 py-2 text-left">Fase</th>
                <th className="px-3 py-2 text-left">Equipos</th>
                <th className="px-3 py-2 text-left">Formato</th>
                <th className="px-3 py-2 text-left">Clasifican</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-t border-white/10">
                <td className="px-3 py-2">Fase Suiza</td>
                <td className="px-3 py-2">16</td>
                <td className="px-3 py-2">Bo1 / Bo3 — 3-0 clasifica, 0-3 elimina</td>
                <td className="px-3 py-2">8</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="px-3 py-2">Playoffs</td>
                <td className="px-3 py-2">8</td>
                <td className="px-3 py-2">Bo5 — Eliminación directa</td>
                <td className="px-3 py-2">1 Campeón</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-8 text-xs text-white/40">
        Este formato busca mantener la emoción y la competitividad del sistema suizo, donde cada victoria y derrota define el destino de los equipos.
      </p>
    </section>
  );
};
