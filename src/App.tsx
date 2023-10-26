import { FC } from 'react';
import VideoHeader from './components/VideoHeader';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollButtons from './components/Skills';

export const App: FC<{ name: string }> = ({ name }) => {

  return (

    <div className="App">

      <VideoHeader />

      <div className="container-fluid position-absolute w-100">
        <div className="container0 content-hidden" id="pageContent">
        <div className="row h-100">

          <div className="col-md-6 d-flex flex-column justify-content-top align-items-start sticky-top kk">
          <div className="container1  w-80">
            <h1 className="header-text name">Andre Hall-Rodrigues</h1>

            <h3 className="header-text title">Web Developer/Designer</h3>

            <p className="header-text description">Expert in digital design with Adobe Suite and AI, along with modern front-end technologies like Bootstrap, React, and jQuery.</p>

            </div>


<ScrollButtons />


</div>

<div className="col-md-6 overflow-auto kk2" id="about">
  <div className="container2">
<div className="about-cont description b">
<p>My journey in graphic and web design started with personalizing my MySpace profile and evolved into a career crafting digital experiences for diverse industries. I’ve designed and developed websites for commercial real estate, drone photography, and a century-old accordion manufacturer. Currently, I'm the lead front-end designer and developer for Fairytale Brownies, responsible for maintaining and updating Brownies.com.
</p>
<p>My role involves not just web design but also merchandising, data analytics, and collaborating with back-end developers. Although I wear many hats, my main priority is creating user-friendly, attractive websites that stand out, aiming for improved user engagement and conversion rates.
         </p>
         <p>When I'm not at a computer, I balance my life with music, swimming, and spending quality time with friends and my dog. I also teach piano as a side-gig and thoroughly enjoy playing many different types of music.
         </p>
</div>
<div className="card-cont mont">

<div className="row" id="experience">

<div className="col-md-3 duration"><p className="smaller">APRIL'22 - PRESENT</p></div>


<div className="col-md-9"><p className="exp-title">Web Designer/Developer | Fairytale Brownies</p>

<p className="exp-body">Maintain the various websites using Visual Studio and Wordpress - Redesign homepge bi-weekly(minimum) - Redesign of existing highly trafficked pages (homepage, product detail pages, product category pages with filters) - acting as point of contact for back-end programmer contractors - rapidy color-correcting and photoshopping high volumes of product shots - deploying, testing, debugging  </p>

</div>
</div>
</div>
<div className="card-cont mont">

<div className="row">

<div className="col-md-3 duration"><p className="smaller">OCT'20 - NOV'22</p></div>

<div className="col-md-9"><p className="exp-title">Web Designer/Developer | Petosa Accordions</p>

<p className="exp-body">Maintain the various websites using Visual Studio and Wordpress - Redesign homepge bi-weekly(minimum) - Redesign of existing highly trafficked pages (homepage, product detail pages, product category pages with filters) - acting as point of contact for back-end programmer contractors - rapidy color-correcting and photoshopping high volumes of product shots - deploying, testing, debugging  </p>

</div>
</div>
</div>
<div className="card-cont mont">

<div className="row">

<div className="col-md-3 duration"><p className="smaller">AUG'19 - JAN'20</p></div>

<div className="col-md-9"><p className="exp-title">Graphic Designer | Berkadia</p>

<p className="exp-body">Design marking packages for commercial properties - design websites for specific properties and sales teams - collaborate with project managers, realtors, and other designers - create maps and other materials relevant to a prospective buyer  </p>

</div>
</div>
</div>

<div className="card-cont mont">

<div className="row">

<div className="col-md-3 duration"><p className="smaller">DEC'18 - AUG'19</p></div>

<div className="col-md-9"><p className="exp-title">Graphic Design / Marketing / Drone Operations | Phoenix UAV LLC</p>

<p className="exp-body">Creating a brand identity for the company (Logo, website, general aesthetic)
Editing drone videos in Adobe Premiere and After Effects to meet client demands
Communicating with clients regarding their needs (Shotlists, highlighted information, etc.)</p>

</div>
</div>
</div>
<div className="card-cont mont">

<div className="row">

<div className="col-md-3 duration"><p className="smaller">SEP'16 - JULY'18</p></div>

<div className="col-md-9"><p className="exp-title">Graphic Designer | Retail Investment Group LLC</p>

<p className="exp-body">Creating new graphic, web and print assets for marketing

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
</div>
);

}