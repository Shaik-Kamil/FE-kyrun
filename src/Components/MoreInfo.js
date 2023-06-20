import React from 'react';
import runningWomen from '../images/women-running-outside.webp'
import group2 from '../images/rw-imagelibrary2020-hires-401-1675366389.jpg'
import group3 from '../images/running-buddies.jpg'
import kyrunGif2 from '../images/KYRUN (Billboard (Landscape) - 2592 x 864 px).gif'


function MoreInfo(props) {
    return (
        <div className='' style={{
            backgroundColor:'#F8F9FA'}}>
            <header class="masthead">
                <div class="">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                    <img class="img-fluid" src={kyrunGif2} 
                        style={{
                            height: '500px', width: '2592px', paddingBottom: '20px'}} alt="..." />
                            <a class="btn btn-primary" href="#about" style={{ backgroundColor:'#F18701', border: '#F18701', color: '#FFFFFF', marginTop: '-180px'}}>What's Kyrun?</a>
                    </div>
                </div>
            </div>
        </header> 
            <section class="about-section text-center" id="about"
            style={{
                paddingTop: '20px'}}>
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8" style={{ paddingBottom: '50px', paddingTop: '10px'}} >
                        <h2 class="text-212529 mb-4">There's Safety In Numbers.</h2>
                        <p class="text-212529-50">
                            Many people do not feel safe jogging alone, even in broad daylight. That's where Kyrun comes in. Kyrun allows you to find likeminded people who want to feel safe while achieving their fitness goals.
                        </p>
                    </div>
                </div>
                {/* <img class="img-fluid" src={group1} alt="..." /> */}
            </div>
        </section>
        <section class="projects-section bg-light" id="projects" >
            <div class="container px-4 px-lg-5">
                {/* <!-- Featured Project Row--> */}
                <div class="row gx-0 mb-4 mb-lg-5 align-items-center" style={{
            backgroundColor:'#F8F9FA'}}>
                    <div class="col-xl-8 col-lg-7" ><img class="img-fluid mb-3 mb-lg-0" src={group3} alt="..." style={{
                                paddingRight:'80px'}}/></div>
                    <div class="col-xl-4 col-lg-5" >
                        <div class="featured-text text-center text-lg-left" style={{
                                paddingRight:'80px'}}>
                            <h4>Start Building A Fitness Network.</h4>
                            <p class="text-black-50 mb-0">With Kyrun, you can search through countless groups to join or create your own group and safely begin your journey!</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Project One Row--> */}
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={runningWomen} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Not Sure Where To Run?</h4>
                                    <p class="mb-0 text-white-50">Kyrun also offers suggestions for each borough for you and your new running buddies to explore!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Project Two Row--> */}
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={group2} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Everything You Need In One Place</h4>
                                    <p class="mb-0 text-white-50">Your profile dashboard is curated so everything you could ever need is in one place. Need to update some info or need recommendations on which groups to join? It's all there!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}

export default MoreInfo;