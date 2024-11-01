import { Route, Routes } from "react-router-dom";

import { QuienesSomos } from "../../componentes/otros/QuienesSomos";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { ListarEquipos } from "../../componentes/Equipos/EquipoListar";
import { NoEncontrado } from "../../componentes/contenedor/PaginaNoEncontrada";
import { RegistrarEquipos } from "../../componentes/Equipos/EquipoRegistrar";
import { EquipoAdmin } from "../../componentes/Equipos/EquipoAdministrar";


export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/equiporeg" element={<RegistrarEquipos />} />
      <Route path="/pelilis" element={<ListarEquipos />} />
      <Route path="/equipoadm" element={<EquipoAdmin />} />


      <Route path="/quienes" element={<QuienesSomos />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
