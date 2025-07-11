const DigitalGovernmentLaws = () => {
  const laws = [
    {
      title: "Decreto Municipal nº 39 de 08 de abril de 2020",
      description:
        "Disciplina os procedimentos referentes ao uso do meio eletrônico para a realização do processo administrativo, assinatura digital e utilização do Sistema Eletrônico de Informações (SEI-Jaboatão), no âmbito da Administração Pública do Poder Executivo Municipal, e dá outras providências.",
    },
    {
      title: "Decreto nº 243, de 29 de dezembro de 2023",
      description:
        "Dispõe sobre o uso do meio eletrônico para a realização do processo administrativo no âmbito dos órgãos e das entidades da administração pública municipal direta, autárquica e fundacional.",
    },
    {
      title: "Decreto Municipal nº 79/2023, Governo Digital",
      description:
        "Institui a Política Municipal de Proteção de Dados no Âmbito da Administração Pública Direta e Indireta Municipal, em consonância com a Lei Federal nº 13.709, de 14 de agosto de 2018, Lei Geral de Proteção de Dados Pessoais (LGPD), e dá outras providências.",
    },
    {
      title: "Decreto Municipal nº 80/2023",
      description:
        "Institui a Estratégia de Governo Digital no âmbito dos órgãos e das entidades da Administração Pública Municipal.",
    },
    {
      title: "Lei nº 12.682, de 9/07/2012",
      description:
        "Dispõe sobre a elaboração e o arquivamento de documentos em meios eletromagnéticos.",
    },
    {
      title: "Lei Estadual nº 15.529, de 23/06/2015",
      description: "Dispõe sobre a Política Estadual de Gestão Documental.",
    },
    {
      title: "Decreto Estadual nº 45.157, de 23/10/2017",
      description:
        "Dispõe sobre o uso do meio eletrônico para a realização do processo administrativo no âmbito dos órgãos e das entidades da administração pública estadual direta, autárquica e fundacional.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className=" max-w-5xl mx-auto py-14 text-gray-800"> 
        <p className="lg:text-xl text-lg text-blue-900 pb-5 lg:px-0 px-12"> 
          As instituições estão adotando sistemas eletrônicos para agilizar
          procedimentos e melhorar a recuperação de informações.<br/>
          O exemplo do Sistema Eletrônico de Informações (SEI) ilustra os
          benefícios, como economia de espaço e rapidez no manuseio, além da
          necessidade de avaliar sua conformidade com as legislações vigentes.
        </p>

        <div className="mt-6 space-y-6 lg:px-0 px-12">
          {laws.map((law, index) => (
            <div key={index} className="border-l-4 border-blue-900 pl-4">
              <h2 className="text-lg font-bold text-blue-900">{law.title}</h2>
              <p className="text-gray-700 mt-1">{law.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalGovernmentLaws;
