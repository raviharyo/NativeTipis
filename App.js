import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/mainNavigation';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <NavigationContainer>
        <MainNavigation />
        
      </NavigationContainer>
    );
  }
}

export default App;