import React from 'react';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <PageHeader
        title="Contact Us"
        description="Get in touch with us to create your perfect event."
      />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-pink-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">+61 2 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-pink-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">info@prestigeglow.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-pink-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">123 Event Street<br />Sydney, NSW 2000</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                placeholder="Tell us about your event..."
              ></textarea>
            </div>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}