import {ASCIIcreate} from './components/ASCIIcreate.js'
import { Footer } from './components/Footer.js';
import { Header } from './components/Headder.js';
import { Login } from './components/Login.js';
import { SignUp } from './components/SignUp.js';
function App() {
  return (
    <div style={{width:'100%',height:'100%',backgroundColor:'#2AA18B'}}>
      {/* <SignUp/> */}
      {/* <Login/> */}
      <Header/>
      <ASCIIcreate/>
      <Footer/>
    </div>
  );
}

export default App;
