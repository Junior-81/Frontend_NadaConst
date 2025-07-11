"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaUser, FaFileAlt, FaDownload, FaShieldAlt, FaClock, FaCheckCircle } from "react-icons/fa";

interface HowItWorksModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function HowItWorksModal({ isOpen, onClose }: HowItWorksModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const steps = [
        {
            icon: FaUser,
            title: "Acesse o Portal",
            description: "Entre no portal oficial Nada Consta e selecione o tipo de certidão desejada.",
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50",
            delay: 0.1
        },
        {
            icon: FaFileAlt,
            title: "Preencha os Dados",
            description: "Informe seus dados pessoais ou da empresa de forma segura e precisa.",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50",
            delay: 0.2
        },
        {
            icon: FaShieldAlt,
            title: "Verificação Automática",
            description: "Nosso sistema consulta automaticamente todos os órgãos competentes.",
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50",
            delay: 0.3
        },
        {
            icon: FaDownload,
            title: "Download Instantâneo",
            description: "Baixe sua certidão negativa em PDF com validade jurídica imediata.",
            color: "from-orange-500 to-orange-600",
            bgColor: "bg-orange-50",
            delay: 0.4
        }
    ];

    const features = [
        {
            icon: FaClock,
            title: "Disponível 24h",
            description: "Acesso ininterrupto, qualquer dia da semana"
        },
        {
            icon: FaShieldAlt,
            title: "100% Seguro",
            description: "Criptografia de ponta e proteção de dados"
        },
        {
            icon: FaCheckCircle,
            title: "Validade Jurídica",
            description: "Documentos com validade oficial reconhecida"
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={onClose}
                    >
                        <div
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold">Como Funciona o Portal Nada Consta</h2>
                                        <p className="text-blue-100 mt-1">Processo simples e seguro em 4 etapas</p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                                    >
                                        <FaTimes className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Step Navigator */}
                                <div className="flex justify-center mb-8">
                                    <div className="flex items-center space-x-4">
                                        {steps.map((step, index) => (
                                            <div key={step.id} className="flex items-center">
                                                <button
                                                    onClick={() => setCurrentStep(index)}
                                                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${currentStep === index
                                                            ? 'bg-blue-600 text-white shadow-lg scale-110'
                                                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                                        }`}
                                                >
                                                    {step.id}
                                                </button>
                                                {index < steps.length - 1 && (
                                                    <div className={`w-16 h-1 mx-2 rounded-full ${currentStep > index ? 'bg-blue-600' : 'bg-gray-200'
                                                        }`} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Step Content */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-center"
                                    >
                                        <div className={`w-20 h-20 bg-gradient-to-br ${steps[currentStep].color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}>
                                            {steps[currentStep].icon}
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                            {steps[currentStep].title}
                                        </h3>

                                        <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
                                            {steps[currentStep].description}
                                        </p>

                                        <p className="text-sm text-gray-500 max-w-xl mx-auto">
                                            {steps[currentStep].details}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation */}
                                <div className="flex justify-between mt-8">
                                    <button
                                        onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                                        disabled={currentStep === 0}
                                        className={`px-6 py-3 rounded-lg font-medium ${currentStep === 0
                                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                                : 'bg-gray-500 text-white hover:bg-gray-600'
                                            }`}
                                    >
                                        Anterior
                                    </button>

                                    <button
                                        onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                                        disabled={currentStep === steps.length - 1}
                                        className={`px-6 py-3 rounded-lg font-medium ${currentStep === steps.length - 1
                                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                                : 'bg-blue-600 text-white hover:bg-blue-700'
                                            }`}
                                    >
                                        Próximo
                                    </button>
                                </div>

                                {/* CTA */}
                                <div className="text-center mt-8 pt-6 border-t border-gray-200">
                                    <button
                                        onClick={onClose}
                                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                                    >
                                        Começar Agora
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
