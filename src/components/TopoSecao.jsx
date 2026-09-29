export function TopoSecao({ total }) {
  // Trata o singular ("1 viagem") e o plural ("X viagens")
  const textoContagem = `${total} ${total === 1 ? "viagem" : "viagens"}`;

  return (
    <div className="topo-secao">
      <div>
        <p className="sobre-titulo">ESCOLHE O TEU RITMO</p>
        <h2 id="titulo-destinos">Destinos para descobrir</h2>
      </div>
      <p className="contagem">{textoContagem}</p>
    </div>
  );
}
