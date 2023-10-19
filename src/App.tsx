import { FC } from 'react';
import VideoHeader from './components/VideoHeader';


import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="App">
    <VideoHeader />

    <div className="container-fluid max-w-screen-xl position-absolute w-100">
      <div className="row h-100">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5 sticky-top">
          <h1>Andre Hall-Rodrigues</h1>
          <h3>Web Developer/Designer</h3>
          <p>It's a vibe, I'm that guy. Killin' it in Dota since '08</p>
          
        </div>
        <div className="col-md-6 overflow-auto p-5">
         <p>I was initiated into the world of graphic and web design many moons ago when I decided to try my hand at customizing my myspace profile. Since then, I've had the pleasure of designing and building websites for a commercial real estate boutique, a drone photography business, a 100 year-old accordion manufacturer, and a huge corporation owned by one of the wealthiest men in America.
         </p> 
         <p>My main focus these days is designing and coding front-end solutions for Fairytale Brownies. I am the only web designer for Brownies.com, and the only front-end developer - although I <i>do</i> get roped into doing many things :). 
         </p>
         <p>When I’m not at the computer, I’m usually swimming, hanging out with my friends/dog, or rock climbing. 
         </p>
         <p>Lorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem Deus Lorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem DeusLorem Ipsum Et Spiritu Sanctu Dominae Patrae Homem Deus
         </p>
        </div>
      </div>
    </div>
  </div>
);
}
 
