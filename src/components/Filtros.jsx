export function Filtros({ categoriaAtiva, aoMudarCategoria }) {
  const categorias = ["Todas", "Cidade", "Natureza", "Praia"];

  return (
    <div
      className="barra-filtros"
      role="group"
      aria-label="Filtrar viagens por tipo"
    >
      {categorias.map((cat) => {
        const estaAtivo = categoriaAtiva === cat;
        return (
          <button
            key={cat}
            type="button"
            className={`filtro ${estaAtivo ? "filtro--ativo" : ""}`}
            aria-pressed={estaAtivo}
            onClick={() => aoMudarCategoria(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
