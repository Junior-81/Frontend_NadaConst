import React from "react";
import DivisorDeForma from "@/app/components/DivisorDeForma/divisor";
import DivisorDeFormaContrario from "@/app/components/DivisorDeForma/divisorcontrario";

const SecaoIntroducao = () => {
  return (
    <section className="bg-white px-6 py-12 md:py-20">
      <div className="max-w-4xl md:max-w-6xl mx-auto lg:px-0 px-10">
        <h1 className="poppins-bold text-5xl text-[#0054A3]">
          O CURSO
        </h1>
        <p className="roboto-medium mt-4 text-blue-900 text-base lg:text-xl leading-relaxed">
        Para os funcionários que atuam tanto na administração direta, quanto
          indireta do Município de Jaboatão. Se a sua instituição já completou o
          procedimento de inscrição dos servidores no sistema SEI/Jaboatão, ela
          está apta a iniciar o conteúdo disponibilizado.
          <br />
          Caso você encontre dificuldades ao tentar acessá-lo, recomendamos que
          verifique junto aos multiplicadores do seu órgão se todas as
          informações necessárias para efetuar o cadastro foram devidamente
          encaminhadas e registradas.
        </p>

        <div className="relative inline-block mt-6">
          <a
            href="https://tecbrasil.org/?unidade=cmf&cc=6TCTUHYGAF"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#003476] text-white py-3 px-6 rounded-2xl text-lg font-semibold border-2 border-transparent transition-all duration-500 ease-in-out hover:bg-white hover:text-[#003476] hover:border-[#003476] hover:scale-105 will-change-transform inline-block"
          >
            Vídeo Aulas Treinamento SEI
          </a>
        </div>
      </div>
    </section>
  );
};

const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 text-white p-6 rounded-lg flex flex-col items-center shadow-lg">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-lg text-center">{description}</p>
    </div>
  );
};

const SecaoCards = () => {
  return (
    <section className="relative w-full min-h-[400px] py-12 md:py-20 flex flex-col justify-center bg-[url('/images/bg/fundo.jpeg')] bg-cover bg-center bg-no-repeat items-center">
      {/* Divisor no topo da seção */}
      <div className="absolute top-0 left-0 w-full z-20">
        <DivisorDeForma />
      </div>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Grid de cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-4xl md:max-w-6xl py-16 md:py-28">
        <Card title="10 HORAS" description="De carga horária para você" icon="⏳" />
        <Card title="VÍDEOS" description="Com todas as orientações e simulação real de uso do SEI" icon="🎬" />
        <Card title="SERVIDORES" description="Da administração da Prefeitura de Jaboatão terão acesso a este curso inicialmente." icon="👥" />
        <Card title="CERTIFICADO" description="De conclusão dos módulos básicos será emitido." icon="📜" />
      </div>

      {/* Divisor no final */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <DivisorDeFormaContrario color="white" />
      </div>
    </section>
  );
};

const SecaoCartilha = () => {
  return (
    <section className="relative px-6 py-12 md:py-20 flex justify-center">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg px-6 md:px-10 py-8 md:py-12 border-2 border-blue-400 text-center">
        <h2 className="poppins-bold text-2xl md:text-3xl font-bold text-[#0054A3]">
          CARTILHA DO USUÁRIO
        </h2>
        <p className="roboto-medium text-black mt-2 text-base md:text-lg py-4 md:py-5">
          Fornece todas as informações e o passo a passo de que você precisa
          para usar o SEI e aproveitar todos os seus recursos.
        </p>

        <div className="text-center">
          <a
            href="pdf/cartilha-do-usuario-do-sei.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-6 inline-flex items-center justify-center gap-2 px-6 md:px-8 py-2 md:py-3 border border-[#0054A3] rounded-lg bg-[#003476] text-white text-base md:text-lg transition-transform duration-500 ease-out hover:bg-white hover:text-[#0054A3] hover:-translate-y-2 hover:shadow-lg will-change-transform"
          >
            📖 Cartilha
          </a>
        </div>
      </div>
    </section>
  );
};

const Conteudo: React.FC = () => {
  return (
    <main>
      <SecaoIntroducao />
      <SecaoCards />
      <SecaoCartilha />
    </main>
  );
};

export default Conteudo;
