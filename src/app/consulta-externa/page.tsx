import Model from "@/app/components/model-page";
import ConsultaForm from "./ConsultaForm";
import Link from "next/link";

export const metadata = {
    title: "Consulta Externa - Portal Nada Consta",
    description: "Consulte e valide certidões negativas emitidas"
};

export default function ConsultaExterna() {
    return (
        <div>
            <Model
                caminhoImagem={"/images/"}
                titulo={"CONSULTA EXTERNA"}
                subtitulo={
                    <span>
                        <Link
                            href="/"
                            className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
                        >
                            Início
                        </Link>
                        &nbsp;»{" "}
                        <span className="brightness-125">
                            Validação de Certidão
                        </span>
                    </span>
                }
            >
                <div className="container mx-auto px-4 py-12">
                    {/* Header da Página */}
                    <div className="max-w-4xl mx-auto mb-8">
                        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-8">
                            <h2 className="text-2xl font-bold text-green-900 mb-2">
                                Consulta e Validação de Certidões
                            </h2>
                            <p className="text-green-700">
                                Verifique a autenticidade e validade de certidões negativas emitidas pelo sistema.
                                Digite o código de verificação ou número do documento para consultar.
                            </p>
                        </div>

                        {/* Tipos de Consulta */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                    Por Código de Verificação
                                </h3>
                                <ul className="text-sm text-blue-700 space-y-1">
                                    <li>• Código localizado no rodapé da certidão</li>
                                    <li>• Validação instantânea</li>
                                    <li>• Mostra todos os detalhes do documento</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                                <h3 className="font-semibold text-purple-800 mb-3 flex items-center">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                    Por CPF/CNPJ
                                </h3>
                                <ul className="text-sm text-purple-700 space-y-1">
                                    <li>• Lista todas as certidões do titular</li>
                                    <li>• Histórico de emissões</li>
                                    <li>• Status de validade</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Formulário de Consulta */}
                    <ConsultaForm />
                </div>
            </Model>
        </div>
    );
}
