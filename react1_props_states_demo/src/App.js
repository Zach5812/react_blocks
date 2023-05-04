import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SubContent from './components/SubContent';
import Advertisement from './components/Advertisement';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Header className="header" />
      <div className="bottom">
        <Navigation className="navigation" />
        <Main className="main" >
        <div className="contents">
          <SubContent className="subcontent" />
          <SubContent className="subcontent" />
          <SubContent className="subcontent" />
        </div>
        <Advertisement className="ad" />
        </Main>
      </div>
    </div>
  );
}

export default App;
