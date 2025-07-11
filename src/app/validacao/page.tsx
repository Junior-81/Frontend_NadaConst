import Model from "@/app/components/model-page";

export default function Validacao() {
    return (
        <Model
            caminhoImagem="/images/Bandeira/bandeiramodelo.png"
            titulo="VALIDAR CERTIDÃO"
            subtitulo="Confirme a autenticidade dos documentos"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-3xl font-bold text-blue-900 mb-6">
                            Validação de Certidões
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Como Validar sua Certidão
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                                            1
                                        </div>
                                        <p className="text-gray-700">
                                            Localize o código de verificação em sua certidão
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                                            2
                                        </div>
                                        <p className="text-gray-700">
                                            Digite o código no campo abaixo
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                                            3
                                        </div>
                                        <p className="text-gray-700">
                                            Clique em "Validar" para verificar a autenticidade
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-6">
                                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                                    Validar Documento
                                </h4>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Código de Verificação
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Ex: ABC123DEF456"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">
                                            O código está localizado no rodapé da certidão
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
                                    >
                                        Validar Certidão
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-green-800 mb-3">
                                ✅ Certidão Válida
                            </h3>
                            <p className="text-green-700 text-sm">
                                Quando uma certidão é válida, você verá todas as informações
                                do documento, incluindo data de emissão e validade.
                            </p>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-red-800 mb-3">
                                ❌ Certidão Inválida
                            </h3>
                            <p className="text-red-700 text-sm">
                                Se o código não for encontrado, a certidão pode ter sido
                                alterada ou o código digitado incorretamente.
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 mt-6">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">
                            Segurança das Certidões
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    🔒
                                </div>
                                <h4 className="font-medium text-gray-800 mb-2">Criptografia</h4>
                                <p className="text-sm text-gray-600">
                                    Todos os códigos são criptografados
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    📝
                                </div>
                                <h4 className="font-medium text-gray-800 mb-2">Assinatura Digital</h4>
                                <p className="text-sm text-gray-600">
                                    Documentos possuem assinatura eletrônica
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    ⏰
                                </div>
                                <h4 className="font-medium text-gray-800 mb-2">Rastreabilidade</h4>
                                <p className="text-sm text-gray-600">
                                    Histórico completo de emissão
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Model>
    );
}
