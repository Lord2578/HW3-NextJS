'use client';

import React, { useState, useEffect } from 'react';
import Checkbox from './components/checkBox';
import InputField from './components/inputField';
import RadioGroup from './components/radioGroup';
import TextArea from './components/textArea';
import './globals.css';

const Page = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !queryType || !message || !consent) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSuccessMessage(true);
    resetForm();
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setQueryType("");
    setMessage("");
    setConsent(false);
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <main className="form-container">
      <h2>Contact Us</h2>
      {successMessage && <section className="alert">Form submitted successfully!</section>}
      <form onSubmit={handleSubmit}>
        <div className='name-container'>
            <InputField label="First Name *" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <InputField label="Last Name *" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>

        <InputField label="Email Address *" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        <RadioGroup
          legend="Query Type *"
          options={[
            { label: "General Enquiry", value: "general" },
            { label: "Support Request", value: "support" },
          ]}
          value={queryType}
          onChange={setQueryType}
        />
        <TextArea label="Message *" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <Checkbox label="I consent to being contacted by the team *" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Page;
