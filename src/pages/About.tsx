import React from 'react';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { Users, Award, Clock, Heart } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our dedicated team brings years of event experience to make your vision come to life.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We offer only the highest quality LED furniture, ensuring reliability and stunning aesthetics.',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your event runs smoothly from setup to pack down.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond to exceed expectations.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <PageHeader
        title="About Us"
        description="Creating unforgettable experiences through innovative LED furniture hire solutions."
      />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Founded in Sydney, Prestige Glow has been transforming events with our cutting-edge LED furniture since 2015. What started as a small collection has grown into Sydney's premier LED furniture hire service.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We believe that lighting and furniture can make or break an event's atmosphere. That's why we've curated a collection of the most stylish and innovative LED furniture pieces, perfect for any occasion.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80"
              alt="Event Setup"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all group">
              <feature.icon className="w-8 h-8 text-pink-500 mb-4 group-hover:text-pink-400 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}