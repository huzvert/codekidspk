import React from 'react';
import { Button } from '@/components/ui/button';

function MailList() {
  return (
    <>
      <h3 className="font-heading mb-3">
        Join Our Mailing List for Course Updates
      </h3>
      <form className="flex flex-col text-white">
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="border-2 bg-transparent border-c_accent focus:outline-none p-2"
        />
        <Button className="default-button">Subscribe</Button>
      </form>
    </>
  );
}

export default MailList;
