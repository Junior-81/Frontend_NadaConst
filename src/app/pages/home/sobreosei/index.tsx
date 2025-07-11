import Image from "next/image";

export default function SobreOSei() {
  return (
    <section
      id="sobreosei"
      className="w-full bg-[#001f4d] text-[#CFE5FF] min-h-screen px-4 py-12 sm:py-16 flex items-center justify-center"
    >
      <div className="md:max-w-6xl max-w-md w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:px-0 md:px-32">
        {/* Coluna Esquerda */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold barlow-extrabold text-center md:text-left">
            SEI!
          </h2>

          <p className="text-lg sm:text-xl italic leading-relaxed barlow-semicondensedmedium">
            O sistema eletrônico agiliza processos ao permitir a criação e
            tramitação eletrônica. A adoção do SEI promove a gestão de
            documentos e processos digitais, o que resultará na diminuição do
            fluxo de papel, melhoria na rastreabilidade dos documentos e
            garantia da integridade da informação.
            <br />
            Além disso, essa transição elimina o uso de espaços físicos
            adicionais e reduz custos associados à guarda de processos, bem como
            economiza gastos com transporte de documentos, compra de papel e
            impressão departamental.
          </p>
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/home/icon.png"
              alt="Ilustração SEI"
              width={300}
              height={100}
            />
          </div>
        </div>

        {/* Coluna Direita - Facilidades */}
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold barlow-extrabold text-center md:text-left">
            FACILIDADES
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Primeira linha */}
            <div className="bg-blue-200 hover:bg-[#1E3F6F] hover:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg  text-blue-900 font-medium px-4 py-3 rounded min-h-[100px] flex items-center justify-center text-center ">
              Portabilidade
            </div>

            <div className="bg-blue-200 hover:bg-[#1E3F6F] hover:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-blue-900 font-medium px-4 py-3 rounded min-h-[100px] flex items-center justify-center text-center">
              Acesso Remoto
            </div>
            <div className="bg-blue-200 hover:bg-[#1E3F6F] hover:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-blue-900 font-medium px-4 py-3 rounded min-h-[100px] flex items-center justify-center text-center">
              Controle do nível de acesso
            </div>

            {/* Linha única ocupando 3 colunas apenas em desktop */}
            <div className="bg-blue-200 hover:bg-[#1E3F6F] hover:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-blue-900 font-medium px-4 py-3 rounded min-h-[100px] flex items-center justify-center text-center lg:col-span-3">
              Tramitação em múltiplas unidades
            </div>

            {/* Sistema intuitivo + 2 blocos empilhados do lado direito */}
            <div className="lg:col-span-3 lg:grid lg:grid-cols-2 gap-3 flex flex-col">
              {/* Esquerda */}
              <div className="bg-blue-200 hover:bg-[#1E3F6F] hover:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-blue-900 font-medium px-4 py-3 rounded min-h-[100px] flex items-center justify-center text-center">
                Sistema intuitivo
              </div>

              {/* Direita (empilhados) */}
              <div className="flex flex-col gap-3">
                <div className="bg-blue-200 hover:bg-[#1E3F6F] hover:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-blue-900 font-medium px-4 py-10 rounded min-h-[70px] flex items-center justify-center text-center">
                  Acesso de usuários externos
                </div>
                <div className="bg-blue-200 hover:bg-[#1E3F6F] hover:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-blue-900 font-medium px-4 py-10 rounded min-h-[70px] flex items-center justify-center text-center">
                  Funcionalidades específicas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
