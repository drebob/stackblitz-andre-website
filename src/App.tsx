import { FC } from 'react';
import VideoHeader from './components/VideoHeader';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App: FC<{ name: string }> = ({ name }) => {

  return (

    <div className="App">

      <VideoHeader />

      <div className="container-fluid position-absolute w-100">
        <div className="container0">
        <div className="row h-100">

          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5 sticky-top">

            <h1>Andre Hall-Rodrigues</h1>

            <h3>Web Developer/Designer</h3>

            <p>I specialize in digital design utilizing tools like the Adobe Suite and AI & modern front-end frameworks and libraries such as bootstrap, React, jquery and more.</p>

            <div className="button"><a href="#about">about</a></div>

<div className="button"><a href="#experience">experience</a></div>

<div className="button">projects</div>

</div>

<div className="col-md-6 overflow-auto p-5" id="about">

<p>I was initiated into the world of graphic and web design many moons ago when I decided to try my hand at customizing my myspace profile. 
  Since then, I've had the pleasure of designing and building websites for a <a href="https://www.retail1031.com/" target="_blank">commercial 
  real estate boutique</a>, <a href="#" target="_blank">drone photography business</a>, <a href="https://www.petosa.com/" target="_blank">an 100 year-old accordion manufacturer</a>,
   and a <a href="https://www.berkadia.com/" target="_blank">large commercial real estate company</a> owned by one of the wealthiest men in America.

</p>

<div className="card-cont">

<div className="row" id="experience">

<div className="col-md-3"><p className="smaller">April 2022 - Present</p></div>


<div className="col-md-9"><p>Web Designer/Developer | Fairytale Brownies</p>

<p>Maintain the various websites using Visual Studio and Wordpress - Redesign homepge bi-weekly(minimum) - Redesign of existing highly trafficked pages (homepage, product detail pages, product category pages with filters) - acting as point of contact for back-end programmer contractors - rapidy color-correcting and photoshopping high volumes of product shots - deploying, testing, debugging  </p>

</div>
</div>
</div>
<div className="card-cont">

<div className="row">

<div className="col-md-3"><p className="smaller">Oct 2020 - Nov 2022</p></div>

<div className="col-md-9"><p>Web Designer/Developer | Petosa Accordions</p>

<p>Maintain the various websites using Visual Studio and Wordpress - Redesign homepge bi-weekly(minimum) - Redesign of existing highly trafficked pages (homepage, product detail pages, product category pages with filters) - acting as point of contact for back-end programmer contractors - rapidy color-correcting and photoshopping high volumes of product shots - deploying, testing, debugging  </p>

</div>
</div>
</div>
<div className="card-cont">

<div className="row">

<div className="col-md-3"><p className="smaller">August 2019 - Jan 2020</p></div>

<div className="col-md-9"><p>Graphic Designer | Berkadia</p>

<p>Design marking packages for commercial properties - design websites for specific properties and sales teams - collaborate with project managers, realtors, and other designers - create maps and other materials relevant to a prospective buyer  </p>

</div>
</div>
</div>

<div className="card-cont">

<div className="row">

<div className="col-md-3"><p className="smaller">Dec 2018 - Aug 2019</p></div>

<div className="col-md-9"><p>Graphic Design / Marketing / Drone Operations | Phoenix UAV LLC</p>

<p>Creating a brand identity for the company (Logo, website, general aesthetic)
Editing drone videos in Adobe Premiere and After Effects to meet client demands
Communicating with clients regarding their needs (Shotlists, highlighted information, etc.)</p>
-
</div>
</div>
</div>
<div className="card-cont">

<div className="row">

<div className="col-md-3"><p className="smaller">Sep 2016 - July 2018</p></div>

<div className="col-md-9"><p>Graphic Designer | Retail Investment Group LLC</p>

<p>Creating new graphic, web and print assets for marketing

Rapidly completing Offering Memorandums (Within 24-48 hours)
Creating videos to advertise commercial properties
- </p>

</div>
</div>
</div>



</div>


</div>
</div>
</div>

</div>

);

}