"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaBuilding, FaFileAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard } from "react-icons/fa";
import LoadingState from "../components/LoadingStates";

interface FormData {
    tipo: 'fisica' | 'juridica';
    documento: string;
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    tipoCertidao: string;
    inscricaoMunicipal?: string;
}

export default function SolicitacaoForm() {
    const [formData, setFormData] = useState<FormData>({
        tipo: 'fisica',
        documento: '',
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        tipoCertidao: '',
        inscricaoMunicipal: ''
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingType, setLoadingType] = useState<'processing' | 'validating' | 'generating' | 'complete'>('processing');
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpar erro do campo quando usuário digita
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateStep = (step: number): boolean => {
        const newErrors: Partial<FormData> = {};

        if (step === 1) {
            if (!formData.documento) newErrors.documento = 'Documento é obrigatório';
            if (!formData.nome) newErrors.nome = 'Nome é obrigatório';
            if (formData.tipo === 'fisica' && formData.documento.length !== 11) {
                newErrors.documento = 'CPF deve ter 11 dígitos';
            }
            if (formData.tipo === 'juridica' && formData.documento.length !== 14) {
                newErrors.documento = 'CNPJ deve ter 14 dígitos';
            }
        }

        if (step === 2) {
            if (!formData.email) newErrors.email = 'Email é obrigatório';
            if (!formData.telefone) newErrors.telefone = 'Telefone é obrigatório';
            if (!formData.endereco) newErrors.endereco = 'Endereço é obrigatório';
        }

        if (step === 3) {
            if (!formData.tipoCertidao) newErrors.tipoCertidao = 'Tipo de certidão é obrigatório';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = async () => {
        if (validateStep(3)) {
            setIsLoading(true);

            // Simulação do processo de geração
            setLoadingType('processing');
            await new Promise(resolve => setTimeout(resolve, 2000));

            setLoadingType('validating');
            await new Promise(resolve => setTimeout(resolve, 2000));

            setLoadingType('generating');
            await new Promise(resolve => setTimeout(resolve, 2000));

            setLoadingType('complete');
            await new Promise(resolve => setTimeout(resolve, 1000));

            setIsLoading(false);
            // Aqui você redirecionaria para a página de download ou mostraria o resultado
        }
    };

    if (isLoading) {
        return (
            <div className="max-w-2xl mx-auto">
                <LoadingState type={loadingType} />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    {[1, 2, 3].map((step) => (
                        <div key={step} className="flex items-center">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${step <= currentStep
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-500'
                                    }`}
                            >
                                {step}
                            </div>
                            {step < 3 && (
                                <div
                                    className={`h-1 w-24 mx-2 ${step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                    <span>Dados Pessoais</span>
                    <span>Contato</span>
                    <span>Tipo de Certidão</span>
                </div>
            </div>

            <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-lg border border-gray-200 p-8"
            >
                {/* Step 1: Dados Pessoais */}
                {currentStep === 1 && (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <FaUser className="mr-3 text-blue-600" />
                            Dados Pessoais
                        </h3>

                        {/* Tipo de Pessoa */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tipo de Pessoa
                            </label>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="tipo"
                                        value="fisica"
                                        checked={formData.tipo === 'fisica'}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    <FaUser className="mr-1" />
                                    Pessoa Física
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="tipo"
                                        value="juridica"
                                        checked={formData.tipo === 'juridica'}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    <FaBuilding className="mr-1" />
                                    Pessoa Jurídica
                                </label>
                            </div>
                        </div>

                        {/* Documento */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {formData.tipo === 'fisica' ? 'CPF' : 'CNPJ'}
                            </label>
                            <div className="relative">
                                <FaIdCard className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    name="documento"
                                    value={formData.documento}
                                    onChange={handleInputChange}
                                    placeholder={formData.tipo === 'fisica' ? '000.000.000-00' : '00.000.000/0000-00'}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.documento ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                            </div>
                            {errors.documento && (
                                <p className="text-red-500 text-sm mt-1">{errors.documento}</p>
                            )}
                        </div>

                        {/* Nome */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {formData.tipo === 'fisica' ? 'Nome Completo' : 'Razão Social'}
                            </label>
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.nome ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.nome && (
                                <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
                            )}
                        </div>
                    </div>
                )}

                {/* Step 2: Contato */}
                {currentStep === 2 && (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <FaEnvelope className="mr-3 text-blue-600" />
                            Dados de Contato
                        </h3>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Telefone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Telefone
                            </label>
                            <div className="relative">
                                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="tel"
                                    name="telefone"
                                    value={formData.telefone}
                                    onChange={handleInputChange}
                                    placeholder="(00) 00000-0000"
                                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.telefone ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                            </div>
                            {errors.telefone && (
                                <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>
                            )}
                        </div>

                        {/* Endereço */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Endereço Completo
                            </label>
                            <div className="relative">
                                <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    name="endereco"
                                    value={formData.endereco}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.endereco ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                            </div>
                            {errors.endereco && (
                                <p className="text-red-500 text-sm mt-1">{errors.endereco}</p>
                            )}
                        </div>
                    </div>
                )}

                {/* Step 3: Tipo de Certidão */}
                {currentStep === 3 && (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <FaFileAlt className="mr-3 text-blue-600" />
                            Tipo de Certidão
                        </h3>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Selecione o tipo de certidão
                            </label>
                            <select
                                name="tipoCertidao"
                                value={formData.tipoCertidao}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.tipoCertidao ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            >
                                <option value="">Selecione uma opção</option>
                                <option value="geral">Certidão Negativa Geral</option>
                                <option value="iptu">Certidão Negativa de IPTU</option>
                                <option value="iss">Certidão Negativa de ISS</option>
                                <option value="municipal">Certidão Negativa de Débitos Municipais</option>
                            </select>
                            {errors.tipoCertidao && (
                                <p className="text-red-500 text-sm mt-1">{errors.tipoCertidao}</p>
                            )}
                        </div>

                        {/* Inscrição Municipal (se necessário) */}
                        {(formData.tipoCertidao === 'iptu' || formData.tipoCertidao === 'municipal') && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Inscrição Municipal (opcional)
                                </label>
                                <input
                                    type="text"
                                    name="inscricaoMunicipal"
                                    value={formData.inscricaoMunicipal}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        )}

                        {/* Resumo dos dados */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-800 mb-2">Resumo da Solicitação</h4>
                            <div className="text-sm text-gray-600 space-y-1">
                                <p><strong>Tipo:</strong> {formData.tipo === 'fisica' ? 'Pessoa Física' : 'Pessoa Jurídica'}</p>
                                <p><strong>Documento:</strong> {formData.documento}</p>
                                <p><strong>Nome:</strong> {formData.nome}</p>
                                <p><strong>Email:</strong> {formData.email}</p>
                                <p><strong>Certidão:</strong> {
                                    formData.tipoCertidao === 'geral' ? 'Certidão Negativa Geral' :
                                        formData.tipoCertidao === 'iptu' ? 'Certidão Negativa de IPTU' :
                                            formData.tipoCertidao === 'iss' ? 'Certidão Negativa de ISS' :
                                                formData.tipoCertidao === 'municipal' ? 'Certidão Negativa de Débitos Municipais' : ''
                                }</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    <button
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                        className={`px-6 py-2 rounded-md font-medium ${currentStep === 1
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : 'bg-gray-500 text-white hover:bg-gray-600'
                            }`}
                    >
                        Anterior
                    </button>

                    {currentStep < 3 ? (
                        <button
                            onClick={handleNext}
                            className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
                        >
                            Próximo
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700"
                        >
                            Gerar Certidão
                        </button>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
