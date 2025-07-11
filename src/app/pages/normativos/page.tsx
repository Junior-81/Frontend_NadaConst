import Conteudo from "./conteudo";
import Model from "../../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "Normativos - Portal SEI",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Normativos"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              Normativos
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">
            Contratos
            </span>
          </span>
        }
      >
        <Conteudo />
      </Model>
    </div>
  );
}
