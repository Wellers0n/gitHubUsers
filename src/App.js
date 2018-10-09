import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
//route's => rotas
import Home from './routes/Home';
import Marca from './routes/Marca';
import Missao from './routes/Missao';
import Ecommerce from './routes/Ecommerce';
import Treinamento from './routes/Treinamento';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home}/>
            <Route path="/marca" component={Marca}/>
            <Route path="/missao" component={Missao}/>
            <Route path="/ecommerce" component={Ecommerce}/>
            <Route path="/treinamento" component={Treinamento}/>
            <Footer />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
