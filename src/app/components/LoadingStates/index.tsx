"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaStamp, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

interface LoadingStateProps {
    type: 'processing' | 'validating' | 'generating' | 'complete';
    message?: string;
}

export default function LoadingState({ type, message }: LoadingStateProps) {
    const getLoadingContent = () => {
        switch (type) {
            case 'processing':
                return {
                    icon: <FaFileAlt className="w-12 h-12" />,
                    title: "Processando Solicitação",
                    subtitle: "Verificando dados informados...",
                    color: "from-blue-500 to-blue-600"
                };
            case 'validating':
                return {
                    icon: <FaShieldAlt className="w-12 h-12" />,
                    title: "Validando Informações",
                    subtitle: "Consultando base de dados...",
                    color: "from-yellow-500 to-orange-500"
                };
            case 'generating':
                return {
                    icon: <FaStamp className="w-12 h-12" />,
                    title: "Gerando Certidão",
                    subtitle: "Aplicando assinatura digital...",
                    color: "from-purple-500 to-purple-600"
                };
            case 'complete':
                return {
                    icon: <FaCheckCircle className="w-12 h-12" />,
                    title: "Certidão Gerada!",
                    subtitle: "Documento pronto para download",
                    color: "from-green-500 to-green-600"
                };
        }
    };

    const content = getLoadingContent();

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
            {/* Ícone Animado */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: type === 'generating' ? [0, 180, 360] : 0
                }}
                transition={{
                    duration: 2,
                    repeat: type !== 'complete' ? Infinity : 0,
                    ease: "easeInOut"
                }}
                className={`w-24 h-24 bg-gradient-to-br ${content.color} rounded-full flex items-center justify-center text-white mb-6 shadow-lg`}
            >
                {content.icon}
            </motion.div>

            {/* Título e Subtítulo */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{content.title}</h3>
            <p className="text-gray-600 text-center mb-6">{content.subtitle}</p>
            {message && <p className="text-sm text-gray-500">{message}</p>}

            {/* Barra de Progresso com Carimbos */}
            {type !== 'complete' && (
                <div className="w-full max-w-md">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex space-x-4">
                            {['Recebido', 'Validando', 'Gerando', 'Concluído'].map((step, index) => (
                                <motion.div
                                    key={step}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${index <= ['processing', 'validating', 'generating', 'complete'].indexOf(type)
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-200 text-gray-500'
                                        }`}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    {index + 1}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                            className={`h-full bg-gradient-to-r ${content.color}`}
                            initial={{ width: "0%" }}
                            animate={{
                                width: type === 'processing' ? "25%" :
                                    type === 'validating' ? "50%" :
                                        type === 'generating' ? "75%" : "100%"
                            }}
                            transition={{ duration: 1 }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

// Componente de Loading para Skeleton
export function SkeletonLoader() {
    return (
        <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
    );
}

// Simulação de certidão sendo carimbada
export function CertificateStamp() {
    return (
        <div className="relative">
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: "spring" }}
                className="w-32 h-32 border-4 border-red-600 rounded-full flex items-center justify-center bg-red-50"
            >
                <div className="text-center">
                    <div className="text-red-600 font-bold text-lg">VÁLIDO</div>
                    <div className="text-red-600 text-xs">CERTIFICADO</div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute inset-0 bg-red-200 rounded-full"
            />
        </div>
    );
}
