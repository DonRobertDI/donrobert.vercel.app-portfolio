import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm.jsx';
import SocialLinks from '@/components/SocialLinks.jsx';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact - Don Robert Dimasayao</title>
        <meta name="description" content="Get in touch with Don Robert Dimasayao for opportunities in Data Science, Prompt Engineering, and Full-Stack Development." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a
                        href="mailto:dimasayaodonrobert@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-all duration-200"
                      >
                        dimasayaodonrobert@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a
                        href="tel:+639916029396"
                        className="text-muted-foreground hover:text-primary transition-all duration-200"
                      >
                        +63 991 602 9396
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Connect with Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 opacity-90">
                    Follow me on social media or connect with me on professional networks
                  </p>
                  <SocialLinks className="justify-start" />
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Looking for opportunities in</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Data Science</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Prompt Engineering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Full-Stack Development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>AI & Machine Learning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;