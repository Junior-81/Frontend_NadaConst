"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaShieldAlt, FaClock, FaLaptop, FaCheckCircle, FaUsers, FaGlobe } from "react-icons/fa";
import WaveDivider from "@/app/components/WaveDivider";

export default function SobreONadaConsta() {
    const features = [
        {
            icon: FaClock,
            title: "Acesso 24h",
            description: "Disponível todos os dias, a qualquer hora",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: FaGlobe,
            title: "Consulta Online",
            description: "Verifique débitos em tempo real",
            color: "from-green-500 to-green-600"
        },
        {
            icon: FaShieldAlt,
            title: "Autenticidade Digital",
            description: "Documentos com validade jurídica",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: FaCheckCircle,
            title: "Emissão Instantânea",
            description: "Certidões prontas em segundos",
            color: "from-orange-500 to-orange-600"
        },
        {
            icon: FaLaptop,
            title: "Interface Intuitiva",
            description: "Processo simples e fácil de usar",
            color: "from-cyan-500 to-cyan-600"
        },
        {
            icon: FaUsers,
            title: "Múltiplos Órgãos",
            description: "Consulta integrada em várias bases",
            color: "from-indigo-500 to-indigo-600"
        }
    ];

    return (
        <>
            {/* Wave Divider Superior */}
            <WaveDivider variant="top" color="blue" height="md" />

            <section
                id="sobreonadaconsta"
                className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
                </div>

                <div className="relative container mx-auto px-4 py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Coluna Esquerda - Conteúdo Principal */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3"
                            >
                                <FaShieldAlt className="mr-3 text-blue-400" />
                                <span className="text-blue-200 font-medium">Portal Oficial</span>
                            </motion.div>

                            {/* Título */}
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl lg:text-7xl font-black leading-tight"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                                    NADA
                                </span>
                                <br />
                                <span className="text-white">CONSTA</span>
                            </motion.h2>

                            {/* Descrição */}
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-lg lg:text-xl text-slate-300 leading-relaxed"
                            >
                                O portal de documentação facilita a emissão de certidões negativas e
                                consultas de débitos de forma digital e automatizada. A implementação
                                do sistema promove a gestão eletrônica de certidões, resultando na
                                <span className="text-blue-300 font-semibold"> agilidade dos processos</span>,
                                <span className="text-green-300 font-semibold"> melhoria na transparência</span> e
                                <span className="text-purple-300 font-semibold"> garantia da autenticidade</span> dos documentos.
                            </motion.p>

                            {/* Stats Rápidas */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-3 gap-6"
                            >
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400">24h</div>
                                    <div className="text-slate-400 text-sm">Disponível</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-400">3min</div>
                                    <div className="text-slate-400 text-sm">Processo</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400">100%</div>
                                    <div className="text-slate-400 text-sm">Digital</div>
                                </div>
                            </motion.div>

                            {/* Ícone Ilustrativo */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="flex justify-center lg:justify-start"
                            >
                                <Image
                                    src="/images/home/icon.png"
                                    alt="Ilustração Nada Consta"
                                    width={200}
                                    height={80}
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Coluna Direita - Features Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            {/* Título da Seção */}
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-3xl lg:text-4xl font-bold text-center lg:text-left"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                    Facilidades
                                </span>
                            </motion.h3>

                            {/* Grid de Features */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * index }}
                                        className="group"
                                    >
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                            {/* Icon */}
                                            <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                                <feature.icon className="w-6 h-6 text-white" />
                                            </div>

                                            {/* Content */}
                                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                                {feature.title}
                                            </h4>
                                            <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Feature Destaque */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">
                                    Modernização Completa
                                </h4>
                                <p className="text-slate-300">
                                    Elimina filas presenciais, reduz tempo de espera e proporciona
                                    economia de recursos com uma experiência 100% digital.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Wave Divider Inferior */}
            <WaveDivider variant="bottom" color="purple" height="md" />
        </>
    );
}
