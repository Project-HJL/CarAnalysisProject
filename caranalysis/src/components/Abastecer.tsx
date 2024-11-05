import '../index.css';

const AbastecendoVeiculo = () => {
  return (
    <div className="container-9">
        <section className="geral">
            <div className="abastecer">
            <h3>Abastecendo seu Veículo</h3>
            <p>
                O abastecimento de combustível é uma etapa essencial na manutenção do seu veículo, e fazer escolhas inteligentes pode impactar 
                significativamente o desempenho e a durabilidade do motor. Neste artigo, vamos explorar os diferentes tipos de combustíveis disponíveis 
                para carros e motos, destacando suas qualidades e potenciais defeitos.
            </p>

            <div className="lista">
                <ol>
                <li>
                    <h4>Gasolina Comum:</h4>
                    <ul>
                    <li>
                        Qualidades: A gasolina aditivada contém aditivos detergentes que ajudam a limpar o sistema de combustão do motor, melhorando o desempenho e a eficiência.
                    </li>
                    <br />
                    <li>
                        Defeitos: Geralmente é mais cara que a gasolina comum e pode não oferecer benefícios significativos em motores mais antigos ou menos exigentes.
                    </li>
                    </ul>
                </li>
                <li>
                    <h4>Gasolina Aditivada:</h4>
                    <ul>
                    <li>
                        Qualidades: A gasolina aditivada contém aditivos detergentes que ajudam a limpar o sistema de combustão do motor, melhorando o desempenho e a eficiência.
                    </li>
                    <br />
                    <li>
                        Defeitos: Geralmente é mais cara que a gasolina comum e pode não oferecer benefícios significativos em motores mais antigos ou menos exigentes.
                    </li>
                    </ul>
                </li>
                <li>
                    <h4>Etanol:</h4>
                    <ul>
                    <li>
                        Qualidades: O etanol é uma opção mais sustentável, produzido a partir de fontes renováveis. Em veículos flex fuel, pode ser uma escolha econômica, especialmente em regiões onde o preço do etanol é competitivo.
                    </li>
                    <br />
                    <li>
                        Defeitos: O etanol possui um poder calorífico menor do que a gasolina, o que pode resultar em uma redução na eficiência do consumo de combustível. Além disso, pode ser corrosivo para certos materiais do motor se não forem compatíveis.
                    </li>
                    </ul>
                </li>
                </ol>
            </div>
            
            <br />
            <br />
            
            <p>
                Ao abastecer seu carro ou moto, leve em consideração não apenas o preço do combustível, mas também suas qualidades e potenciais defeitos. Escolher o combustível certo pode ajudar a garantir um desempenho consistente e uma vida útil prolongada para o seu veículo.
            </p>
            </div>
        </section>
    </div>

  );
};

export default AbastecendoVeiculo;