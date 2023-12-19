
import './App.scss';
import left_dot from "./assets/images/left_dot.png"
import right_dot from "./assets/images/right_dot.png";
import person_img from "./assets/images/person_img.svg";
import logo from "./assets/images/logo.svg";

function App() {

  
  return (
    <div className="ciff-section">
      <div className='left-side-img side_img'>
        <img src={left_dot} alt='left_dot' />
      </div>
<div className='ciff-container'>
<div className='left-side'>
  <div className='logo'>
    <img src={logo} alt='logo' />
  </div>
  <div className='title'>
  Hi👋, I’m Madhur. <br />
Let’s walk and talk at CIFF?
  </div>
  <div className='form'>
    <form>
      <div className='input'>
      <input placeholder='Enter email ID' />
      </div>
      <div className='input'>
      <input placeholder='Enter Phone Number' />
      </div>
      <div className='btn'>
        <button>Submit</button>
      </div>
      
    </form>
  </div>
</div>
<div className='right-side'>
  <img src={person_img} alt='img' className='person' />
</div>
</div>
<div className='right-side-img side_img'>
        <img src={right_dot} alt='right_dot' />
      </div>
    </div>
  );
}

export default App;
