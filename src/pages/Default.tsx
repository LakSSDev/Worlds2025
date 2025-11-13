
import { Link } from "react-router-dom";
import Countdown from "../components/countDown";

export const Default = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-[url('/fondo.jpg')] bg-cover bg-center opacity-60"></div>

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

      {/* Viñeta (sutil sombra interior) */}
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_rgba(0,0,0,0.3)]"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-4xl w-full">
        {/* Reloj */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <button
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-white/95 shadow-lg transition-transform duration-300 hover:scale-105
                       bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-sm sm:text-base"
          >
            <Countdown />
          </button>
        </div>

        {/* Título */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
          BIENVENIDOS A
          <span className="block bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent mt-1">
            WORLDS UNLIMITED 2025
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-base sm:text-lg md:text-2xl text-indigo-100/90 mb-8 px-2 sm:px-0">
          "DOMINA LA GRIETA, HUMILLA A TUS RIVALES Y DEMUESTRA POR QUÉ UNLIMITED ES EL REINO DE LOS VERDADEROS DIOSES"
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4 sm:px-0">
          {/* ÚNETE 
          <a
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105
                       bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-sm sm:text-base"
            href="https://forms.gle/j6uVZqCFFy73i28D8"
            target="_blank"
          >
            ÚNETE
          </a>*/}

          {/* LIGA UNLIMITED */}
         

          <Link
            to="/home"
            className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-white/95 shadow-lg transition-transform duration-300 hover:scale-105
                       bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-sm sm:text-base"
          >
            LIGA UNLIMITED
          </Link>
        </div>
      </div>
    </section>
  );
};
