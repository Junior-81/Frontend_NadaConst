import Model from "@/app/components/model-page";

export default function Consultas() {
    return (
        <Model
            caminhoImagem="/images/Bandeira/bandeiramodelo.png"
            titulo="CONSULTAR DÉBITOS"
            subtitulo="Verifique pendências em tempo real"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">
                            Consulta de Débitos Online
                        </h2>

                        <div className="mb-8">
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
                                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                                    Como Consultar
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                                            1
                                        </div>
                                        <p className="text-sm text-gray-700">Informe CPF/CNPJ</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                                            2
                                        </div>
                                        <p className="text-sm text-gray-700">Escolha o tipo de consulta</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                                            3
                                        </div>
                                        <p className="text-sm text-gray-700">Visualize os resultados</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-6">
                                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                                    Formulário de Consulta
                                </h4>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            CPF/CNPJ
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Digite o CPF ou CNPJ"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Tipo de Consulta
                                        </label>
                                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                            <option value="">Selecione o tipo</option>
                                            <option value="iptu">IPTU</option>
                                            <option value="iss">ISS</option>
                                            <option value="geral">Débitos Gerais</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                                    >
                                        Consultar Débitos
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-yellow-800 mb-4">
                            ⚠️ Importante
                        </h3>
                        <ul className="list-disc list-inside text-yellow-700 space-y-2">
                            <li>A consulta é gratuita e pode ser realizada quantas vezes necessário</li>
                            <li>Os dados são atualizados em tempo real</li>
                            <li>Para imóveis, também é possível consultar pela inscrição municipal</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Model>
    );
}
