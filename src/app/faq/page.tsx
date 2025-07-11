import Model from "@/app/components/model-page";

export default function FAQ() {
    return (
        <Model
            caminhoImagem="/images/Bandeira/bandeiramodelo.png"
            titulo="DÚVIDAS FREQUENTES"
            subtitulo="Tire suas dúvidas sobre o portal Nada Consta"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        {faqData.map((item, index) => (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </Model>
    );
}

interface FAQItemProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <details className="group">
                <summary className="flex justify-between items-center w-full p-6 cursor-pointer hover:bg-gray-50 rounded-t-lg">
                    <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
                    <span className="ml-4 transform group-open:rotate-180 transition-transform duration-200">
                        ▼
                    </span>
                </summary>
                <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{answer}</p>
                </div>
            </details>
        </div>
    );
}

const faqData = [
    {
        question: "Como emitir uma certidão negativa?",
        answer: "Para emitir uma certidão negativa, acesse o portal, informe seu CPF ou CNPJ, selecione o tipo de certidão desejada e clique em 'Emitir Certidão'. O documento será gerado instantaneamente em formato PDF."
    },
    {
        question: "Como validar uma certidão?",
        answer: "Na página de validação, digite o código de verificação que aparece no rodapé da certidão. O sistema confirmará se o documento é autêntico e válido."
    },
    {
        question: "Qual a validade das certidões?",
        answer: "As certidões negativas têm validade de 60 dias a partir da data de emissão. A data de validade está impressa na própria certidão."
    },
    {
        question: "Posso consultar débitos antes de emitir a certidão?",
        answer: "Sim! Use a opção 'Consultar Débitos' para verificar se existem pendências antes de solicitar a certidão. A consulta é totalmente gratuita."
    },
    {
        question: "O que fazer se encontrar débitos?",
        answer: "Se houver débitos, você deve quitá-los antes de emitir a certidão negativa. O sistema mostra todas as informações para pagamento e opções de parcelamento."
    },
    {
        question: "Como funciona a assinatura digital?",
        answer: "Todas as certidões são assinadas digitalmente pelo sistema, garantindo sua autenticidade e validade jurídica, com o mesmo valor legal que uma assinatura manuscrita."
    },
    {
        question: "O serviço funciona 24 horas?",
        answer: "O portal está disponível 24 horas por dia, 7 dias por semana, incluindo feriados. Eventuais manutenções programadas são comunicadas com antecedência."
    },
    {
        question: "Como recuperar uma certidão já emitida?",
        answer: "Use a função 'Consultar Certidões Emitidas' informando o CPF/CNPJ e período de emissão. O sistema mantém histórico das certidões por 12 meses."
    }
];
