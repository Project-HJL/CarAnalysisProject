import '../index.css'; // Importe o CSS se necessário

const PequenasManutencoes = () => {
  return (
    <div className="container-8">
      <section className="geral">
        <div className="manutencao">
          <h3>Pequenas Manutenções</h3>
          <p>
            Manter seu veículo em ótimas condições não significa apenas grandes
            reparos em oficinas especializadas. Muitas vezes, pequenas manutenções
            preventivas e correções de problemas simples podem fazer uma grande
            diferença na performance e durabilidade do seu carro ou moto. Neste artigo,
            exploraremos algumas dessas tarefas que você pode realizar por conta própria,
            sem a necessidade de um especialista.
          </p>
          <h4>Carro:</h4>
          <div className="lista">
            <ol>
              <li>
                <h4>Manutenções Preventivas:</h4>
                <ul>
                  <li>Verificação do Nível de Óleo: Verifique regularmente o nível de óleo do motor e, se
                    necessário, complete com o tipo e viscosidade corretos.</li>
                  <br />
                  <li>Inspeção dos Pneus: Verifique a pressão dos pneus regularmente e inspecione-os quanto
                    a desgaste irregular ou danos, garantindo uma condução segura e economia de combustível.</li>
                  <br />
                  <li>Substituição do Filtro de Ar: Troque o filtro de ar regularmente para garantir uma mistura
                    ar-combustível adequada e melhor desempenho do motor.</li>
                </ul>
              </li>
              <li>
                <h4>Manutenções de Defeitos do Painel:</h4>
                <ul>
                  <li>Luz de Alerta de Pressão dos Pneus: Se a luz de alerta de pressão dos pneus acender, verifique
                    a pressão de todos os pneus e ajuste conforme necessário.</li>
                  <br />
                  <li>Luz do Motor: Se a luz do motor acender, verifique o manual do proprietário para interpretar
                    o código de erro e tome medidas corretivas, como verificar o nível de óleo ou apertar a tampa
                    do tanque de combustível.</li>
                </ul>
              </li>
              <li>
                <h4>Pequenas Manutenções:</h4>
                <ul>
                  <li>Substituição de Lâmpadas Queimadas: Substitua lâmpadas queimadas em faróis, lanternas e luzes
                    de freio para garantir visibilidade adequada e segurança.</li>
                  <br />
                  <li>Limpeza de Terminais da Bateria: Limpe os terminais da bateria regularmente com uma escova de
                    cerdas metálicas para evitar corrosão e garantir uma conexão sólida.</li>
                </ul>
              </li>
            </ol>

            <br />
            <br />
            <h4>Moto:</h4>
            <ol>
              <li>
                <h4>Manutenções Preventivas:</h4>
                <ul>
                  <li>Verificação do Nível de Óleo: Assim como nos carros, verifique regularmente o nível de óleo da sua moto e complete conforme necessário.</li>
                  <br />
                  <li>Lubrificação da Corrente: Mantenha a corrente da sua moto bem lubrificada para prolongar sua vida útil e garantir uma transmissão suave.</li>
                </ul>
              </li>
              <li>
                <h4>Manutenções de Defeitos do Painel:</h4>
                <ul>
                  <li>Luz do Óleo: Se a luz do óleo acender, verifique imediatamente o nível de óleo e complete se necessário. Se o problema persistir, consulte um mecânico.</li>
                </ul>
              </li>
              <li>
                <h4>Pequenas Manutenções:</h4>
                <ul>
                  <li>Ajuste de Espelhos: Verifique regularmente os espelhos retrovisores e ajuste-os conforme necessário para garantir uma visão clara do tráfego ao seu redor.</li>
                  <br />
                  <li>Verificação de Vazamentos: Procure por vazamentos de fluido sob a sua moto e corrija-os prontamente para evitar danos ao motor e à transmissão.</li>
                </ul>
              </li>
            </ol>
          </div>
          <br />
          <br />
          <p>
            Realizando essas pequenas manutenções regularmente, você pode manter seu veículo em excelente estado de
            funcionamento e evitar problemas mais graves no futuro. Lembre-se sempre de consultar o manual do proprietário
            para orientações específicas sobre a manutenção do seu carro ou moto.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PequenasManutencoes;
