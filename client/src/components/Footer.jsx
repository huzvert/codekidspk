import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faEnvelope,
  faHome,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-black text-white space-y-10 sm:grid grid-cols-2 place-items-start gap-x-40">
      <div className="grid gap-y-5">
        <img src={logo} alt="logo" />
        <p className="max-w-prose">
          Robotics and coding classes and holiday tech camps for kids aged 7+ We
          provide code clubs and in-school enrichment workshops.
        </p>
        <Link to="/about">
          <Button className="default-button">Learn More</Button>
        </Link>
      </div>

      <div className="space-y-3">
        <div className="flex gap-3">
          <FontAwesomeIcon icon={faHome} />
          <ul className="space-y-1">
            <li className="uppercase font-bold">Locations</li>
            <li>Blackheath</li>
            <li>Greenwich</li>
            <li>Hampstead</li>
            <li>Sevenoaks</li>
            <li>Wimbledon</li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faPhone} />
          <p>0800-010-6912</p>
        </div>

        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:info@codekids.org.uk" className="hover:underline">
            info@codekids.org.uk
          </a>
        </div>

        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faClock} />
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        </div>

        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faClock} />
          <p>Saturday - Sunday: 9:00 AM - 12:00 PM</p>
        </div>
      </div>
    </footer>
  );
}
