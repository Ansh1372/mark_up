import logo from './logo.svg';
import './nav.style.css'
const Image =()=>{
    return(
        <nav>
            <img src={logo} className="App-logo" alt="logo" width="40px" />
            <h1>ReactFacts</h1>
        </nav>
        
        
    );
}
export default Image;