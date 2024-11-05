import React from 'react';

// Definindo a interface para as propriedades do Card
interface CardProps {
    imgSrc: string;
    name: string;
    rm: string;
    desc: string;
    githubLink: string;
    linkedinLink: string;
}

// Componente Card com tipos
const Card: React.FC<CardProps> = ({ imgSrc, name, rm, desc, githubLink, linkedinLink }) => {
    return (
        <div className="card">
            <img src={imgSrc} alt={`perfil de ${name}`} className="profile-img" />
            <h1 className="name">{name}</h1>
            <h3 className="desc">
                |Estudante FIAP | RM {rm}
                <br />|{desc}
            </h3>
            <div className="social">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/placa-do-github.png" alt="perfil-github" width="50px" />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/linkedin.png" alt="perfil-linkedin" width="50px" />
                </a>
            </div>
        </div>
    );
};

// Componente AlunosPage
const AlunosPage: React.FC = () => {
    const cardData = [
        {
            imgSrc: '/src/assets/hassam.jpg',
            name: 'Hassan Chahine',
            rm: '556715',
            desc: 'Análise e Desenvolvimento de Sistemas',
            githubLink: 'https://github.com/Dskaaf',
            linkedinLink: 'https://www.linkedin.com/in/hassan-chahine-2b60ba245/',
        },
        {
            imgSrc: '/src/assets/joao.jpg',
            name: 'João Victor dos Santos Barbosa',
            rm: '555446',
            desc: 'Análise e Desenvolvimento de Sistemas',
            githubLink: 'https://github.com/joaovictorsbade',
            linkedinLink: 'https://www.linkedin.com/in/jo%C3%A3o-victor-santos-barbosa-514011286/',
        },
        {
            imgSrc: '/src/assets/luccas.jpg',
            name: 'Luccas de Alencar Rufino',
            rm: '558253',
            desc: 'Análise e Desenvolvimento de Sistemas',
            githubLink: 'https://github.com/LuccasAlencar',
            linkedinLink: 'https://www.linkedin.com/in/luccas-alencar-38093a25b/',
        },
    ];
    
    return (
        <div className="container-6-title">
            <div className="title-6"><h2>DESENVOLVEDORES</h2></div>
            <div className="container-6">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        imgSrc={card.imgSrc}
                        name={card.name}
                        rm={card.rm}
                        desc={card.desc}
                        githubLink={card.githubLink}
                        linkedinLink={card.linkedinLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default AlunosPage;
