import React from 'react';
import '../css/App.css'
import LogoVideo from '../img/video.png';
import fbIcon from '../img/facebook.png';
import googleIcon from '../img/google.png';
import instagramIcon from '../img/instagram.png';
import twitterIcon from '../img/twitter.png';
const Footer = () => (

    <footer>
        <div className="containerFooterConteudo">
            <div className="footerConteudo">
                <div className="footerTitle">Canal de FEEDS / RSS</div>
                <div className="footerContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates quod, ad illum debitis quae laudantium odit dolor atque incidunt, reprehenderit accusamus nulla tempore. Quia itaque necessitatibus a perferendis quod!</div>
                <div className="videoFooter"><img src={LogoVideo}/></div>
            </div>
            <div className="footerConteudo">
                <div className="footerTitle">Programa de Fidelização</div>
                <div className="footerContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates quod, ad illum debitis quae laudantium odit dolor atque incidunt, reprehenderit accusamus nulla tempore. Quia itaque necessitatibus a perferendis quod!</div>
                <div className="saibaMais"><a href="#">Saiba Mais</a></div>
            </div>
            <div className="footerConteudo">
                <div className="footerTitle">Ensino à distância (EAD)</div>
                <div className="footerContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates quod, ad illum debitis quae laudantium odit dolor atque incidunt, reprehenderit accusamus nulla tempore. Quia itaque necessitatibus a perferendis quod!</div>
                <div className="saibaMais"><a href="#">Saiba Mais</a></div>
            </div>
            <div className="footerNoticias">
                <div className="titleNoticias">NOTÍCIAS</div>
                <div className="conteudoNoticias">
                    <div className="dataNoticia">04.05.2012</div>
                    <div className="conteudoNoticia">smart lan lança novo switch amodeus solução definitiva no segmento</div>
                </div>
                <div className="conteudoNoticias">
                    <div className="dataNoticia">04.05.2012</div>
                    <div className="conteudoNoticia">smart lan lança novo switch amodeus solução definitiva no segmento</div>
                </div>
                <div className="conteudoNoticias">
                    <div className="dataNoticia">04.05.2012</div>
                    <div className="conteudoNoticia">smart lan lança novo switch amodeus solução definitiva no segmento</div>
                </div>
                <div className="conteudoNoticias">
                    <div className="dataNoticia">04.05.2012</div>
                    <div className="conteudoNoticia">smart lan lança novo switch amodeus solução definitiva no segmento</div>
                </div>

            </div>
        </div>
        <div className="redesSociaisContainer">
            <div className="fbIcon icon"><a href="https://www.facebook.com/" target="_blank"><img src={fbIcon}/></a></div>
            <div className="googleIcon icon"><img src={googleIcon}/></div>
            <div className="instaIcon icon"><img src={instagramIcon} /></div>
            <div className="twtIcon icon"><img src={twitterIcon} /></div>
        </div>
    </footer>
)

export default Footer;