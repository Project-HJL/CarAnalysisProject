import { Link } from 'react-router-dom'; // Se estiver usando React Router para navegação
import bucketImg from '/src/assets/bucket.png';
import steeringWheelImg from '/src/assets/steering-wheel.png';
import gasPumpImg from '/src/assets/gas-pump.png';
import toolBoxImg from '/src/assets/tool-box.png';

const sections = [
  {
    link: "/blog-page-limpeza",
    imgSrc: bucketImg,
    altText: "bucket",
    title: "COMO LIMPAR SEU AUTOMÓVEL",
    description: "Dicas para limpar o seu automóvel"
  },
  {
    link: "/blog-page-direcao",
    imgSrc: steeringWheelImg,
    altText: "steering-wheel",
    title: "DIREÇÃO DEFENSIVA",
    description: "Dicas de direção defensiva"
  },
  {
    link: "/blog-page-abastecer",
    imgSrc: gasPumpImg,
    altText: "gas-pump",
    title: "ABASTECENDO SEU VEÍCULO",
    description: "Dicas para abastecer o seu automóvel"
  },
  {
    link: "/blog-page-manutencao",
    imgSrc: toolBoxImg,
    altText: "tool-box",
    title: "PEQUENAS MANUTENÇÕES",
    description: "Dicas para fazer pequenos concertos em seu carro"
  }
];

const BlogCard = () => {
  return (
    <>
      {sections.map((section, index) => (
        <div className="wrapper-container" key={index}>
          <div className="content-card">
            <Link to={section.link} className="link-text">
              <div className="image-wrapper">
                <img src={section.imgSrc} alt={section.altText} />
              </div>
              <div className="divider"></div>
              <div className="text-container">
                <h1 className="heading-primary">{section.title}</h1>
                <h3 className="heading-secondary">{section.description}</h3>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;

