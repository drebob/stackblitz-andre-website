import { FC } from 'react';
import VideoHeader from './components/VideoHeader';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App: FC<{ name: string }> = ({ name }) => {

  return (

    <div className="App">

      <VideoHeader />

      <div className="container-fluid position-absolute w-100 container0">

        <div className="row h-100">

          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5 sticky-top">

            <h1>Andre Hall-Rodrigues</h1>

            <h3>Web Developer/Designer</h3>

            <p>I specialize in digital design utilizing tools like the Adobe Suite and AI & modern front-end frameworks and libraries such as bootstrap, React, jquery and more.</p>

            <div className="button">about</div>

            <div className="button">experience</div>

            <div className="button">projects</div>

          </div>

          <div className="col-md-6 overflow-auto p-5">

            <p>I was initiated into the world of graphic and web design many moons ago when I decided to try my hand at customizing my myspace profile. Since then, I've had the pleasure of designing and building websites for a commercial real estate boutique, a drone photography business, a 100 year-old accordion manufacturer, and a huge corporation owned by one of the wealthiest men in America.

            </p>

            <p>My main focus these days is designing and coding front-end solutions for Fairytale Brownies. I am the only web designer for Brownies.com, and the only front-end developer - although I <i>do</i> get roped into doing many things :).

            </p>

            <p>When I’m not at the computer, I’m usually swimming, hanging out with my friends and dog, or playing piano.

            </p>

            <div className="card-cont">

              <div className="row">

                <div className="col-md-3"><p className="smaller">2022 - Present</p></div>

                <div className="col-md-9"><p>Web Designer/Developer | Fairytale Brownies</p>

                  <p>Maintain the various websites using Visual Studio and Wordpress - Redesign homepge bi-weekly(minimum) - Redesign of existing highly trafficked pages (homepage, product detail pages, product category pages with filters) - acting as point of contact for back-end programmer contractors - rapidy color-correcting and photoshopping high volumes of product shots - deploying, testing, debugging  </p>

                </div>
              </div>
            </div>
            <div className="card-cont">
              <div className="row">
                <div className="col-md-3"><p className="smaller">2021 - Present</p></div>
                <div className="col-md-9">I was initiated into the world of graphic and web design many moons ago when I decided to try my hand at customizing my myspace profile. Since then, I've had the pleasure of designing and building websites for a commercial real estate boutique, a drone photography business, a 100 year-old accordion manufacturer, and a huge corporation owned by one of the wealthiest men in America.
                </div>
              </div>
            </div>
            <div className="card-cont">

              <div className="row">

                <div className="col-md-3"><p className="smaller">2021 - Present</p></div>

                <div className="col-md-9">I was initiated into the world of graphic and web design many moons ago when I decided to try my hand at customizing my myspace profile. Since then, I've had the pleasure of designing and building websites for a commercial real estate boutique, a drone photography business, a 100 year-old accordion manufacturer, and a huge corporation owned by one of the wealthiest men in America.

                </div>

              </div>

            </div>

            <div className="card-cont">

              <div className="row">

                <div className="col-md-3"><p className="smaller">2021 - Present</p></div>

                <div className="col-md-9">I was initiated into the world of graphic and web design many moons ago when I decided to try my hand at customizing my myspace profile. Since then, I've had the pleasure of designing and building websites for a commercial real estate boutique, a drone photography business, a 100 year-old accordion manufacturer, and a huge corporation owned by one of the wealthiest men in America.

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}