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
            delay: 0.1
        },
        {
            icon: FaFileAlt,
            title: "Preencha os Dados",
            description: "Informe seus dados pessoais ou da empresa de forma segura e precisa.",
            color: "from-green-500 to-green-600",
            delay: 0.2
        },
        {
            icon: FaShieldAlt,
            title: "Verificação Automática",
            description: "Nosso sistema consulta automaticamente todos os órgãos competentes.",
            color: "from-purple-500 to-purple-600",
            delay: 0.3
        },
        {
            icon: FaDownload,
            title: "Download Instantâneo",
            description: "Baixe sua certidão negativa em PDF com validade jurídica imediata.",
            color: "from-orange-500 to-orange-600",
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
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 px-8 py-6 z-10">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900">Como Funciona</h2>
                                    <p className="text-slate-600 mt-1">Processo simples e seguro em 4 etapas</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-3 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <FaTimes className="w-5 h-5 text-slate-500" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-8 py-6 space-y-12">
                            {/* Steps */}
                            <div className="space-y-8">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Passo a Passo</h3>
                                    <p className="text-slate-600">Emita sua certidão em poucos minutos</p>
                                </div>

                                <div className="space-y-6">
                                    {steps.map((step, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: step.delay, duration: 0.5 }}
                                            className="flex items-start space-x-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                                <step.icon className="w-7 h-7 text-white" />
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center mb-2">
                                                    <span className="text-sm font-medium text-slate-500 mr-3">
                                                        ETAPA {index + 1}
                                                    </span>
                                                    <div className="flex-1 h-px bg-slate-200"></div>
                                                </div>
                                                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                                                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                                    Por que escolher o Nada Consta?
                                </h3>

                                <div className="grid gap-6">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className="flex items-center space-x-4 bg-white rounded-xl p-6 shadow-sm"
                                        >
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                                <feature.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                                                <p className="text-slate-600">{feature.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Video Preview */}
                            <div className="bg-slate-900 rounded-3xl p-8 text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Veja o tutorial completo
                                </h3>
                                <p className="text-slate-300 mb-6">
                                    Assista ao vídeo explicativo para entender melhor o processo
                                </p>

                                <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden group cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors"
                                        >
                                            <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                                        </motion.div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="text-sm opacity-90">Tutorial Completo</div>
                                        <div className="text-xs opacity-70">3:45 min</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="text-center space-y-6">
                                <h3 className="text-2xl font-bold text-slate-900">
                                    Pronto para começar?
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="/solicitacao-externa"
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                        onClick={onClose}
                                    >
                                        Emitir Certidão Agora
                                    </a>
                                    <a
                                        href="/consulta-externa"
                                        className="bg-white border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                                        onClick={onClose}
                                    >
                                        Consultar Certidão
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
