import AboutContents from "@/components/AboutContents";
import React from "react";

import styles from "./style.module.css";
import {Headland_One} from 'next/font/google'

const headland = Headland_One({weight:["400"], subsets:["latin"]});

// const getTime = async() =>{
//   const res = await fetch('http://localhost:3000/time', {next: {revalidate: 5}});
//   const data = await res.json();
//   return data.currentTime;
// }

export const metadata = {
  title: 'About',
  description: "About page",
  keywords: ['about', 'about page']
};

const AboutPage = async() => {
  // console.log(name);  //to check if error.jsx page works
  const time = await getTime();
  return (
    <div className={`${styles.about_color} ${headland.className} min-h-screen px-12 py-24`}>
      <h6 >Welcome to ABOUT PAGE !!!</h6>
      <AboutContents></AboutContents>
      {/* <h3 className="text-3xl text-green-500 mt-12">Time: {time}</h3> */}
    </div>
  );
};

export default AboutPage;
