'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaFileContract, FaSearch, FaCheckCircle, FaDownload, FaQuestionCircle, FaArrowRight, FaClock, FaShieldAlt, FaMobile } from 'react-icons/fa'
import WaveDivider from '@/app/components/WaveDivider'

const servicosPrincipais = [
  {
    title: 'Solicitar Certidão',
    description: 'Emita suas certidões negativas de forma rápida e segura',
    icon: <FaFileContract size={32} />,
    href: '/solicitacao-externa',
    color: 'from-blue-500 to-blue-600',
    features: ['Processo 100% digital', 'Emissão instantânea', 'Válido juridicamente']
  },
  {
    title: 'Consultar Débitos',
    description: 'Verifique pendências antes de solicitar sua certidão',
    icon: <FaSearch size={32} />,
    href: '/consultas',
    color: 'from-purple-500 to-purple-600',
    features: ['Consulta gratuita', 'Dados em tempo real', 'Múltiplos tributos']
  },
  {
    title: 'Validar Certidão',
    description: 'Confirme a autenticidade de qualquer certidão emitida',
    icon: <FaCheckCircle size={32} />,
    href: '/consulta-externa',
    color: 'from-green-500 to-green-600',
    features: ['Verificação instantânea', 'Dados detalhados', 'Histórico completo']
  },
]

const servicosSecundarios = [
  {
    title: 'Central de Downloads',
    description: 'Baixe manuais, formulários e documentos importantes',
    icon: <FaDownload size={24} />,
    href: '/downloads',
    color: 'bg-orange-500'
  },
  {
    title: 'Dúvidas Frequentes',
    description: 'Encontre respostas para as principais dúvidas',
    icon: <FaQuestionCircle size={24} />,
    href: '/faq',
    color: 'bg-indigo-500'
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="relative bg-white py-20">

      {/* Header da Seção */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <FaShieldAlt className="mr-2" />
              Serviços Digitais
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6"
          >
            Tudo que você precisa em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              um só lugar
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Plataforma completa para emissão, consulta e validação de certidões negativas.
            Processo 100% digital, seguro e disponível 24 horas por dia.
          </motion.p>
        </div>
      </div>

      {/* Serviços Principais */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {servicosPrincipais.map((servico, index) => (
            <motion.div
              key={servico.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white border border-slate-200 rounded-2xl p-8 h-full hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden">

                {/* Background Gradient */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${servico.color}`} />

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${servico.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {servico.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {servico.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {servico.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {servico.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <a
                    href={servico.href}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300"
                  >
                    Acessar Serviço
                    <FaArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold text-blue-600">24h</div>
              <div className="text-slate-600">Disponibilidade</div>
              <FaClock className="text-blue-500 mx-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-slate-600">Digital</div>
              <FaMobile className="text-green-500 mx-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold text-purple-600">3min</div>
              <div className="text-slate-600">Tempo Médio</div>
              <FaClock className="text-purple-500 mx-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold text-orange-600">SSL</div>
              <div className="text-slate-600">Segurança</div>
              <FaShieldAlt className="text-orange-500 mx-auto" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Serviços Secundários */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Recursos Adicionais
          </h3>
          <p className="text-slate-600">
            Ferramentas e informações complementares para facilitar seu atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {servicosSecundarios.map((servico, index) => (
            <motion.a
              key={servico.title}
              href={servico.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${servico.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {servico.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {servico.title}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    {servico.description}
                  </p>
                </div>
                <FaArrowRight className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDivider variant="bottom" color="blue" height="md" />
    </section>
  )
}
