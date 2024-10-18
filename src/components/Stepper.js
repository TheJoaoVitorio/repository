import React from 'react';
import { SiDelphi, SiDbeaver, SiNotion } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPhoenixSquadron, FaGitAlt,FaFigma  } from "react-icons/fa";


const tools = [
  {
    icon: <FaFigma  size={24} />,
    name: "Figma",
    description: "Design de interface e prototipagem."
  },
  {
    icon: <SiNotion size={24} />,
    name: "Notion",
    description: "Plataforma multifuncional para organização de projetos, gestão de tarefas e documentação colaborativa."
  },
  {
    icon: <FaGitAlt size={24} />,
    name: "Git",
    description: "Controle de versão e colaboração."
  },
  {
    icon: <SiDelphi size={24} />,
    name: "Delphi 11.3",
    description: "IDE para desenvolvimento rápido de aplicativos nativos multiplataforma, especializada em Windows e com suporte estendido para mobile."
  },
  {
    icon: <VscVscode size={24} />,
    name: "VS Code",
    description: "Ambiente de desenvolvimento integrado."
  },
  {
    icon: <SiDbeaver size={24} />,
    name: "DBeaver",
    description: "Gerenciamento e visualização de banco de dados."
  },
  {
    icon: <BiLogoPostgresql size={24} />,
    name: "PostgreSQL",
    description: "Banco de dados relacional robusto, utilizado para armazenamento de dados e consultas complexas em projetos de diferentes tamanhos."
  },
  {
    icon: <FaPhoenixSquadron size={24} />,
    name: "Firebird",
    description: "Banco de dados leve e eficiente, ideal para aplicações embarcadas e sistemas que exigem alta performance e baixo consumo de recursos."
  }
  
];

const Stepper = () => {
  return (
    <div className='stepperContainer'>
      <div className='stepperHeader' >
          <h1>Ferramentas</h1>
      </div>

      <div className="stepper">
        {tools.map((tool, index) => (
          <div key={index} className="stepper-item">
            <div className="stepper-icon">{tool.icon}</div>
            <div className="stepper-content">
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
            {index < tools.length - 1 && <div className="stepper-line"></div>}
          </div>
        ))}
      </div>
      <style jsx>{`
        .stepperContainer {
          width: 70%;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: whitesmoke;
        }
        .stepperHeader {
          width: 300px;
          font-size: 20px;
          text-align: center;
          margin-bottom: 10px;
        }
        .stepper {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          max-width: 100%;
          position: relative;
          padding-top: 20px;
          animation: appear linear;
          animation-timeline : view();
          animation-range:entry 0;
        }
        .stepper-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 40px;
          position: relative;
        }
        .stepper-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #3b82f6;
          z-index: 2;
          background: rgba(15, 16, 16, 0.8);
          backdrop-filter: blur(10px);
          box-shadow: rgb(22, 22, 22) 0px 6px 24px 0px, rgba(28, 28, 28, 0.892) 0px 0px 0px 1px;
          transition: transform 0.3s ease-in-out; /* Transição suave para o zoom */
        }
        .stepper-icon:hover {
          transform: scale(1.2); /* Efeito de zoom */
        }
        .stepper-icon:hover svg {
          transform: rotate(360deg); /* Rotação do ícone */
          transition: transform 0.3s ease-in-out; /* Transição suave para a rotação */
        }
        .stepper-content {
          margin-left: 20px;
          flex-grow: 1;
        }
        .stepper-content h3 {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 8px 0;
        }
        .stepper-content p {
          font-size: 14px;
          color: #666;
          margin: 0;
          word-wrap: break-word;
          overflow-wrap: break-word;
          text-wrap: balance;
        }
        .stepper-line {
          position: absolute;
          top: 48px;
          left: 24px;
          width: 2px;
          height: calc(100% - 12px);
          background-color: rgba(255, 255, 255, 0.18);
          z-index: 1;
        }
        .stepper-item:last-child {
          margin-bottom: 0;
        }
        .stepper-item:last-child .stepper-line {
          display: none;
        }

        @keyframes appear{
            from{
                    opacity :0;
                    scale: 0.8;
            } to {
                    opacity:1;
                    scale:1;
            }
        }

        /* .block{
            animation: appear linear;
            animation-timeline : view();
            animation-range:entry 0;
        } */

        @media (min-width:700px) {
            .stepper-content p {
                width: 300px;
            }
        }
      `}</style>
    </div>
  );
};

export default Stepper;
