import Model from "@/app/components/model-page";

export default function Certidoes() {
    return (
        <Model
            caminhoImagem="/images/Bandeira/bandeiramodelo.png"
            titulo="CERTIDÕES NEGATIVAS"
            subtitulo="Emita suas certidões de forma rápida e segura"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">
                            Tipos de Certidões Disponíveis
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    Certidão Negativa de Débitos Municipais
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Comprova a inexistência de débitos relacionados a tributos municipais.
                                </p>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                    Emitir Certidão
                                </button>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    Certidão Negativa de IPTU
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Declara a inexistência de pendências do Imposto Predial e Territorial Urbano.
                                </p>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                    Emitir Certidão
                                </button>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    Certidão Negativa de ISS
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Atesta a ausência de débitos do Imposto Sobre Serviços.
                                </p>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                    Emitir Certidão
                                </button>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    Certidão Negativa Geral
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Comprova a inexistência de qualquer débito municipal.
                                </p>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                    Emitir Certidão
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">
                            Documentos Necessários
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>CPF ou CNPJ do requerente</li>
                            <li>Dados do imóvel (para certidões específicas)</li>
                            <li>Inscrição municipal (quando aplicável)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Model>
    );
}
