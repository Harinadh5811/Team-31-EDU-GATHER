import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Registration from './components/Registration';
import Navigation from './components/Navigation';
import Groups from './components/Groups';
import Email from './components/Email'
import ViewAllGroups from './components/ViewAllGroups'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar } from '@material-ui/core';

function App({store}) {
  return(
    <div className="App">

        <div className="App-header">
          <p>EDU GATHER</p>
        </div>

        <div className="App-body">
              <Container>
                <Navigation store={store} />
                <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/log' element={<Login store={store}  />} />
                    <Route path='/reg' element={<Registration />} />
                    <Route path='/gro' element={<Groups />} />
                    <Route path='/vie' element={<ViewAllGroups/>}/>
                  </Routes>
                </BrowserRouter>
              </Container>
        </div>
      
    </div>
  );
}

export default App;