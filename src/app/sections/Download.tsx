"use client"

// import Link from 'next/link';
import Image from 'next/image'; 
import { motion } from 'framer-motion';
import appStore from "/public/images/appstore.png";
import playStore from "/public/images/googlestore.png";
import phoneMockup from "/public/images/mockupphone.png";

const Download = () => {
  return (
    <motion.section 
    id="download"
      className="bg-s1 py-16 relative z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left p-8 bg-black/50 rounded-lg shadow-md gap-12 backdrop-blur-lg border-[3px] opacity-90">
        {/* store buttons and description*/}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-white mb-6">Get Catch My Tune</h2>
          <p className="text-gray-200 mb-8">
            Download Catch My Tune on your mobile device and start analyzing your music effortlessly!
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <Image src={appStore} alt="Download on the App Store" className="h-20" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <Image src={playStore} alt="Get it on Google Play" className="h-40"  />
            </a>
          </div>
        </div>

        {/* Telefon Mockup with effects */}
        <motion.div
   className="flex-1 flex justify-center lg:justify-end"
   initial={{ scale: 0.95, opacity: 0.8, rotate: -5 }} 
   animate={{ scale: 1.2, opacity: 1, rotate: 0 }} 
   transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} 
   whileHover={{ scale: 1.02, rotate: 1 }} // small movement
>
  <Image
    src={phoneMockup}
    alt="Catch My Tune mobile app preview"
    width={400}
    height={400}
    className="shadow-xl rounded-lg"
  />
</motion.div>
      </div>
    </motion.section>
  );
};

export default Download;
