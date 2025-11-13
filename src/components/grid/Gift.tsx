export const Gift = () => {
  return (
    <div className="hidden xl:block mt-20">
      <div className="m-auto bg-[#111111] text-white rounded-2xl shadow-lg p-4 max-w-sm w-full border border-white/10 hover:border-[#00e6e6] transition-all duration-300">
        <h3 className="text-xl font-bold mb-2 text-[#00e6e6]">
          🏆 Premio del Torneo
        </h3>
        <p className="text-sm text-white/70 mb-4">
          El equipo campeón de{" "}
          <span className="font-semibold text-white">
            Worlds Unlimited 2025
          </span>{" "}
          se llevará:
        </p>
        <div className="bg-[#1a1a1a] p-4 rounded-xl text-center border border-white/10">
          <p className="text-3xl font-extrabold text-[#FFD700]">20.000 WC</p>
          <p className="text-sm text-white/60 mt-1">
            + Trofeos personalizados y reconocimiento oficial
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <a 
          href="https://www.instagram.com/unlimited_worlds_?igsh=bzIyMjc5bjEzZTYz&utm_source=qr"
          target="_black"
          className="bg-[#00e6e6] text-[#111111] font-semibold px-5 py-2 rounded-lg hover:bg-[#00bfbf] transition-all">
            Página Oficial IG
          </a>
        </div>
      </div>
    </div>
  );
};
