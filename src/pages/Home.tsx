
import QualifiedTeams from "../components/grid/QualifiedTeams";
import { Summary } from "../components/grid/Summary";
import { Gift } from "../components/grid/Gift";

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">


      <div
        className="
          grid grid-cols-1 auto-rows-auto gap-4 px-4 py-6 overflow-x-hidden
          md:grid-cols-5 md:grid-rows-5 md:gap-0 md:p-5 md:h-[100vh]
        "
      >
        {/* Summary */}
        <div
          className="
            order-1                                                                                     
            md:order-none md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-6 md:m-7
          "
        >
          <Summary />
        </div>

        {/* QualifiedTeams */}
        <div
          className="
            order-2
            md:order-none md:col-start-3 md:col-end-6 md:row-start-1 md:row-end-4 md:m-7
          "
        >
          <QualifiedTeams />
        </div>

        {/* Gift */}
        <div
          className="
            order-3
            md:order-none md:col-start-3 md:col-end-6 md:row-start-3 md:row-end-6 md:m-7
          "
        >
          <Gift />
        </div>
      </div>
    </div>
  );
};
