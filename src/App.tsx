import React from 'react';
import './App.scss';
import ExplorerComponentContainer from './components/explorer/ExplorerComponentContainer';
import MainViewComponentContainer from './components/mainView/MainViewComponentContainer';

function App() {
  return (
    <div className='container'>
      <ExplorerComponentContainer></ExplorerComponentContainer>
      <MainViewComponentContainer>
      </MainViewComponentContainer>
    </div>
  );
}

export default App;
