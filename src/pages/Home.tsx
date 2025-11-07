import { Header } from "../components/header";
import QualifiedTeams from "../components/grid/QualifiedTeams";
import { Summary } from "../components/grid/Summary";
import { Gift } from "../components/grid/Gift";

export const Home = () => {
  return (
    <div>
      <Header />

      <div className="grid grid-cols-5 grid-rows-5 gap-0 w-full h-[100vh] border-2 p-5 overflow-x-hidden">

       

        <div className="col-start-1 col-end-3 row-start-1 row-end-6 m-7">
          <Summary/>
        </div>

        <div className="col-start-3 col-end-6 row-start-4 row-end-6 m-7">
          <Gift/>
        </div>

         <div className="col-start-3 col-end-6 row-start-1 row-end-4 m-7">
          <QualifiedTeams/>
        </div>
      </div>
    </div>
  );
};
