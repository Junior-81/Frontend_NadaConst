import React from "react";
import Hero from "./pages/home/heroSection";
import Servicos from "./pages/home/servicos";
import SobreONadaConsta from "./pages/home/sobreonadaconsta";

export const metadata = {
  title: 'PORTAL NADA CONSTA',
  description: 'Portal de Documentação e Certidões Negativas - Desenvolvido por: Secretaria Executiva de Governo Digital | SEGD'
};


export default function Home() {
  return (
    <main>
      <Hero />
      <Servicos />
      <SobreONadaConsta />
    </main>
  );
}
