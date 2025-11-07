export const Gift = () => {
  return (
    <div className="flex justify-center items-center h-8 mt-7">
      <div className="bg-[#111111] text-white rounded-2xl shadow-lg p-6 max-w-sm w-full border border-white/10 hover:border-[#00e6e6] transition-all duration-300">
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
          <p className="text-3xl font-extrabold text-[#FFD700]">XXX.XXXX.XXX WC</p>
          <p className="text-sm text-white/60 mt-1">
            + Trofeos personalizados y reconocimiento oficial
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="bg-[#00e6e6] text-[#111111] font-semibold px-5 py-2 rounded-lg hover:bg-[#00bfbf] transition-all">
            Ver detalles del premio
          </button>
        </div>
      </div>
    </div>
  );
};
