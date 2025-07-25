import React from "react";
import logo from "/assets/logo1.png";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="px-4 md:px-8 space-y-10 sm:grid grid-cols-2 place-items-start lg:place-items-center gap-x-40 2xl:max-w-[1440px] 2xl:mx-auto">
        <div className="grid gap-y-5">
          <img src={logo} alt="logo" />
          <p className="max-w-prose">
            Offering both in-person and online coding classes for students aged
            7 and above, along with in-school enrichment workshops.
          </p>
          <a href="https://www.instagram.com/codekidspk/" target="_blank">
            <Button className="default-button">Learn More</Button>
          </a>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} />
            <p>+92 300 868 1023</p>
          </div>

          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faWhatsapp} />
            <p>
              <a
                href="https://api.whatsapp.com/send?phone=923008681023"
                target="_blank"
              >
                +92 300 868 1023
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faEnvelope} />
            <a
              href="mailto:codekidspakistan@gmail.com"
              target="_blank"
              className="hover:underline"
            >
              codekidspakistan@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faLinkedin} />
            <p>
              <a
                href="https://www.linkedin.com/company/codekidspk/?originalSubdomain=pk"
                target="_blank"
              >
                Code Kids PK
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faInstagram} />
            <p>
              <a href="https://www.instagram.com/codekidspk/" target="_blank">
                codekidspk
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faFacebook} />
            <p>
              <a href="https://www.facebook.com/codekidspk/" target="_blank">
                Code Kids PK
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
