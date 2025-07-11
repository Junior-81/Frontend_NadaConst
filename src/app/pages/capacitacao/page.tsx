import Conteudo from "./conteudo";
import Model from "../../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "Capacitação - Portal SEI",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Capacitação"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              Capacitação
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">
            Capacitação
            </span>
          </span>
        }
      >
        <Conteudo />
      </Model>
    </div>
  );
}
