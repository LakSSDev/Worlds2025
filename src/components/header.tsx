import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header className="w-full">
        <nav className="border-gray-200 bg-[#111111] py-5">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-around px-4">
            <a href="#" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                Unlimited Worlds 2025
              </span>
            </a>

            <div
              className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"

            >
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                <li>
                  < Link
                    className="block border-b py-2 pr-4 pl-3 text-gray-400 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700"
                    to="/home"
                  >
                    <span className="self-center text-x font-semibold whitespace-nowrap text-white">
                      Inicio
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="block border-b py-2 pr-4 pl-3 text-gray-400 hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700"
                    to="/calendar"
                  >
                    <span className="self-center text-x font-semibold whitespace-nowrap text-white">
                      Calendario
                    </span>
                  </Link>
                </li>

              
               
              </ul>
            </div>

          </div>
        </nav>
      </header>
    </div>
  );
};
