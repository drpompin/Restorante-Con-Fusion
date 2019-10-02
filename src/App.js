import React, { Component } from 'react';
import Main from './components/MainComponent';
// import Header from '../src/components/HeaderComponent';
// import Footer from '../src/components/FooterComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

//We initialize store to make it available to the provider element of react-redux and then we pass it
//to the Provider
const store = ConfigureStore(); 



class App extends Component {
    

  render() {
    return (
      
        <div>
          {
            //Setting store={store} in the Provider makes the store available to the all the 
            //components within the react application
          }
          <Provider store={store}>
            <BrowserRouter>
              {/* <Header /> */}
              <Main />
              {/* <Footer /> */}
            </BrowserRouter>
          </Provider>
          
        </div>
    );
  }
}

export default App;
