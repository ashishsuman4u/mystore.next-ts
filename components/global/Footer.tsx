import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import faviconImg from '@/public/favicon-32x32.png';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="text-white bg-black body-font">
      <div className="px-5 py-8 mx-auto">
        <div className="flex sm:flex-row flex-col items-center justify-between gap-4">
          <span className="flex sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <Image src={faviconImg} alt="My Store" />
              <span className="ml-3 text-xl">My Store</span>
            </a>
            <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-2">
              &copy; {new Date().getFullYear()} My Store Pvt Ltd
            </p>
          </span>
          <span className="flex">
            <a className="ml-3 text-white" href="/support">
              Support
            </a>
            <a className="ml-3 text-white" href="/privacy">
              Privacy
            </a>
            <a className="ml-3 text-white" href="/terms">
              Terms
            </a>
          </span>
          <span className="flex">
            <a className="text-white">
              <FaFacebook />
            </a>
            <a className="ml-3 text-white">
              <FaTwitter />
            </a>
            <a className="ml-3 text-white">
              <FaInstagram />
            </a>
            <a className="ml-3 text-white">
              <FaLinkedin />
            </a>
          </span>
        </div>
      </div>
      <p className="text-center pb-4">
        Designed & Developed by{' '}
        <a rel="noreferrer" href="https://www.ashishsuman.co" target="_blank">
          Ashish Suman
        </a>
      </p>
    </footer>
  );
}

export default Footer;