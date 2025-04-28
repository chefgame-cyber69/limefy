import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { 
  MonitorSmartphone,
  Video,
  Image as ImageIcon,
  Share2,
  Megaphone,
  CheckCircle 
} from 'lucide-react';

const HomePage: React.FC = () => {
  const services = [
    {
      id: 'website',
      icon: <MonitorSmartphone size={40} className="text-lime-500 group-hover:text-white transition-colors duration-300" />,
      title: 'Website Development',
      description: 'Custom websites tailored to your business needs with responsive designs that look great on all devices.'
    },
    {
      id: 'video',
      icon: <Video size={40} className="text-lime-500 group-hover:text-white transition-colors duration-300" />,
      title: 'Video Editing',
      description: 'Professional editing for both long-form content and short promotional videos to engage your audience.'
    },
    {
      id: 'photo',
      icon: <ImageIcon size={40} className="text-lime-500 group-hover:text-white transition-colors duration-300" />,
      title: 'Photo Editing',
      description: 'Transform your images with color correction, retouching, and creative enhancements that stand out.'
    },
    {
      id: 'social',
      icon: <Share2 size={40} className="text-lime-500 group-hover:text-white transition-colors duration-300" />,
      title: 'Social Media Marketing',
      description: 'Grow your brand with strategic content creation and account management across all platforms.'
    },
    {
      id: 'advertising',
      icon: <Megaphone size={40} className="text-lime-500 group-hover:text-white transition-colors duration-300" />,
      title: 'Advertising',
      description: 'Reach your target audience through effective advertising campaigns in both digital and physical spaces.'
    }
  ];

  const benefits = [
    'Professional services at competitive prices',
    'Quick turnaround times for all projects',
    'Dedicated support throughout the process',
    'Custom solutions tailored to your needs',
    'Ongoing maintenance and updates',
    'Transparent pricing with no hidden costs'
  ];

  return (
    <div>
      <Hero />
      
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to enhance your online presence and grow your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <Link 
                key={service.id}
                to={`/services#${service.id}`}
                className="group bg-white border border-gray-200 hover:bg-blue-800 hover:border-blue-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 text-gray-800 hover:text-white"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-block bg-lime-500 hover:bg-lime-600 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Choose Limefy?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We're committed to delivering high-quality digital services that help your business thrive in the competitive online landscape.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={24} className="text-lime-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <Link 
                  to="/contact" 
                  className="inline-block bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300 mr-4"
                >
                  Get in Touch
                </Link>
                <Link 
                  to="/services" 
                  className="inline-block bg-transparent border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white py-3 px-6 rounded-md font-medium transition-colors duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working together" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's work together to create stunning websites, engaging videos, and effective marketing strategies that drive results.
          </p>
          <Link 
            to="/services" 
            className="inline-block bg-lime-500 hover:bg-lime-600 text-white py-3 px-8 rounded-md font-medium transition-colors duration-300 text-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;