import Conteudo from "./conteudo";
import Model from "../../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "FAQ - Portal Nada Consta",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"DÚVIDAS FREQUENTES"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              Início
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">
              Dúvidas Frequentes
            </span>
          </span>
        }
      >
        <Conteudo />
      </Model>
    </div>
  );
}
