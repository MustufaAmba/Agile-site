import{Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Blog from './components/Blog';
import Press from './components/Press';
import Careers from './components/Careers';
import About_Us from './components/About_Us';
import OurServices from './components/OurServices';
import Agile_clouds_comic from './components/Agile_clouds_comic';
import Methodology from './components/Methodology';
import Client from './components/Client';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <div className="App">
      <Switch>
      <Route  exact path="/" component={Home}/>
      <Route  exact path="/Home" component={Home}/>
        <Route  exact  path="/Blog" component={Blog}/>
        <Route  exact path="/Press" component={Press}/>
        <Route  exact path="/Careers" component={Careers}/>
        <Route  exact path="/OurServices" component={OurServices}/>
        <Route  exact path="/Methodology" component={Methodology}/>
        <Route  exact path="/About_us" component={About_Us}/>
        <Route  exact path="/Client" component={Client}/>
        <Route  exact path="/Contact_us" component={ContactUs}/>
        <Route  exact path="/Agile_clouds_comic" component={Agile_clouds_comic}/>
      </Switch>
    </div>
  );
}

export default App;
