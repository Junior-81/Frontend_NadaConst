import Conteudo from "./conteudo";
import Model from "../../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "Primeiro Acesso - Portal SEI",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Primeiro Acesso"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              Primeiro Acesso
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">
            Primeiro Acesso
            </span>
          </span>
        }
      >
        <Conteudo />
      </Model>
    </div>
  );
}
