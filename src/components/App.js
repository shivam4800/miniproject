import React from 'react';


import SideBar from './sideBar';
import Spinner from './Spinner';
import Main from './Main';


class App extends React.Component{
  render(){
        return (
        <div>
        <div  >
          <SideBar />
          
        </div>
        <div >
          <Main />
        </div>
        </div>

        );
    }
}

export default App;