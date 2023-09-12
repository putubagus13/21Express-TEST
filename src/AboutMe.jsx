// import React from 'react';
import Header from './components/Header';
import Profile from './assets/profile1.png';
import Skill from '../data.json';
import {BiSolidBookOpen} from 'react-icons/bi';
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs';
import Tix1 from './assets/tixevent1.png';
import Tix2 from './assets/tixevent2.png';
import Tix3 from './assets/tixevent3.png';
import Tix4 from './assets/tixevent4.png';
import Tix5 from './assets/tixevent5.png';
import Click1 from './assets/clickmedia1.png';
import Click2 from './assets/clickmedia2.png';
import Click3 from './assets/clickmedia3.png';
import Coffee1 from './assets/coffee1.png';
import Coffee2 from './assets/coffee2.png';
import Coffee3 from './assets/coffee3.png';
import Coffee4 from './assets/coffee4.png';

function AboutMe() {
  return (
    <div className='snap-y snap-mandatory scrollbar-hide w-full h-screen bg-base-100 overflow-auto'>
      <Header />
      <div className="snap-start w-full h-screen flex justify-center items-center shadow-2xl bg-white duration-200 md:px-[17%]">
        <div className='relative flex flex-col lg:flex-row rounded-xl shadow-lg px-[5%]'>
          <div className='flex z-20 md:z-10 flex-col items-start justify-around gap-14'>
            <label className='text-primary font-bold flex flex-col gap-0'>
              <span className='text-6xl md:text-8xl drop-shadow-lg'>WELCOME TO</span>
              <span className='text-4xl md:text-6xl drop-shadow-lg'>MY PROFILE</span>
            </label>
            <div className='flex gap-4'>
              <div className='w-10 h-10 overflow-hidden shadow-lg rounded-lg'>
                <a href="https://www.instagram.com/putu_bagusraditya/">
                  <img className='w-full h-full object-cover' src="https://e1.pxfuel.com/desktop-wallpaper/901/29/desktop-wallpaper-instagram-logo-png-instagram-icon.jpg" alt="instagram" />
                </a>
              </div>
              <div className='w-10 h-10 overflow-hidden shadow-lg rounded-lg'>
                <a href="https://wa.me/6282184677520/?text=hallo/">
                  <img className='w-full h-full object-cover' src="https://www.blackxperience.com/assets/blackattitude/blacktips//cover-wa-300x300.jpg" alt="WhatsAPp" />
                </a>
              </div>
              <div className='w-10 h-10 overflow-hidden shadow-lg rounded-lg'>
                <a href="https://www.linkedin.com/in/putu-bagus-raditya">
                  <img className='w-full h-full object-cover' src="https://www.bettereurope.eu/wp-content/uploads/2021/06/logo-LinkedIn.png" alt="LinkedIn" />
                </a>
              </div>
              <div className='w-10 h-10 overflow-hidden shadow-lg rounded-lg'>
                <a href="https://github.com/putubagus13/">
                  <img className='w-full h-full object-cover' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className='p-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-500/5 w-full text-white flex flex-col gap-2 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl'>
              <h1 className='text-white font-bold text-4xl'>Putu Bagus Raditya</h1>
              <h1 className='text-white font-semibold text-xl'>Web and Mobile Developer</h1>
              <hr />
              <p className='w-full md:w-[60%] lg:w-[70%] text-justify'>I am a Fullstack Web Developer and prioritize ongoing learning, especially in the field of technology and 
              programming languages. My proficiency lies in a range of JavaScript frameworks and libraries, such as React JS, Next 
              JS, React Native, Redux, and ExpressJS. Furthermore, I have practical involvement in database management 
              through PostgreSQL.</p>
            </div>
          </div>
          <div className='absolute z-10 md:z-20 right-[-50px] sm:right-0 bottom-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden'>
            <img src={Profile} alt="profile" className='h-full w-full object-cover drop-shadow-xl'/>
          </div>
        </div>
      </div>
      <div className="snap-start w-full h-screen flex justify-center items-center shadow-2xl bg-gradient-to-tr from-[#053B50] via-[#176B87] to-[#64CCC5] duration-200">
        <div className='flex flex-col lg:flex-row rounded-xl shadow-lg p-[5%]'>
          <div className='flex z-10 flex-col items-start justify-around gap-14'>
            <label className='text-secondary font-bold'>
              <span className='text-6xl drop-shadow-lg'><BiSolidBookOpen size={70}/>EDUCATION</span>
            </label>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-3'>
                <label className='text-2xl drop-shadow-lg font-semibold text-secondary'>
                  <span className='text-4xl'>Fazztrack </span> 
                    (March 2023 - July 2023)
                </label>
                <p className='text-white text-xl text-semibold w-[70%]'>Participate in the fullstack web and mobile developer bootcamp 
                program starting March 2023 until graduating in July 2023.</p>
              </div>
              <div className='flex flex-col gap-3'>
                <p className='text-white text-2xl font-semibold'>SKILL:</p>
                <div className='grid grid-cols-3 lg:grid-cols-6'>
                  {Skill.skill.map(items => (
                    <div key={`skil-${items.id}`} className='flex transition ease-in-out 
                        delay-150 hover:-translate-y-1 hover:scale-110 duration-300 py-4'>
                      <div className='w-[80px] h-[80px] overflow-hidden rounded-xl shadow-lg'>
                        <img src={items.image} alt={items.name} className='w-full h-full object-cover' />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='hidden md:flex flex-col gap-3'>
              <label className='text-2xl drop-shadow-lg font-semibold text-secondary'>
                <span className='text-4xl'>Lampung University </span> 
                    (2018 - 2023)
              </label>
              <p className='text-white text-xl text-semibold w-[70%]'>
                Graduated from the instrumentation physics department at the University of Lampung.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="snap-start w-full h-screen flex justify-center items-center shadow-2xl bg-gradient-to-br from-[#053B50] via-[#176B87] to-pink-500">
        <div className='flex flex-col lg:flex-row rounded-xl shadow-lg p-[5%]'>
          <div className='flex z-10 flex-col items-start justify-around gap-14'>
            <label className='text-secondary font-bold'>
              <span className='text-6xl drop-shadow-lg'><BsFillFileEarmarkCodeFill size={70}/>MY PROJECT</span>
            </label>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16'>
              <div className='flex flex-col gap-3 w-96'>
                <label className='text-2xl drop-shadow-lg font-semibold text-secondary'>
                  <span className='text-4xl'>Click Media News</span> 
                </label>
                <p className='text-white text-xl text-semibold'>Click Media News is an web application that contains updated news.</p>
                <div className="flex w-full snap-x snap-mandatory overflow-x-scroll scrollbar-hide py-3">
                  <div className='snap-always snap-center px-3'>
                    <div className="h-[200px] w-[370px] overflow-hidden shadow-xl">
                      <img src={Click1} className="w-full rounded-lg h-full object-cover" alt="" />
                    </div>
                  </div>
                  <div className='snap-always snap-center px-3'>
                    <div className="h-[200px] w-[370px] overflow-hidden shadow-xl">
                      <img src={Click2} className="w-full rounded-lg h-full object-cover" alt="" />
                    </div>
                  </div>
                  <div className='snap-always snap-center px-3'>
                    <div className="h-[200px] w-[370px] overflow-hidden shadow-xl">
                      <img src={Click3} className="w-full rounded-lg h-full object-cover" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='hidden md:flex flex-col gap-3 w-96'>
                <label className='text-2xl drop-shadow-lg font-semibold text-secondary'>
                  <span className='text-4xl'>TIX Event</span> 
                </label>
                <p className='text-white text-xl text-semibold text-justify'>This website is used to make purchases and create an event.</p>
                <div className="flex w-full snap-x snap-mandatory overflow-x-scroll scrollbar-hide py-3">
                  <div className='snap-always snap-center px-3'>
                    <div className="h-[200px] w-[370px] overflow-hidden shadow-xl">
                      <img src={Tix1} className="w-full rounded-lg h-full object-cover" alt="" />
                    </div>
                  </div>
                  <div className='snap-always snap-center px-3'>
                    <div className="h-[200px] w-[370px] overflow-hidden shadow-xl">
                      <img src={Tix2} className="w-full rounded-lg h-full object-cover" alt="" />
                    </div>
                  </div>
                  <div className='snap-always snap-center px-3'>
                    <div className="h-[200px] w-[370px] overflow-hidden shadow-xl">
                      <img src={Tix3} className="w-full rounded-lg h-full object-cover" alt="" />
                    </div>
                  </div>
                  <div className='snap-always snap-center px-3'>
                    <div className="h-[200px] w-[370px] overflow-hidden shadow-xl">
                      <img src={Tix4} className="w-full rounded-lg h-full object-cover" alt="" />
                    </div>
                  </div>
                  <div className='snap-always snap-center px-3'>
                    <div className="h-[200px] w-[370px] overflow-hidden shadow-xl">
                      <img src={Tix5} className="w-full rounded-lg h-full object-cover" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='hidden md:flex flex-col gap-3 w-96'>
                <label className='text-2xl drop-shadow-lg font-semibold text-secondary'>
                  <span className='text-4xl'>Muglife</span> 
                </label>
                <p className='text-white text-xl text-semibold'>Muglife is an ecommerce website that offers a wide selection of drinks and food.</p>
                <div className="flex w-full snap-x snap-mandatory overflow-x-scroll scrollbar-hide py-3">
                  <div className='snap-always snap-center px-3'>
                    <div className="h-[200px] w-[370px] overflow-hidden shadow-xl">
                      <img src={Coffee1} className="w-full rounded-lg h-full object-cover" alt="" />
                    </div>
                  </div>
                  <div className='snap-always snap-center px-3'>
                    <div className="h-[200px] w-[370px] overflow-hidden shadow-xl">
                      <img src={Coffee2} className="w-full rounded-lg h-full object-cover" alt="" />
                    </div>
                  </div>
                  <div className='snap-always snap-center px-3'>
                    <div className="h-[200px] w-[370px] overflow-hidden shadow-xl">
                      <img src={Coffee3} className="w-full rounded-lg h-full object-cover" alt="" />
                    </div>
                  </div>
                  <div className='snap-always snap-center px-3'>
                    <div className="h-[200px] w-[370px] overflow-hidden shadow-xl">
                      <img src={Coffee4} className="w-full rounded-lg h-full object-cover" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <label className='text-white text-xl text-semibold'>See more projects <a href="https://github.com/putubagus13" className='text-bold text-yellow-500 hover:text-yellow-400'>here</a></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;