export default function SectionAboutMe(){
    return(
        <div className='SectionAboutMeContainer'>
            <div className='SectionAboutMeHeader' >
                <h1>Sobre mim</h1>
            </div>
    
            <div className="SectionAboutMeContent">
                <div className="SectionAboutMeText" >
                    <p> Atualmente trabalho com <span className="DelphiColor" >Delphi</span> em uma empresa especializada em automação comercial. 
                        Minha trajetória na programação começou com <span className="PythonColor" >Python</span>, onde desenvolvi projetos utilizando o framework  
                        <span className="DjangoColor" > Django</span>.<br></br> <br></br>
                        Nesses projetos, usei <span className="JSColor" >JavaScript</span> para auxiliar na criação de APIs e enriquecer as funcionalidades do sistema. 
                        Hoje, com <span className="DelphiColor" >Delphi</span>, atuo na conversão de dados para sistemas ERP, realizando consultas <span className="SQLColor" >SQL</span> e integrando diferentes bases de dados para garantir 
                        a migração eficiente e precisa das informações.                       
                    </p>
                </div>
            </div>
            <style jsx>{`
                .DelphiColor {
                    color: #c52828;
                    font-weight:600;
                }

                .PythonColor {
                    color: #1DA1F2;
                    font-weight:600;
                }

                .DjangoColor {
                    color: #467c6b;
                    font-weight:600;
                }

                .JSColor {
                    color: #F7DF1E;
                    font-weight:600;
                }

                .SQLColor {
                    color: #E38B06;
                    font-weight:600;
                }
                .SectionAboutMeContainer{
                    // border: 2px solid red;
                    margin: 0 auto;
                    width: 50%;
                    display: flex;
                    flex-direction:column;
                    justify-content:center;
                    aligin-items:center;
                    text-align:center;
                    padding:40px 0;
                    color: whitesmoke;
                }
                .SectionAboutMeContent{
                    //width:70%;
                    // border: 3px solid cyan;
                    display:flex;
                    align-items:center;
                    justify-content:center;

                }
                .SectionAboutMeText{
                    // border: 2px solid yellow;
                    // width:70%;
                    letter-spacing: 1.5px;
                    text-align:justify;
                }    

                @media (max-width:700px) {
                    .SectionAboutMeContainer {
                        width: 80%;
                    }
                }
            `}</style>
        </div>
        );
}