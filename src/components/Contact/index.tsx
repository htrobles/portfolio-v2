import React from 'react';
import SectionHead from '../SectionHead';
import Button from '../Button';
import FormInput from '../FormInput';

export default function Contact() {
  return (
    <section id="contacy" className="py-24 bg-secondary bg-opacity-90">
      <div className="container mx-auto max-w-screen-lg px-8">
        <SectionHead>LET'S CONNECT</SectionHead>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-8">
            <p>
              Email:{' '}
              <a href="mailto:hjt.robles@gmail.com" className="font-bold">
                hjt.robles@gmail.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+12265044615" className="font-bold">
                +1 226 504 4615
              </a>
            </p>
            <Button type="outline" color="white">
              Download My Resume
            </Button>
          </div>
          <div className="space-y-8">
            <h3 className="text-lg">Send me a message</h3>
            <form action="" className="space-y-6">
              <FormInput
                name="name"
                label="Name"
                placeholder="John Doe"
                required
              />
              <FormInput
                name="email"
                label="Email"
                type="email"
                placeholder="jdoe@email.com"
                required
              />
              <FormInput
                name="message"
                label="Message"
                placeholder="Hi Hector, you seem to be an awesome developer. I want to collaborate with you. Are you available?"
                required
                textarea
              />
              <Button isSubmit type="outline" color="white">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
