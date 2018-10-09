import React from 'react';

const Treinamento = () => (
    <main>
        <div className="containerTreinamento">
            <div className="containerAreaDoAluno">
                <font>Área do Aluno</font>
                <div>
                    <label >Email:</label>
                    <input type="email" id="email"  placeholder="digite seu email" onKeyUp={(e) => {
                        
                        console.log(e.keyCode);
                    }}/>
                    <label >senha:</label>
                    <input type="senha" id="senha" placeholder="Digite sua senha" />
                    <div className="fazerLogin">
                        <a href="#">esqueceu a senha?</a>
                        <input type="submit" value="Entrar" />
                    </div>
                </div>
                <span> {/* span que faz a divisão do meio*/} </span>
            </div>
            <div className="titleTreinamento"><font>TREINAMENTO COMERCIAL</font></div>
        </div>
        <div className="conteudoTreinamento" >
            <div className="conteudoTreinamentoLeft"></div>
            <div className="conteudoTreinamentoRight">
                <font>Capacitar a equipe técnica e de vendas de nossos parceiros,<br/> para que conheçam de forma objetiva, não apenas os produtos,<br/> mas as tecnologias envolvidas, permitindo-os entender as<br/> necessidades de seus clientes.</font>
                <div></div>
            </div>
        </div>

    </main>
)

export default Treinamento