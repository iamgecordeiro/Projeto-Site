import { useState } from "react";
import { viagens } from "../viagens";
import { CartaoViagem } from "./components/CartaoViagem";
import { Filtros } from "./components/Filtros";
import { Cabecalho } from "./components/Cabecalho";
import { Hero } from "./components/Hero";
import { TopoSecao } from "./components/TopoSecao";
import { Rodape } from "./components/Rodape";
import "../App.css";

export default function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");

  const viagensFiltradas =
    categoriaAtiva === "Todas"
      ? viagens
      : viagens.filter((v) => v.tipo === categoriaAtiva);

  return (
    <div className="pagina" id="inicio">
      <Cabecalho />
      <Hero />

      <main>
        <section
          className="catalogo"
          id="destinos"
          aria-labelledby="titulo-destinos"
        >
          <TopoSecao total={viagensFiltradas.length} />
          <Filtros
            categoriaAtiva={categoriaAtiva}
            aoMudarCategoria={setCategoriaAtiva}
          />
          <div className="grelha">
            {viagensFiltradas.map((item) => (
              <CartaoViagem key={item.id} viagem={item} />
            ))}
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}
