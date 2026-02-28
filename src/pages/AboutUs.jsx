import React from "react";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Car, ShieldCheck, Headphones, MapPin } from 'lucide-react';
import { NavLink } from "react-router-dom";

const AboutUs = () => {

  const features = [
    {
      icon: <Car className="w-8 h-8 text-footer" />,
      title: 'Premium Fleet',
      description: 'From compact city cars to spacious SUVs, our diverse fleet is meticulously maintained for your comfort and safety.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-footer" />,
      title: 'Fully Insured',
      description: 'Drive with absolute peace of mind knowing every rental comes with comprehensive insurance coverage.'
    },
    {
      icon: <Headphones className="w-8 h-8 text-footer" />,
      title: '24/7 Support',
      description: 'Our dedicated customer service team is always on standby to assist you, no matter the time or place.'
    },
    {
      icon: <MapPin className="w-8 h-8 text-footer" />,
      title: 'Convenient Locations',
      description: 'Easily pick up and drop off your vehicle at multiple accessible touchpoints across the city.'
    }
  ];

  return (
    <div className="bg-[#d6d6d6]">
        <div className="bg-gray-50 min-h-screen font-sans">
        <section className="relative bg-blue-900 text-white py-24">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              About Let's Drive
            </h1>
            <p className="text-xl md:text-2xl font-light text-blue-100 max-w-3xl mx-auto">
              Redefining mobility. We believe the journey should be just as remarkable as the destination.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Founded with a passion for seamless mobility, Let's Drive was created to eliminate the friction from traditional car rentals. Whether you are navigating the dynamic roads of Singapore for business or embarking on a long weekend getaway, we provide the reliable wheels you need.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are more than just a car rental platform; we are your travel partner. By blending intuitive technology with a customer-first approach, we ensure that getting on the road is the easiest part of your day.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop" 
                  alt="Driving on a scenic road" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Travel With Us?</h2>
              <div className="w-24 h-1 bg-footer mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to hit the road?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Browse our fleet and find the perfect vehicle for your next adventure in minutes.
            </p>
            <NavLink to="/cars" className="bg-footer text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              Explore Our Fleet
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUs