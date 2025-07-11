import Model from "@/app/components/model-page";
import SolicitacaoForm from "./SolicitacaoForm";
import Link from "next/link";

export const metadata = {
    title: "Solicitação Externa - Portal Nada Consta",
    description: "Solicite sua certidão negativa de débitos de forma online"
};

export default function SolicitacaoExterna() {
    return (
        <div>
            <Model
                caminhoImagem={"/images/"}
                titulo={"SOLICITAÇÃO EXTERNA"}
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
                            Solicitação de Certidão
                        </span>
                    </span>
                }
            >
                <div className="container mx-auto px-4 py-12">
                    {/* Header da Página */}
                    <div className="max-w-4xl mx-auto mb-8">
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
                            <h2 className="text-2xl font-bold text-blue-900 mb-2">
                                Solicitação de Certidão Negativa de Débitos
                            </h2>
                            <p className="text-blue-700">
                                Preencha os dados abaixo para solicitar sua certidão negativa.
                                O documento será gerado automaticamente após a validação das informações.
                            </p>
                        </div>

                        {/* Informações Importantes */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                                    Documentos Aceitos
                                </h3>
                                <ul className="text-sm text-green-700 space-y-1">
                                    <li>• CPF/CNPJ válido</li>
                                    <li>• Inscrição Municipal (se aplicável)</li>
                                    <li>• Dados atualizados</li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                                <h3 className="font-semibold text-amber-800 mb-3 flex items-center">
                                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
                                    Tempo de Processamento
                                </h3>
                                <ul className="text-sm text-amber-700 space-y-1">
                                    <li>• Emissão automática</li>
                                    <li>• Válida por 30 dias</li>
                                    <li>• Download imediato</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Formulário */}
                    <SolicitacaoForm />
                </div>
            </Model>
        </div>
    );
}
