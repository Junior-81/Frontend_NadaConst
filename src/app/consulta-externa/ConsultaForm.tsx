"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaCheckCircle, FaExclamationTriangle, FaTimes, FaDownload, FaEye, FaIdCard, FaCalendarAlt } from "react-icons/fa";
import LoadingState, { CertificateStamp } from "../components/LoadingStates";

interface CertidaoData {
    codigo: string;
    titular: string;
    documento: string;
    tipo: string;
    dataEmissao: string;
    dataValidade: string;
    status: 'valida' | 'expirada' | 'cancelada';
    numeroProtocolo: string;
}

export default function ConsultaForm() {
    const [tipoConsulta, setTipoConsulta] = useState<'codigo' | 'documento'>('codigo');
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [resultado, setResultado] = useState<CertidaoData | null>(null);
    const [erro, setErro] = useState('');
    const [showDetails, setShowDetails] = useState(false);

    // Dados mockados para demonstração
    const mockData: CertidaoData = {
        codigo: 'ABC123DEF456',
        titular: 'João Silva Santos',
        documento: '123.456.789-00',
        tipo: 'Certidão Negativa de Débitos Municipais',
        dataEmissao: '15/12/2024',
        dataValidade: '15/01/2025',
        status: 'valida',
        numeroProtocolo: '2024/12345'
    };

    const handleConsulta = async () => {
        setErro('');
        setResultado(null);

        if (!inputValue.trim()) {
            setErro('Por favor, preencha o campo de consulta');
            return;
        }

        setIsLoading(true);

        // Simulação da consulta
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Simulação: se o código for 'ABC123DEF456' ou CPF '123.456.789-00', retorna dados válidos
        if (inputValue === 'ABC123DEF456' || inputValue === '12345678900' || inputValue === '123.456.789-00') {
            setResultado(mockData);
        } else {
            setErro('Documento não encontrado ou código inválido');
        }

        setIsLoading(false);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'valida': return 'text-green-600 bg-green-50 border-green-200';
            case 'expirada': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            case 'cancelada': return 'text-red-600 bg-red-50 border-red-200';
            default: return 'text-gray-600 bg-gray-50 border-gray-200';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'valida': return <FaCheckCircle className="text-green-600" />;
            case 'expirada': return <FaExclamationTriangle className="text-yellow-600" />;
            case 'cancelada': return <FaTimes className="text-red-600" />;
            default: return null;
        }
    };

    if (isLoading) {
        return (
            <div className="max-w-2xl mx-auto">
                <LoadingState type="validating" message="Consultando base de dados..." />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            {/* Seletor de Tipo de Consulta */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tipo de Consulta</h3>

                <div className="flex space-x-4 mb-6">
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            name="tipoConsulta"
                            value="codigo"
                            checked={tipoConsulta === 'codigo'}
                            onChange={(e) => setTipoConsulta(e.target.value as 'codigo' | 'documento')}
                            className="mr-2"
                        />
                        <span className="flex items-center">
                            <FaSearch className="mr-2 text-blue-600" />
                            Por Código de Verificação
                        </span>
                    </label>

                    <label className="flex items-center cursor-pointer">
                        <input
                            type="radio"
                            name="tipoConsulta"
                            value="documento"
                            checked={tipoConsulta === 'documento'}
                            onChange={(e) => setTipoConsulta(e.target.value as 'codigo' | 'documento')}
                            className="mr-2"
                        />
                        <span className="flex items-center">
                            <FaIdCard className="mr-2 text-purple-600" />
                            Por CPF/CNPJ
                        </span>
                    </label>
                </div>

                {/* Campo de Input */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {tipoConsulta === 'codigo'
                                ? 'Código de Verificação'
                                : 'CPF/CNPJ do Titular'
                            }
                        </label>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder={tipoConsulta === 'codigo'
                                    ? 'Ex: ABC123DEF456'
                                    : 'Ex: 123.456.789-00'
                                }
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button
                                onClick={handleConsulta}
                                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
                            >
                                <FaSearch className="mr-2" />
                                Consultar
                            </button>
                        </div>

                        {tipoConsulta === 'codigo' && (
                            <p className="text-xs text-gray-500 mt-1">
                                O código de verificação está localizado no rodapé da certidão
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Resultado da Consulta */}
            {erro && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6"
                >
                    <div className="flex items-center">
                        <FaTimes className="text-red-600 mr-3" />
                        <div>
                            <h4 className="text-red-800 font-semibold">Documento não encontrado</h4>
                            <p className="text-red-600 text-sm">{erro}</p>
                        </div>
                    </div>
                </motion.div>
            )}

            {resultado && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    {/* Status Card */}
                    <div className={`border rounded-lg p-6 ${getStatusColor(resultado.status)}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                {getStatusIcon(resultado.status)}
                                <div className="ml-3">
                                    <h4 className="font-bold text-lg">
                                        {resultado.status === 'valida' ? 'Certidão Válida' :
                                            resultado.status === 'expirada' ? 'Certidão Expirada' :
                                                'Certidão Cancelada'}
                                    </h4>
                                    <p className="text-sm">
                                        {resultado.status === 'valida'
                                            ? 'Este documento é autêntico e está dentro do prazo de validade'
                                            : resultado.status === 'expirada'
                                                ? 'Este documento é autêntico mas está fora do prazo de validade'
                                                : 'Este documento foi cancelado e não possui mais validade'
                                        }
                                    </p>
                                </div>
                            </div>

                            {resultado.status === 'valida' && (
                                <div className="text-right">
                                    <CertificateStamp />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Dados da Certidão */}
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xl font-bold text-gray-800">Dados da Certidão</h4>
                            <button
                                onClick={() => setShowDetails(!showDetails)}
                                className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                            >
                                <FaEye className="mr-1" />
                                {showDetails ? 'Ocultar Detalhes' : 'Ver Detalhes'}
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Titular</label>
                                    <p className="text-gray-800 font-medium">{resultado.titular}</p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Documento</label>
                                    <p className="text-gray-800">{resultado.documento}</p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Tipo de Certidão</label>
                                    <p className="text-gray-800">{resultado.tipo}</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Data de Emissão</label>
                                    <p className="text-gray-800 flex items-center">
                                        <FaCalendarAlt className="mr-2 text-gray-400" />
                                        {resultado.dataEmissao}
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Válida até</label>
                                    <p className="text-gray-800 flex items-center">
                                        <FaCalendarAlt className="mr-2 text-gray-400" />
                                        {resultado.dataValidade}
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Protocolo</label>
                                    <p className="text-gray-800">{resultado.numeroProtocolo}</p>
                                </div>
                            </div>
                        </div>

                        {showDetails && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-6 pt-6 border-t border-gray-200"
                            >
                                <h5 className="font-semibold text-gray-800 mb-3">Detalhes Técnicos</h5>
                                <div className="bg-gray-50 p-4 rounded-md">
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="font-medium text-gray-600">Código de Verificação:</span>
                                            <p className="font-mono text-gray-800">{resultado.codigo}</p>
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-600">Hash SHA-256:</span>
                                            <p className="font-mono text-gray-800 break-all">a1b2c3d4e5f6...</p>
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-600">Assinatura Digital:</span>
                                            <p className="text-green-600">✓ Verificada</p>
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-600">Timestamp:</span>
                                            <p className="text-gray-800">15/12/2024 14:30:25</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Ações */}
                        <div className="flex space-x-3 mt-6">
                            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                <FaDownload className="mr-2" />
                                Baixar PDF
                            </button>

                            <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                                <FaEye className="mr-2" />
                                Visualizar
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Dica de Teste */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Para testar:</h4>
                <p className="text-blue-700 text-sm">
                    Use o código <strong>ABC123DEF456</strong> ou CPF <strong>123.456.789-00</strong> para ver um exemplo de certidão válida.
                </p>
            </div>
        </div>
    );
}
