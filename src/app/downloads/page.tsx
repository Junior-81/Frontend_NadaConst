import Model from "@/app/components/model-page";

export default function Downloads() {
    return (
        <Model
            caminhoImagem="/images/Bandeira/bandeiramodelo.png"
            titulo="CENTRAL DE DOWNLOADS"
            subtitulo="Baixe manuais, formulários e documentos importantes"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Manuais e Guias */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                                📖 Manuais e Guias
                            </h3>
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Manual do Usuário - Nada Consta
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Guia completo para utilização do portal
                                    </p>
                                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                                        📄 Baixar PDF (2.5 MB)
                                    </button>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Guia de Primeiros Passos
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Como emitir sua primeira certidão
                                    </p>
                                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                                        📄 Baixar PDF (1.2 MB)
                                    </button>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Tutorial de Validação
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Como validar a autenticidade das certidões
                                    </p>
                                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                                        📄 Baixar PDF (800 KB)
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Formulários */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                                📋 Formulários
                            </h3>
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Requerimento de Certidão Negativa
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Para solicitações presenciais
                                    </p>
                                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                                        📝 Baixar DOC (45 KB)
                                    </button>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Declaração de Isento
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Para casos de isenção tributária
                                    </p>
                                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                                        📝 Baixar DOC (38 KB)
                                    </button>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Recurso Administrativo
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Para contestação de débitos
                                    </p>
                                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                                        📝 Baixar DOC (52 KB)
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Documentos Legais */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                                ⚖️ Documentos Legais
                            </h3>
                            <div className="space-y-4">
                                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Lei Municipal de Tributos
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Legislação tributária municipal
                                    </p>
                                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                                        📜 Baixar PDF (3.2 MB)
                                    </button>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Decreto de Regulamentação
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Regulamentação dos procedimentos
                                    </p>
                                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                                        📜 Baixar PDF (1.8 MB)
                                    </button>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        Portaria de Valores
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Tabela de valores e taxas vigentes
                                    </p>
                                    <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm">
                                        📜 Baixar PDF (650 KB)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Seção de Software e Aplicativos */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mt-8">
                        <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                            📱 Aplicativos e Software
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg p-6 text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    📱
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                    App Mobile Nada Consta
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    Baixe nosso aplicativo para Android e iOS
                                </p>
                                <div className="flex justify-center space-x-3">
                                    <button className="bg-black text-white px-4 py-2 rounded-md text-xs">
                                        Google Play
                                    </button>
                                    <button className="bg-black text-white px-4 py-2 rounded-md text-xs">
                                        App Store
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg p-6 text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    💻
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                    Plugin para Navegador
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    Extensão para validação rápida de certidões
                                </p>
                                <div className="flex justify-center space-x-3">
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-xs">
                                        Chrome
                                    </button>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-xs">
                                        Firefox
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Avisos importantes */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                            ⚠️ Informações Importantes
                        </h3>
                        <ul className="list-disc list-inside text-yellow-700 space-y-1 text-sm">
                            <li>Todos os downloads são gratuitos e seguros</li>
                            <li>Os documentos são atualizados regularmente</li>
                            <li>Para visualizar PDFs, você precisa do Adobe Reader ou similar</li>
                            <li>Em caso de problemas no download, entre em contato conosco</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Model>
    );
}
