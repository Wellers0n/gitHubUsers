import React from 'react';
import '../css/App.css'
import image from '../img/bg-pessoas.png';

const Home = () => (
    <main>
        <div className="containerMain">
            <img src={image}/>
            <h1>Por de trás do seu<br/> sucesso,<br/> o compromisso da<br/> nossa equipe</h1>
        </div>
        <div className="conteudoInfo">              
        </div>
    </main>
)
export default Home;