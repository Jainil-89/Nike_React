import { useState } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Mrp from './mrp';
import Men from './Components/Men';
import './App.css'
import { Link } from 'react-router-dom';
import Card from './card';


const div = document.querySelector(".cur")

function App() {

  const bar = document.querySelector("#bar")
  const crs = document.querySelector(".crs")

  function nb() {
    const n = document.querySelector(".n")
    n.style.display = "flex"
  }

  function rm() {
    const n = document.querySelector(".n")
    n.style.display = "none";
  }



  useGSAP(() => {



    const tl = gsap.timeline()
    tl.from(".srch", {
      y: -300,
      duration: 0.4,
      opacity: 0
    })

    tl.from("nav img", {
      y: -200,
      opacity: 0,
      stagger: 0.3
    })

    tl.from("nav ul li", {
      y: -200,
      opacity: 0,
      stagger: 0.3
    })
    tl.from("nav ul i", {
      y: -200,
      opacity: 0,
      stagger: 0.1
    })

    tl.from(".jdt h1", {
      y: 300,
      opacity: 0,
      duration: 1,
      stagger: 1
    })

    tl.from(".shu", {
      x: -400,
      opacity: 0,
      rotateZ: 80,
      duration: 1
    })
    tl.from(".mrp", {
      scale: 2,
      duration: 0.7,
      opacity: 0
    })


  })


  return (
    <>

      <div className="n flex justify-center w-full bg-zinc-950 absolute z-50 hidden">
        <i onClick={rm} className="crs fa-solid fa-xmark absolute text-4xl right-16 pt-10 text-white cursor-pointer"></i>
        <ul className='text-xl text-white mt-24 p-10 sm:text-xl'>
          <li className='p-8'><Link to="/Men">Men</Link></li>
          <li className='p-8 pl-3'><a href="">Women</a></li>
          <li className='p-8'><a href="">Kids</a></li>
          <li className='p-8'><a href="">Sale</a></li>
          <li className='p-8'><a href=""><i class="fa-solid fa-cart-shopping cursor-pointer"></i></a></li>
          <li className='p-8 pl-10'><a href=""><i class="fa-solid fa-user cursor-pointer"></i></a></li>

        </ul>
      </div>

      <div>

        <nav className='w-full h-20 flex justify-evenly bg-zinc-900 text-white'>
          <img className='w-24 h-auto mr-16 fill-white-900' src="/nike(1).png" alt="" />
          <ul className='nv h-auto flex max-[890px]:hidden'>
            <li className='m-6 text-lg'><a href="/Men">Men</a></li>
            <li className='m-6 text-lg'><a href="">Women</a></li>
            <li className='m-6 text-lg'><a href="">Kids</a></li>
            <li className='m-6 text-lg'><a href="">Sale</a></li>
          </ul>

          <ul className='icn flex '>

            <i class="fa-solid fa-cart-shopping mt-7 ml-9 h-auto pl-20 cursor-pointer"></i>
            <i class="fa-solid fa-user cursor-pointer mt-7 pl-10 "></i>
          </ul>
          <i onClick={nb} id="bar" className="fa-solid fa-bars-staggered mt-7 cursor-pointer text-2xl "></i>
        </nav>

        <body className='bg-zinc-900 overflow-hidden w-full h-full'>


          <div className="srch flex justify-center">
            <input className='bg-zinc-800 outline-none px-7 h-9 rounded-md text-white w-72' type="text" name="" id="" placeholder='Search...' />
          </div>



          <div className="box flex">

            <div className="jdt w-auto flex text-justify mt-36 ml-36 h-full text-3xl text-white">
              <h1 className='text-7xl font-extrabold pt-10'>
                Just <br />  Do <br /> It .
              </h1>
            </div>

            <img className='shu w-90 h-56 mt-40 ml-20 -rotate-45  md:w-90 md:h-56' src="/air.png" alt="" />


            <Mrp />
          </div>

          <div className="b flex justify-center rounded-lg mt-28">
            <div className="vid w-4/5 h-auto ">
              <video className='w-full h-4/5 ' src="/nike_vid.mp4" autoPlay muted loop></video>
            </div>

          </div>

          <div className="air text-white text-6xl text-center">
            <h1 className='p-5'>WIN ON AIR</h1>
          </div>

          <div className="c-box snap-x w-auto flex flex-wrap justify-evenly mt-24 h-2/4">
            <Card img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/163d9f52-ede6-483a-acff-558b40d89cac/alphafly-3-blueprint-road-racing-shoes-QrjGRL.png" name="Nike Alphafly 3" mrp="22795" />
            <Card img="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_410,c_limit/58009243-4900-4f63-bd33-9cced3d445cc/pegasus-41-blueprint-road-running-shoes-9ln3lK.png" name="Nike Pegasus 41 " mrp="11895" />
            <Card img="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_410,c_limit/f02453d3-7589-4c91-b86c-6f2262153eac/mercurial-superfly-10-elite-blueprint-fg-high-top-football-boot-bw1xLJ.png" name="Nike Mercurial Superfly 10 Elite" mrp="23795" />
            <Card img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b99c1521-3566-47dc-bd39-17a37b62602c/gt-hustle-3-blueprint-ep-basketball-shoes-gLwVc4.png" name="Nike G.T. Hustle 3" mrp="17495" />

          </div>
          <div className='flex justify-center'>
            <Link to="/Men"><button className='w-48 h-14 text-white rounded-xl text-xl bg-zinc-800 mb-10 mt-20 hover:text-white hover:bg-black hover:ease-out duration-300'>Explore More</button></Link>
          </div>

        </body>

      </div>
    </>
  )
}

export default App
