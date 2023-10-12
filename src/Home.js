import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
       
       <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="img-home"></img>
       <div className="home_row">
          <Product
            id="12321341"
            title="Tomb of Sand is a 2018 Hindi-language novel by Indian author Geetanjali Shree. It was translated into English by U.S. translator Daisy Rockwell. In 2022, the book became the first novel translated from an Indian language to win the International Booker Prize."
            price={800}
            rating={Math.floor(Math.random() * 5 + 1)}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81vHR1cX5eL.jpg"
          />


          <Product
            id="49538094"
            title="The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. It was announced as successor to the PlayStation 4 in April 2019"
            price={60000}
            rating={Math.floor(Math.random() * 5 + 1)}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYpqtXJhhNHxGbnZ2HseUDANRJLk-TbFx_DprdUeOojUvAlcjjIdxHO9x1AGKeYiiCuitdOAApbU&usqp=CAU&ec=48600112"
          />

        </div>

        <div className="home_row">
          <Product
            id="4903850"
            title="RAEGR RapidGear X70 USB Gaming Keyboard and Mouse Set | Made of Aluminium Body | 4 Choices of Adjustable DPI | 3 Rainbow Lighting Modes|Gaming Mouse for PC/Laptop/Mac - RG10359 (Grey)"
            price={1000}
            rating={Math.floor(Math.random() * 5 + 1)}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71aARXewm6L._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="vaidehi Inline Skates with PU Flashing Wheel Aluminum Body in-Line Skates with Adjustable Length for Age 10-16 Years (Blue)"
            price={8000}
            rating={Math.floor(Math.random() * 5 + 1)}
            image="https://rukminim1.flixcart.com/image/416/416/jzn0tjk0/skate/h/t/r/34-39-adjustable-inline-roller-skates-pu-wheel-aluminium-alloy-original-imafbb3dhrtqy9mc.jpeg?q=70"
          />
          <Product
            id="3254354345"
            title="Apple iPhone 14 Pro (128 GB) - Gold"
            price={90000}
            rating={Math.floor(Math.random() * 5 + 1)}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71ZDY57yTQL._SL1500_.jpg"
          />


        </div>


        <div className="home_row">
          <Product
            id="90829332"
            title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X75K (Black) (2022 Model) | with Alexa Compatibility"
            price={109400}
            rating={Math.floor(Math.random() * 5 + 1)}
            image="https://www.reliancedigital.in/medias/Sony-KD-55X80K-Television-492912657-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzUwMjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDUyL2gyMy85ODM1MTkyNDUxMTAyLmpwZ3w1YmY5M2EyNzRkNjNmNDc2NzczYzQ4MGZhNzYxNjYyNzI3OTQ3OTM1ZWM0MTlmMjFhMmE0Y2QxYTAxN2FlZDEx

"
          />

        </div>
      </div>

    </div>
  )
}

export default Home;
