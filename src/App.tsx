import { type } from 'os';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import ExplorerComponentContainer from './components/explorer/PlacesExplorerContainer';
import MainViewComponentContainer from './components/mainView/MainViewContainer';
import { fireBaseDataInit } from './firebase/firebaseApi';
import { dataInit, TDispatch } from './redux/firebaseDataReducer';
import { AppStateType } from './redux/store';

type TMapDispatch = {
  dataInit: () => void
}
type TProps = TMapDispatch
const App: React.FC<TProps> = (props) => {
  useEffect(() => {
    fireBaseDataInit()
    props.dataInit()
  }, [])

  return (
    <div className='container'>
      <ExplorerComponentContainer/>
      <MainViewComponentContainer/>
    </div>
  );
}

export default connect<{}, TMapDispatch, unknown, AppStateType>(() => { return {} }, { dataInit})(App)
