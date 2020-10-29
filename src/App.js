import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';

import FetchData from './service/FetchData';

import './style.css';

class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
    companies: null,
  };

  componentDidMount() {
    this.updateRockets();
    this.updateCompany();
  }

  updateRockets() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState({ rockets: data.map(item => item.name) });
        return data
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => {
        this.setState({ rocketFeatures });
      });
  }

  updateCompany() {
    this.fetchData.getCompany()
    .then(companies => {
      this.setState({ companies });
    });
  }

  changeRocket = (rocket) => {
    this.setState({rocket}, this.updateRockets);
  }

  render() {
    return (
    <BrowserRouter>
      <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>

      <Route exact 
      path='/' 
      render={() => this.state.companies && <Home companies={this.state.companies}/> } />

      <Route 
      path='/rocket/:rockets'
      render={({match})=> this.state.rocketFeatures && <Features {...this.state.rocketFeatures} match={match}/>}/>

      <Route path='/calendar' component={Calendar}>
      </Route>
      <Route path='/details/:id' component={Details}>
      </Route>
    {this.state.companies && <Footer companies={this.state.companies}/>}


  </BrowserRouter>
  );
}
}

export default App;
