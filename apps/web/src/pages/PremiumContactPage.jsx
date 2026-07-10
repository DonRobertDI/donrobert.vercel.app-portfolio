import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm.jsx';
import SocialLinks from '@/components/SocialLinks.jsx';
import PageHero from '@/components/PageHero.jsx';

const opportunities = ['Junior Web Development', 'Full-Stack Development', 'Software Engineering', 'Technical Support and Automation', 'AI-Assisted Development'];

function PremiumContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Don Robert Dimasayao</title>
        <meta name="description" content="Contact Don Robert Dimasayao for junior web development, full-stack development, technical support, automation, and AI-assisted development opportunities." />
      </Helmet>
      <PageHero index="04" eyebrow="CONTACT" title="Let’s start a" accent="conversation." description="I'm open to junior developer opportunities, technical collaborations, and roles where I can contribute, learn from experienced professionals, and continue building practical software." />

      <section className="section-pad page-content contact-section">
        <div className="section-shell contact-layout">
          <motion.div className="contact-details" initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
            <p className="eyebrow">DIRECT CONTACT</p>
            <h2>Have something in mind?</h2>
            <p className="contact-details__copy">Send a message through the form, or reach me directly through any of the channels below.</p>

            <div className="contact-methods">
              <a href="mailto:dimasayaodonrobert@gmail.com"><Mail aria-hidden="true" /><span><small>Email</small>dimasayaodonrobert@gmail.com</span></a>
              <a href="tel:+639916029396"><Phone aria-hidden="true" /><span><small>Phone</small>+63 991 602 9396</span></a>
              <div><MapPin aria-hidden="true" /><span><small>Location</small>Philippines</span></div>
            </div>

            <div className="contact-social"><p>Connect with me</p><SocialLinks /></div>

            <div className="opportunities">
              <p className="eyebrow">LOOKING FOR OPPORTUNITIES IN</p>
              <ul>{opportunities.map((item) => <li key={item}><span aria-hidden="true">+</span>{item}</li>)}</ul>
            </div>
          </motion.div>

          <motion.div className="contact-form-panel" initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.08 }}>
            <div className="contact-form-panel__top"><span>MESSAGE FORM</span><span>04 / 04</span></div>
            <h2>Send a message<span className="text-primary">.</span></h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default PremiumContactPage;
