import React from 'react'
import "./HTML.css"
import "./font1/all.css"
import img1 from "./images/logo.png"
import img2 from "./images/search.png"
import img3 from "./images/pet_care.png"
import img4 from "./images/pet_shop.png"
import img5 from "./images/pet_help.png"
import img6 from "./images/pet_care.png"
import img7 from "./images/pet_care.png"
import img8 from "./images/dog_paw.png"
import img9 from "./images/dog_paw.png"
import img10 from "./images/dog_paw.png"
import img11 from "./images/dog_paw.png"
import img12 from "./images/dog_paw.png"
import img13 from "./images/dog_paw.png"
import img14 from "./images/dog_paw.png"



function HTML() {
    return (
<div className="w-100 ALL" >
      <header className="main-head">
        <div className="hell">
          <img src={img1} alt="Logo"/>
        </div>
        
        <div className="div justify-content-center">
          <ul className="list mt-3">
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Promo</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button>
            <img src={img2} alt="Search" />
          </button>
        </div>
      </header>

<section className="main-body">
        <h1>We care about your pet</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className="p-block"> Voluptatem mollitia sed
                necessitatibus soluta voluptatum eveniet voluptates commodi facere nulla nisi</span></p>
        <button className="first-search">Order Now</button>
      </section>

      {/* Add other sections here */}

<section className="owner">

<h1 className="head">title here</h1>
<p className="title-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

<div className="trainer">   

    <div className="train-1">
        <img src={img3} className="train-img"/>
        <h3>pet care</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span> Porro, doloremque cum</span> </p>
    </div>

    <div className="train-2">
        <img src={img4} className="train-img"/>
        <h3>pet shop</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          <span>Porro, doloremque cum </span>  </p>
    </div>

    <div className="train-3">
        <img src={img5}   className="train-img"/>
        <h3>pet help</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span>Porro, doloremque cum</span>  </p>
    </div>
</div>
</section>

<section className="full">
        <h1 className="title-here">title here</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis natus ratione neque
            architecto libero!
        </p>

        <div className="round">

            <div className="pet-care">
                <h1>3.5K</h1>
                <p>pet care</p>
            </div>

            <div className="outlet">
                <h1>900</h1>
                <p>outlet</p>
            </div>

            <div className="pet-helping">
                <h1>2k+</h1>
                <p>pet helping</p>
            </div>

        </div>

    </section>

    <section className="section-4">
        <div className="block-4">
            <div className="title-para-4">
                <h1 className="title-4">title here</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                    </p>
                <button className="order-4">Order Now</button>
            </div>
            <div className="img-1">
                <img src={img6} width="100%"/>
            </div>
        </div>
    </section>




    <section className="section-5">
        <div className="block-5">
            <div className="title-para-5">
                <h1 className="title-5">title here</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing  </p>
                <button className="order-5">Order Now</button>
            </div>
            <div className="img-2">
                <img src={img7} width="100%"/>
            </div>
        </div>
    </section>


   
    <section className="section-6">
        <div className="title-6">
            <h2>title here</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores voluptatum nostrum consequatur! Neque
                labore.</p>
        </div>
        <div className="block-6">
            <div>
                <h2>premium</h2>
                <img src={img8}/>
                <h2>$19.00</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia temporibus ad sapiente repellendus
                    aspernatur esse, possimus ratione a hic voluptatem perferendis eos, quia nulla?</p>
                <button>Order Now</button>
            </div>
            <div>
                <h2>premium</h2>
                <img src={img9}/>
                <h2>$19.00</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia temporibus ad sapiente repellendus
                    aspernatur esse, possimus ratione a hic voluptatem perferendis eos, quia nulla?</p>
                <button>Order Now</button>
            </div>
            <div>
                <h2>premium</h2>
                <img src={img10}/>
                <h2>$19.00</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia temporibus ad sapiente repellendus
                    aspernatur esse, possimus ratione a hic voluptatem perferendis eos, quia nulla?</p>
                <button>Order Now</button>
            </div>
        </div>

    </section>


    <section class="sub-main-section-7">
        <div class="Title header-7">
            <h2>Title Here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur 
                <span class="span1">
                    Vivamus Iacinia odio vitae vestibulum vestibulum.
                </span>
            </p>
        </div>
        <div class="full-paragraph">
            <div class="para one">

                <img src={img11} width="100" height="100"/>

                <div class="span one">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor 
                        <span class="span1">consectetur adipiscing. </span>
                        <span class="span1">Vivamus Iacinia </span>
                        <span class="span1">vestibulum vestibulum.</span>
                    </p>
                </div>
            </div>
            <div class="para two">
                <img src={img12} width="100" height="100"/>
                <div class="span two">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor  
                        <span class="span1">consectetur adipiscing. </span>
                        <span class="span1">Vivamus Iacinia </span>
                        <span class="span1">vestibulum vestibulum.</span>
                    </p>
                </div>



            </div>  

            <div class="para three">
                <img src={img13} width="100" height="100"/>
                <div class="span three">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor
                        <span class="span1">consectetur adipiscing.</span>
                        <span class="span1">Vivamus Iacinia </span>
                        <span class="span1">vestibulum vestibulum.</span>
                    </p>
                </div>
            </div>
            <div class="para four">
                <img src={img14} width="100" height="100"/>
                <div class="span four">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor        
                        <span class="span1">consectetur adipiscing.</span>
                        <span class="span1">Vivamus Iacinia</span>
                        <span class="span1">vestibulum vestibulum.</span>
                    </p>
                </div>
            </div>

        </div>
    </section>


    <section class="section-8">
        <div class="para-head">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span class="elit 1">Consequatur quibusdam quasi
                    dolor inventore pariatur laudantium</span><span class="elit 2"> error at et suscipit dolorum ea voluptas </span>optio incidunt
                in sapiente molestias consequuntur asperiores ducimus.</p>
            <h2>Dr.jenny</h2>
        </div>
    </section>



    <footer class="footer moble-view">
        <div class="header-foot ">
        <h2>title here</h2>
     <p >Lorem ipsum dolor sit amet <br/> adipisicing elit. debitis natus?</p>
     <div class="fonts">
     <i class="fa-brands fa-facebook"></i>
     <i class="fa-brands fa-instagram"></i>
     <i class="fa-brands fa-whatsapp"></i>
     <i class="fa-brands fa-youtube"></i>
    </div>
         </div>


          <div class="full-list moble-view">

            <div class="about class ">
            <h3>About</h3>
            <ul class="uno 1">
                <li>History</li>
                <li>Our Team</li>
                <li>Brand Guideliness</li>
                <li>Terms&Condition</li>
                <li>PrivacyPolicy</li>
            </ul>
          </div>

          <div class="services class">
            <h3>Services</h3>
            <ul class="uno 2">
                <li>How to Order</li>
                <li>Our Product</li>
                <li>Order Status</li>
                <li>Promo</li>
                <li>Payment Method</li>
            </ul>
          </div>

          <div class="other class">
            <h3>Other</h3>
            <ul class="uno 3">
                <li>Contact Us</li>
                <li>Help</li>
                <li>privacy</li>
            </ul>
          </div>

        </div>

    </footer> 


  
</div>

    )
}
export default HTML