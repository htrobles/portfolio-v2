import React, { useRef, useState } from 'react';
import SectionHead from '../SectionHead';
import Button from '../Button';
import FormInput from '../FormInput';
import emailjs from '@emailjs/browser';
import ContactResultModal from '../ContactResultModal';

export type ContactSendResult = {
  status: 'success' | 'fail';
  message: string;
};

type Form = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [contactSendResult, setContactSendResult] =
    useState<ContactSendResult>();

  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    message: '',
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleUpdateName = (value: string) => {
    setForm({
      ...form,
      name: value,
    });
  };

  const handleUpdateEmail = (value: string) => {
    setForm({
      ...form,
      email: value,
    });
  };

  const handleUpdateMessage = (value: string) => {
    setForm({
      ...form,
      message: value,
    });
  };

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = form;

    if (!name || !email || !message) {
      return setContactSendResult({
        status: 'fail',
        message: 'Please fill out the required fields on the form.',
      });
    }

    if (!formRef.current) return;

    emailjs
      .sendForm('portfolio-messages', 'message-notification', formRef.current, {
        publicKey: 'e21s1nT3jPK810dv1',
      })
      .then(
        () => {
          setContactSendResult({
            status: 'success',
            message:
              'Thank you for connecting with me. I will reply to your message as soon as I read it.',
          });
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setContactSendResult({
            status: 'fail',
            message:
              "I'm Sorry. There has been a problem sendding your message. You can still reach me via email at: hjt.robles@gmail.com.",
          });
        }
      );
  };

  const isSubmitDisabled = !form.name || !form.email || !form.message;

  return (
    <section id='contact' className='py-24 bg-secondary-500 bg-opacity-90'>
      <div className='container mx-auto max-w-screen-lg px-8'>
        <SectionHead>LET'S CONNECT</SectionHead>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-24'>
          <div className='space-y-8'>
            <p>
              Email:{' '}
              <a href='mailto:hjt.robles@gmail.com' className='font-bold'>
                hjt.robles@gmail.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href='tel:+12265044615' className='font-bold'>
                +1 226 504 4615
              </a>
            </p>
            <a
              href='.\Hector Robles Resume.pdf'
              download='Hector_Robles_Resume'
              className='inline-block'
            >
              <Button type='outline' color='white'>
                Download My Resume
              </Button>
            </a>
          </div>
          <div className='space-y-8'>
            <h3 className='text-lg'>Send me a message</h3>
            <form
              ref={formRef}
              className='space-y-6'
              onSubmit={handleSendEmail}
            >
              <FormInput
                name='name'
                label='Name'
                placeholder='John Doe'
                onChange={handleUpdateName}
                value={form.name}
                required
              />
              <FormInput
                name='email'
                label='Email'
                type='email'
                placeholder='jdoe@email.com'
                onChange={handleUpdateEmail}
                value={form.email}
                required
              />
              <FormInput
                name='message'
                label='Message'
                placeholder='Hi Hector, you seem to be an awesome developer. I want to collaborate with you. Are you available?'
                onChange={handleUpdateMessage}
                value={form.message}
                required
                textarea
              />
              <Button
                isSubmit
                type='block'
                color='primary'
                disabled={isSubmitDisabled}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      <ContactResultModal
        result={contactSendResult}
        onDismiss={() => setContactSendResult(undefined)}
      />
    </section>
  );
}
