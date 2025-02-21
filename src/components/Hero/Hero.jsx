import React from "react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import BgImage from "../../assets/bg-slate.png";
import SauceHero from "../../assets/gordomikebottle.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";



const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar,setSidebar] = React.useState(false);
  return (
    <main style={bgImage}>
      <section className="relative min-h-screen w-full">
        <div className="container ">
          {/* Navbar section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-screen text-center">
            {/*text content section*/}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              {/*
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="mt-8 md:mt-16 flex items-center justify-center "
              >
                <img src={logo} alt="" className="rounded-full h-64"/>
              </motion.h1>
              */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-3xl font-bold">Gordo Mikes BBQ Sauce</h1>
                  <h1 className="text-lg leading-loose">
                    Just the Right Amount of Heat and Sweet !
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[550px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>

            {/*Hero image section*/}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={SauceHero}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />

              {/*Orange circle section*/}

              <motion.div className="h-[180px] w-[180px] absolute top-24 -right-16 border-primaryDark border-[20px] rounded-full z-10"></motion.div>

              {/*Big Text section*/}

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute top-1 left-[300px] z-[1]"
              >
                <h1 className="hidden text-[120px] scale-100 font-bold text-darkGray/60 leading-none">
                  Gordo Mikes
                </h1>
              </motion.div>
            </div>

            {/*third div section*/}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-lightOrange mt-[10px] md:mt-0 p-0 space-y-28"
            >
              
              <div className="relative">
                <div className="relative z-10 space-y-4 mt-20 mb-10  ">
                  <h1 className="text-3xl  font-bold ">The Sauce is The Boss</h1>
                  <h1 className="text-sm  leading-loose">
                  Tomato Sauce-Brown Sugar-Vinegar-Guava-Water-Worcestershire Sauce-Olive Oil-Ketchup-Salt-Pepper-Garlic-Mustard Powder-Onion Powder-Cayenne Pepper
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[550px] h-[220px] bg-darkGray/40"></div>
              </div>
            </motion.div>
            <div></div>
          </div>
        </div>

        {/*sidebar menu section*/}

        {
        
        sidebar &&  (

          <motion.div 
          initial={{x:"100%"}}
          whileInView={{x:0}}

          className="absolute top-0 right-0 w-[100px] h-screen bg-gradient-to-b from-primary/80 to-primaryDark/80  backdrop-blur-sm z-10">
          <div className="w-full h-full flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center gap-6 text-white">
              {/*line*/}
              <div className="w-[1px] h-[70px] bg-white"></div>
              {/*social icons*/}
              <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                <a href="https://www.facebook.com/groups/414186977978889">
                <FaFacebook className="text-2xl" />
                </a>
              </div>
              {/*<div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                <FaTwitter className="2xl"/>
              </div>*/}
              <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                <a href="https://www.instagram.com/gordomikesbbq/">
                <FaInstagram  className="2xl"/>
                </a>
              </div>
              <div className="w-[1px] h-[70px] bg-white"></div>
            </div>
          </div>
        </motion.div>
        )
        
        }
          
        

        
      </section>
    </main>
  );
};

export default Hero;
