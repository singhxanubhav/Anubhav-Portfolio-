"use client"

import { motion } from "framer-motion";
import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";

const Footer = () => {
  return (
    <div className="mt-auto py-10">
      <p className="text-center text-sm md:text-base">Designed and Developed by Anubhav Singh</p>
      <div className="flex justify-center items-center flex-wrap gap-8 mt-4">
        <motion.a
          href="https://github.com/singhxanubhav"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <GithubIcon className="w-6" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/anubhav-singh-5b26711a5/"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <LinkedInIcon className="w-6" />
        </motion.a>
        <motion.a
          href="https://x.com/anubhavxsingh_"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <TwitterIcon className="w-6" />
        </motion.a>
        <motion.a
          href=""
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <InstagramIcon className="w-8" />
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;
