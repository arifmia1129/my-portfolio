import './App.css';
import { FaFacebookF } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import image from "./AB (108).jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  const copyText = () => {
    const text = "arifmia1129@gmail.com";
    navigator.clipboard.writeText(text);
    toast("Gmail address copied!")
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <div id="image-container">
        <img id="image" src={image} alt="me" />
      </div>
      <div id='nameTitle'>
        <h1 id='name'><div
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          Md</div>
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="1000"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >Arif</div>
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="1500"
            data-aos-duration="3000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >Mia</div>
        </h1>
        <h2 id='title'>Front-End Web Developer</h2>
      </div>
      <div className='social'>
        <div className='icon-container'>
          <a href="https://www.facebook.com/abarif1129/" target="_blank" rel="noreferrer">
            <FaFacebookF className='icon' />
          </a>
        </div>
        <div className='icon-container'>
          <a href="https://github.com/arifmia1129" target="_blank" rel="noreferrer">
            <BsGithub className='icon' />
          </a>
        </div>
        <div className='icon-container'>
          <a href="https://www.linkedin.com/in/md-arif-mia-87b5a423b/" target="_blank" rel="noreferrer">
            <AiFillLinkedin className='icon' />
          </a>
        </div>
        <div className='icon-container' onClick={copyText}>
          <SiGmail className='icon' />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
