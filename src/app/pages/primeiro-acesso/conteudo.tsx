const PrimeiroAcesso = () => {
  return (
    <div className="bg-gray-100 px-4">
      <div className="max-w-5xl mx-auto py-14 text-gray-800">
        <p className="text-xl text-blue-900 pb-5 barlow-semicondensedmedium">
          Para novas solicitações ou alterações de cadastro de usuário(s), estas deverão ser enviadas pelo SEI para a unidade SAD-SEI pelo representante da pasta ou pelo(s) servidor(es) designado(s) pelo mesmo.
        </p>

        <div className="space-y-6 text-base leading-relaxed">
          <div>
            <h2 className="font-semibold text-blue-900">Tipos de solicitações:</h2>
            <ul className="list-disc list-inside mt-2">
              <li>Alteração de cargo do usuário;</li>
              <li>Alteração de senha;</li>
              <li>Atualização de dados cadastrais dos usuários, que deverão ser revistos pelo servidor designado;</li>
              <li>Cadastro no domínio na rede da prefeitura;</li>
              <li>Cadastro no SEI;</li>
              <li>Cadastro na rede Wifi;</li>
              <li>Criação de e-mail institucional;</li>
              <li>Inclusão de novos usuários no SEI e a SEGD;</li>
              <li>Inativação de usuários;</li>
              <li>Modificação de permissão de acesso a unidades;</li>
              <li>Modificação de perfil do usuário.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-blue-900">O solicitante deverá:</h2>
            <ol className="list-decimal list-inside mt-2">
              <li>Clicar em “Iniciar Processo”;</li>
              <li>Escolher o Tipo de processo “Acesso a Sistemas”;</li>
              <li>Clicar em “Incluir Documento”;</li>
              <li>Selecionar o Tipo de documento “Cadastro”.</li>
            </ol>
          </div>

          <div>
            <h2 className="font-semibold text-blue-900">Informe os seguintes dados do novo usuário:</h2>
            <ul className="list-disc list-inside mt-2">
              <li>Nome completo;</li>
              <li>CPF;</li>
              <li>Matrícula;</li>
              <li>Órgão;</li>
              <li>Unidade;</li>
              <li>Cargo;</li>
              <li>E-mail.</li>
            </ul>
          </div>

          <div className="pt-4">
            <p className="text-base text-blue-900 font-medium italic">
              Observação: <span className="font-bold">A senha é PESSOAL E INTRANSFERÍVEL</span>, não compartilhe sua senha de acesso com nenhum outro usuário.
            </p>
          </div>

          <div className="text-right text-blue-900 font-medium italic">
            Atenciosamente, Equipe SEI.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimeiroAcesso;
