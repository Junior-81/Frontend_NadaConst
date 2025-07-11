"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay, FaChevronDown } from "react-icons/fa";
import ParticlesBackground from "@/app/components/particulas/ParticlesBackground";
import HowItWorksModal from "@/app/components/HowItWorksModal/HowItWorksModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-4 py-20 text-center overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-200/30 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-40 w-20 h-20 bg-indigo-200/30 rounded-full blur-md"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-cyan-200/30 rounded-full blur-lg"></div>
        </div>

        {/* Partículas no fundo */}
        <ParticlesBackground />

        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Lado Esquerdo - Conteúdo Principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-8"
            >
              {/* Badge Institucional */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-white/80 backdrop-blur-md border border-blue-200 rounded-full px-6 py-3 shadow-lg"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-blue-800 font-medium text-sm">Portal Oficial do Governo</span>
              </motion.div>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center lg:justify-start"
              >
                <Image
                  src="/images/Logo/logosei.png"
                  alt="Logo Nada Consta"
                  width={220}
                  height={80}
                  className="h-auto"
                />
              </motion.div>

              {/* Título Principal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 leading-tight">
                  NADA
                  <br />
                  <span className="text-slate-800">CONSTA</span>
                </h1>

                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
                  Emita suas certidões negativas de forma{" "}
                  <span className="font-semibold text-blue-600">digital</span>,{" "}
                  <span className="font-semibold text-green-600">segura</span> e{" "}
                  <span className="font-semibold text-purple-600">instantânea</span>.
                  <br />
                  Transparência e agilidade em um só lugar.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="/solicitacao-externa"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
                >
                  Emitir Certidão
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </a>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group bg-white/80 backdrop-blur-md border border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
                >
                  <FaPlay className="mr-2 text-blue-600" />
                  Como Funciona
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-600">24h</div>
                  <div className="text-slate-500 text-sm">Disponibilidade</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-green-600">3min</div>
                  <div className="text-slate-500 text-sm">Tempo Médio</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-purple-600">100%</div>
                  <div className="text-slate-500 text-sm">Digital</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Lado Direito - Visual Interativo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:block hidden"
            >
              {/* Card Principal */}
              <div className="relative">
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotateY: [0, 5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transform perspective-1000"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-xl">✓</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800">Certidão Negativa</h3>
                          <p className="text-sm text-slate-600">Débitos Municipais</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-slate-600">
                        <span>Processamento</span>
                        <span>Concluído</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-400 to-green-600"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3, delay: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                        🎉 Documento pronto para download!
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Cards Flutuantes */}
                <motion.div
                  animate={{
                    x: [0, 15, 0],
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-blue-500 text-white p-4 rounded-2xl shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-xs opacity-90">Online</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    x: [0, -10, 0],
                    y: [0, 15, 0],
                    rotate: [0, -2, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-4 rounded-2xl shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-2xl">🔒</div>
                    <div className="text-xs">Seguro</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <a href="#servicos" className="flex flex-col items-center space-y-2 text-slate-500 hover:text-blue-600 transition-colors">
              <span className="text-sm font-medium">Explore nossos serviços</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaChevronDown className="w-5 h-5" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal Como Funciona */}
      <HowItWorksModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
