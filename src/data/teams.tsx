// src/data/teamsData.ts
export type Team = { name: string; tag: string; logo: string };
export type Row = { region: string; teams: Team[] };


import DK from "../assets/equipos/Demons Kings.png";
import CF from "../assets/equipos/CelestialForce.png";
import MDX from "../assets/equipos/MDX.png";
import LF from "../assets/equipos/LF.png";

import GZL from "../assets/equipos/GZL.png";
import LDS from "../assets/equipos/LDS.png";
import B1 from "../assets/equipos/B1.png";
import RV from "../assets/equipos/RV.png";

import AKVZ from "../assets/equipos/AKVZ.png";
import PDC from "../assets/equipos/PDC.png";
import Z13 from "../assets/equipos/Z13.png";
import TD1 from "../assets/equipos/TD1.png";

import ELM from "../assets/equipos/ELM.png";
import SPK from "../assets/equipos/SPK.png";
import CSC from "../assets/equipos/CCS.png";
import ULT from "../assets/equipos/ULT.png";

export const rows: Row[] = [
  {
    region: "LTA",
    teams: [
      { name: "Demons Kings", tag: "DK", logo: DK },
      { name: "Celestia Force", tag: "CF", logo: CF },
      { name: "MDX", tag: "MDX", logo: MDX },
      { name: "Latin force", tag: "LF", logo: LF },
    ],
  },
  {
    region: "LEC",
    teams: [
      { name: "GZL Legends", tag: "GZL", logo: GZL },
      { name: "Los Demonios de Seirin", tag: "G2", logo: LDS },
      { name: "Bodrio 1 TM", tag: "B1", logo: B1 },
      { name: "Rebelión Vastaya", tag: "RV", logo: RV },
    ],
  },
  {
    region: "LCP",
    teams: [
      { name: "Akatsuki Venezuela ", tag: "AKVZ", logo: AKVZ },
      { name: "Pollitos de Colores", tag: "PDC", logo: PDC },
      { name: "Z13 team", tag: "Z13", logo: Z13 },
      { name: "THE DARKINS ONE ", tag: "TD1", logo: TD1 },
    ],
  },
  {
    region: "LCK",
    teams: [
      { name: "Elementals", tag: "ELM", logo: ELM },
      { name: "Spooky Team", tag: "SPK", logo: SPK },
      { name: "Cherrys Crushers", tag: "CCS", logo: CSC },
      { name: "Unlimited", tag: "ULT", logo: ULT },
    ],
  },
];
