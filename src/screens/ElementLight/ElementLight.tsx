import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FeaturesListSection } from "./sections/FeaturesListSection/FeaturesListSection";
import { GallerySection } from "./sections/GallerySection/GallerySection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainHeadingSection } from "./sections/MainHeadingSection/MainHeadingSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { headerLogo, footerLogo } from "../../assets/images/logos";
import { clientLogos } from "../../assets/images/clientLogos";
import { servicesImages } from "../../assets/images/servicesImages";
import emailjs from '@emailjs/browser';

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasIntersected) {
        setIsIntersecting(true);
        setHasIntersected(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasIntersected, options]);

  return [ref, isIntersecting];
};

// Debug: Log the logo paths
console.log('Header Logo:', headerLogo);
console.log('Footer Logo:', footerLogo);

const contactFormFields = [
  {
    id: "firstName",
    label: "First name",
    required: true,
    type: "input",
  },
  {
    id: "lastName",
    label: "Last name",
    required: true,
    type: "input",
  },
  {
    id: "email",
    label: "Email",
    required: true,
    type: "input",
  },
  {
    id: "phone",
    label: "Phone",
    required: true,
    type: "input",
  },
  {
    id: "message",
    label: "Message",
    required: true,
    type: "textarea",
  },
];

const specializations = [
  "Building & Renovations",
  "Tiling & Flooring",
  "Plumbing",
  "Roofing",
  "Leak Detection & Waterproofing",
  "Ceilings, Cornicing & Skirting",
  "Underpinning",
  "Concrete Stitching",
  "Structural Wall Repairs",
  "Demolitions & Rubble Removal",
];



const footerNavItems = [
  "Services",
  "About",
  "Reviews",
  "Clients",
  "FAQ",
  "Projects",
];

const contactInfo = [
  {
    icon: "https://c.animaapp.com/megx9igh612D8f/img/frame-3.svg",
    text: "082 959 1599",
  },
  {
    icon: "https://c.animaapp.com/megx9igh612D8f/img/frame-5.svg",
    text: "antsatwork2005@gmail.com",
  },
  {
    icon: "https://c.animaapp.com/megx9igh612D8f/img/frame.svg",
    text: "Randburg, Gauteng, South Africa",
  },
];

export const ElementLight = (): JSX.Element => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Intersection observers for animations
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [servicesRef, servicesVisible] = useIntersectionObserver();
  const [aboutRef, aboutVisible] = useIntersectionObserver();
  const [galleryRef, galleryVisible] = useIntersectionObserver();
  const [clientsRef, clientsVisible] = useIntersectionObserver();
  const [blogRef, blogVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Validate form data
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Prepare email content
      const emailContent = `
New Website Enquiry from Ants At Work

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

---
This enquiry was submitted from the Ants At Work website contact form.
      `;

      // Send email using EmailJS
      const templateParams = {
        to_email: 'nikolaos@oaksdigital.co.za, antsatwork2005@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        subject: 'Ants At Work: New Website Enquiry'
      };

      const response = await emailjs.send(
        'service_5qmsmj9', // EmailJS service ID
        'template_58cxmxc', // EmailJS template ID
        templateParams,
        'DQKlGEfk-oXG0Au6J' // EmailJS public key
      );

      if (response.status !== 200) {
        throw new Error('Failed to send email. Please try again.');
      }

      // Success
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">

      {/* Header Section */}
      <header className={`fixed top-0 left-0 right-0 z-[99999] py-1 sm:py-1 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between">
            <div 
              className="w-[80px] sm:w-[100px] lg:w-[120px] h-[70px] sm:h-[88px] lg:h-[106px] bg-cover bg-center cursor-pointer" 
              style={{ backgroundImage: `url(${headerLogo})` }}
              onClick={() => window.location.href = '/'}
            />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
              <nav className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
                <a href="#services" className="text-[#030303] hover:text-gray-600 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>Services</a>
                <a href="#about" className="text-[#030303] hover:text-gray-600 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About</a>
                <a href="#clients" className="text-[#030303] hover:text-gray-600 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' }); }}>Clients</a>
                <a href="#gallery" className="text-[#030303] hover:text-gray-600 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }}>Work</a>
                <a href="/blog" className="text-[#030303] hover:text-gray-600 transition-colors">Blog</a>
              </nav>
              <Button
                className="bg-[#ffde17] text-black hover:bg-[#ffde17]/90 rounded-[10px] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base"
                onClick={() => {
                  document.getElementById('lets-build-together')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="mr-1 sm:mr-2">Contact Us</span>
                <img
                  className="w-4 h-4 sm:w-6 sm:h-6"
                  alt="Arrow"
                  src="https://c.animaapp.com/megx9igh612D8f/img/svg.svg"
                />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              
              {/* Hamburger Menu Button */}
              <button
                className="text-black transition-colors p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Mobile Menu - Moved outside header to ensure consistent background */}
      <div className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-md transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 z-[99999]' : 'opacity-0 pointer-events-none'}`}>

        {/* Mobile Menu Header with Logo and Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div 
            className="w-[80px] h-[70px] bg-cover bg-center cursor-pointer" 
            style={{ backgroundImage: `url(${headerLogo})` }}
            onClick={() => window.location.href = '/'}
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-black text-2xl font-bold hover:text-gray-600 transition-colors p-2"
          >
            ×
          </button>
        </div>

        <nav className="pt-8 px-8 space-y-6">
          <a 
            href="#services" 
            className="block text-[#030303] hover:text-gray-600 transition-colors cursor-pointer text-lg font-medium" 
            onClick={(e) => { 
              e.preventDefault(); 
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); 
              setIsMobileMenuOpen(false);
            }}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="block text-[#030303] hover:text-gray-600 transition-colors cursor-pointer text-lg font-medium" 
            onClick={(e) => { 
              e.preventDefault(); 
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); 
              setIsMobileMenuOpen(false);
            }}
          >
            About
          </a>
          <a 
            href="#clients" 
            className="block text-[#030303] hover:text-gray-600 transition-colors cursor-pointer text-lg font-medium" 
            onClick={(e) => { 
              e.preventDefault(); 
              document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' }); 
              setIsMobileMenuOpen(false);
            }}
          >
            Clients
          </a>
          <a 
            href="#gallery" 
            className="block text-[#030303] hover:text-gray-600 transition-colors cursor-pointer text-lg font-medium" 
            onClick={(e) => { 
              e.preventDefault(); 
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); 
              setIsMobileMenuOpen(false);
            }}
          >
            Work
          </a>
          <a 
            href="/blog" 
            className="block text-[#030303] hover:text-gray-600 transition-colors text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </a>
          
          {/* Contact Button in Mobile Menu */}
          <div className="pt-4">
            <Button
              className="w-full bg-[#ffde17] text-black hover:bg-[#ffde17]/90 rounded-[10px] px-4 py-3 text-base font-medium"
              onClick={() => {
                document.getElementById('lets-build-together')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              <span className="mr-2">Contact Us</span>
              <img
                className="w-5 h-5"
                alt="Arrow"
                src="https://c.animaapp.com/megx9igh612D8f/img/svg.svg"
              />
            </Button>
          </div>
        </nav>
      </div>

      {/* Hero Section with Background */}
      <section className="relative bg-[#f3fff6] h-screen mb-32 sm:mb-0">
        <div className="absolute inset-0 opacity-50 bg-[url(https://c.animaapp.com/megx9igh612D8f/img/wow-image---picture---renovation.png)] bg-cover bg-center" />
        <div className="relative z-10 w-full px-8 lg:px-16 h-full flex flex-col items-center justify-start sm:justify-center pt-16 sm:pt-0">
          {/* Centered Main Heading and Subheading */}
          <div className="flex flex-col items-center justify-center text-center relative">
            <MainHeadingSection />
            
            <div className="mt-2 sm:mt-4 lg:-mt-12">
              <AboutUsSection />
            </div>
          </div>

                           {/* Quality Control Experience Badge - Overlapping the h1 in top left corner */}
                 <div className="absolute top-3/4 sm:top-1/4 left-3/4 sm:left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-30">
                   <div className="relative w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] hover:scale-110 transition-all duration-300 animate-pulse">
                     {/* Gold metallic background with beveled edge */}
                     <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full shadow-lg border-4 border-yellow-300">
                       {/* Inner metallic effect */}
                       <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full"></div>
                       
                       {/* Central 40+ text */}
                       <div className="absolute inset-0 flex items-center justify-center">
                         <div className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold text-black leading-none">40+</div>
                       </div>
                       

                       
                       {/* Curved text using SVG */}
                       <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                         <defs>
                           <path id="topArc" d="M 20,100 A 80,80 0 0,1 180,100" fill="none"/>
                           <path id="bottomArc" d="M 180,100 A 80,80 0 0,1 20,100" fill="none"/>
                         </defs>
                         <text className="text-[12px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-bold text-black uppercase tracking-wider">
                           <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                             Years Of Experience
                           </textPath>
                         </text>
                         <text className="text-[12px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-bold text-black uppercase tracking-wider" transform="translate(0, 0)">
                           <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
                             Years Of Experience
                           </textPath>
                         </text>
                       </svg>
                     </div>
                   </div>
                 </div>

          {/* Contact Form Card - Positioned at bottom of hero, overlapping services */}
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-3/4 z-20">
            <div className="w-full px-4 sm:px-8 lg:px-16">
              <div className="flex justify-center sm:justify-end">
                <Card className="w-full max-w-[350px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[705px] bg-[#f3fff6d9] rounded-[15px] shadow-[0px_0px_25px_#03030326] border-0">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <h3 className="text-xl sm:text-2xl font-normal text-[#030303] mb-4 sm:mb-6 lg:mb-8">Contact us</h3>
                    
                    <form onSubmit={handleFormSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div className="relative">
                          <Label className="text-xs sm:text-sm font-light text-[#030303] mb-1 sm:mb-2 block">
                            First name <span className="text-red-500">*</span>
                          </Label>
                          <div className="border-b border-[#030303] h-[35px] sm:h-[41px] flex items-center">
                            <input
                              type="text"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              className="w-full bg-transparent outline-none text-[#030303] text-sm sm:text-base"
                              placeholder="Enter your first name"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <Label className="text-xs sm:text-sm font-light text-[#030303] mb-1 sm:mb-2 block">
                            Last name <span className="text-red-500">*</span>
                          </Label>
                          <div className="border-b border-[#030303] h-[35px] sm:h-[41px] flex items-center">
                            <input
                              type="text"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              className="w-full bg-transparent outline-none text-[#030303] text-sm sm:text-base"
                              placeholder="Enter your last name"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <Label className="text-xs sm:text-sm font-light text-[#030303] mb-1 sm:mb-2 block">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <div className="border-b border-[#030303] h-[35px] sm:h-[41px] flex items-center">
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="w-full bg-transparent outline-none text-[#030303] text-sm sm:text-base"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <Label className="text-xs sm:text-sm font-light text-[#030303] mb-1 sm:mb-2 block">
                            Phone <span className="text-red-500">*</span>
                          </Label>
                          <div className="border-b border-[#030303] h-[35px] sm:h-[41px] flex items-center">
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              className="w-full bg-transparent outline-none text-[#030303] text-sm sm:text-base"
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4 sm:mb-6">
                        <Label className="text-xs sm:text-sm font-light text-[#030303] mb-1 sm:mb-2 block">
                          Message <span className="text-red-500">*</span>
                        </Label>
                        <div className="border-b border-[#030303] min-h-[70px] sm:min-h-[92px] p-2">
                          <textarea
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            className="w-full bg-transparent outline-none text-[#030303] resize-none text-sm sm:text-base"
                            placeholder="Enter your message"
                            rows={3}
                            required
                          />
                        </div>
                      </div>
                      
                      {submitMessage && (
                        <div className={`mb-4 p-3 rounded text-sm ${
                          submitMessage.includes('Thank you') 
                            ? 'bg-green-100 text-green-700 border border-green-300' 
                            : 'bg-red-100 text-red-700 border border-red-300'
                        }`}>
                          {submitMessage}
                        </div>
                      )}
                      
                      <div className="flex justify-end">
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-[#ffde17] text-black hover:bg-[#ffde17]/90 rounded-[10px] px-4 sm:px-6 lg:px-8 py-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Sending...' : 'Submit'}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Line Separator - Between hero and services */}
      <div className="relative -mt-8 mb-8 hidden sm:block">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-[#ffde17] z-10"></div>
      </div>

      {/* Services Section */}
      <section 
        ref={servicesRef as React.RefObject<HTMLElement>}
        id="services" 
        className={`relative bg-[#f3fff6] py-16 sm:pt-32 lg:pt-40 mt-96 sm:mt-0 transition-all duration-800 ${
          servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 opacity-[0.09] bg-[url(https://c.animaapp.com/megx9igh612D8f/img/wow-image---picture---construction-site.png)] bg-cover bg-center" />
          <div className="relative z-10 w-full px-8 lg:px-16 py-16">
            <div className="flex items-center mb-8">
              <div className="w-4 h-4 mr-4 bg-[#ffde17] rounded-full"></div>
              <h2 className="text-xl font-light text-[#030303]">OUR SERVICES</h2>
            </div>
            
                               <div className="mb-8 sm:mb-12 lg:mb-16">
                     <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#030303] tracking-tight leading-tight max-w-4xl transition-colors duration-300 animate-fade-in-up px-4">
                       From small repairs around your home or business space to the complete construction of a building, we can do it all.
                     </h2>
                   </div>

            {/* Services Cards - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-16">
              <FeaturesListSection />
              
                                   {/* Specializations Card */}
                     <Card className="w-full sm:w-[220px] md:w-[260px] lg:w-[300px] h-[410px] sm:h-[460px] md:h-[510px] lg:h-[564px] bg-[#1111104c] rounded-[15px] backdrop-blur-[10px] border-0 hover:bg-[#11111066] hover:scale-105 transition-all duration-300">
                       <CardContent className="p-4 sm:p-6 lg:p-8">
                         <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#030303] mb-1 sm:mb-2">SPECIALISING IN:</h3>
                         <div className="space-y-1">
                           {specializations.map((specialization, index) => (
                             <div key={index} className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-[#030303] leading-tight hover:text-[#ffde17] transition-colors duration-200 break-words">
                               {specialization}
                             </div>
                           ))}
                         </div>
                       </CardContent>
                     </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Line Separator - Overlapping sections */}
      <div className="relative -mt-8 mb-8">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-[#ffde17] z-10"></div>
      </div>

      {/* About Section */}
      <section id="about" className="relative bg-[#111110] pt-8 lg:pt-16 pb-16">
        <div className="relative min-h-[745px]">
          <div className="relative z-10 w-full px-8 lg:px-16 py-16">
            <div className="flex items-center mb-8">
              <div className="w-4 h-4 mr-4 bg-[#ffde17] rounded-full"></div>
              <h2 className="text-xl font-light text-white">ABOUT US</h2>
            </div>
            
                               <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8 sm:mb-12 lg:mb-16 max-w-4xl transition-colors duration-300 animate-fade-in-left px-4">
                     We are a generational name in the construction industry with a long heritage of delivering excellence as builders and renovators.
                   </div>
            
            <ServicesSection />
          </div>
        </div>
      </section>

      {/* Vertical Line Separator - Overlapping sections */}
      <div className="relative -mt-8 mb-8">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-[#ffde17] z-10"></div>
      </div>

      {/* Clients Section */}
      <section 
        ref={clientsRef as React.RefObject<HTMLElement>}
        id="clients" 
        className={`bg-[#f3fff6] pt-32 pb-32 overflow-hidden transition-all duration-800 ${
          clientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="w-full px-8 lg:px-16">
          <div className="flex items-center mb-12">
            <div className="w-4 h-4 mr-4 bg-[#ffde17] rounded-full"></div>
            <h2 className="text-xl font-light text-[#030303]">OUR CLIENTS</h2>
          </div>
          
          <div className="overflow-hidden -mx-8 lg:-mx-16">
            <div className="flex items-center gap-12 animate-scroll-mobile sm:animate-scroll">
              {/* Multiple duplicates for seamless infinite scrolling */}
              {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => {
                const logoIndex = index % clientLogos.length;
                let logoSize = "w-[191px] h-[127px]"; // Default size
                
                // Custom sizes for specific logos
                if (logoIndex === 0) { // client1
                  logoSize = "w-[130px] h-[87px]"; // Smaller
                } else if (logoIndex === 1) { // client2
                  logoSize = "w-[170px] h-[113px]"; // Slightly smaller than default
                } else if (logoIndex === 4) { // client5
                  logoSize = "w-[150px] h-[100px]"; // Smaller
                }
                
                return (
                  <div
                    key={index}
                    className={`${logoSize} bg-contain bg-center bg-no-repeat flex-shrink-0 flex items-center justify-center`}
                    style={{ backgroundImage: `url(${logo})` }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Line Separator - Overlapping sections */}
      <div className="relative -mt-8 mb-8">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-[#ffde17] z-10"></div>
      </div>

                   {/* Gallery Section */}
             <div id="gallery">
               <GallerySection />
             </div>

             {/* Vertical Line Separator - Overlapping sections */}
             <div className="relative -mt-8 mb-8">
               <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-[#ffde17] z-10"></div>
             </div>

             {/* Blog Section */}
             <section 
               ref={blogRef as React.RefObject<HTMLElement>}
               id="blog" 
               className={`bg-[#f3fff6] py-16 transition-all duration-800 ${
                 blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
               }`}
             >
               <div className="w-full px-8 lg:px-16">
                 <div className="flex items-center mb-8">
                   <div className="w-4 h-4 mr-4 bg-[#ffde17] rounded-full"></div>
                   <h2 className="text-xl font-light text-[#030303]">LATEST INSIGHTS</h2>
                 </div>
                 <div className="mb-8 sm:mb-12 lg:mb-16">
                   <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#030303] tracking-tight leading-tight max-w-4xl mb-4 sm:mb-6 lg:mb-8 px-4">
                     Stay updated with our latest construction insights and industry tips.
                   </h2>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                   {/* Featured Blog Post 1 */}
                   <article 
                     className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-800 group cursor-pointer ${
                       blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                     }`}
                     style={{ transitionDelay: '0.1s' }}
                     onClick={() => window.location.href = '/blog/1'}
                   >
                     <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)` }}></div>
                     <div className="p-6">
                       <div className="flex items-center justify-between mb-3">
                         <span className="text-sm text-[#030303] font-semibold">Building Approvals</span>
                         <span className="text-sm text-gray-500">1 day ago</span>
                       </div>
                       <h3 className="text-xl font-semibold text-[#030303] mb-3 transition-colors">
                         Navigating Building Approvals in Johannesburg: A Step-by-Step Guide
                       </h3>
                       <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                         Embarking on a home renovation or new build in Johannesburg? Learn the crucial steps for securing building plan approvals.
                       </p>
                       <span className="text-[#030303] font-semibold group-hover:text-gray-600 transition-colors">
                         Read More →
                       </span>
                     </div>
                   </article>

                   {/* Featured Blog Post 2 */}
                   <article 
                     className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-800 group cursor-pointer ${
                       blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                     }`}
                     style={{ transitionDelay: '0.2s' }}
                     onClick={() => window.location.href = '/blog/2'}
                   >
                     <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)` }}></div>
                     <div className="p-6">
                       <div className="flex items-center justify-between mb-3">
                         <span className="text-sm text-[#030303] font-semibold">Renovations</span>
                         <span className="text-sm text-gray-500">2 days ago</span>
                       </div>
                       <h3 className="text-xl font-semibold text-[#030303] mb-3 transition-colors">
                         Essential Home Renovation Tips for Johannesburg Properties
                       </h3>
                       <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                         Transform your Johannesburg home with these expert renovation tips that will add value and improve your living space.
                       </p>
                       <span className="text-[#030303] font-semibold group-hover:text-gray-600 transition-colors">
                         Read More →
                       </span>
                     </div>
                   </article>

                   {/* Featured Blog Post 3 */}
                   <article 
                     className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-800 group cursor-pointer ${
                       blogVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                     }`}
                     style={{ transitionDelay: '0.3s' }}
                     onClick={() => window.location.href = '/blog/6'}
                   >
                     <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80)` }}></div>
                     <div className="p-6">
                       <div className="flex items-center justify-between mb-3">
                         <span className="text-sm text-[#030303] font-semibold">Professional Standards</span>
                         <span className="text-sm text-gray-500">1 week ago</span>
                       </div>
                       <h3 className="text-xl font-semibold text-[#030303] mb-3 transition-colors">
                         The Benefits of Hiring an NHBRC Registered Builder in Johannesburg
                       </h3>
                       <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                         When undertaking a new home build or significant renovation, choosing the right builder is crucial for your project's success.
                       </p>
                       <span className="text-[#030303] font-semibold group-hover:text-gray-600 transition-colors">
                         Read More →
                       </span>
                     </div>
                   </article>
                 </div>
                 <div className="text-center mt-12">
                   <a href="/blog" className="inline-flex items-center bg-[#ffde17] text-[#030303] hover:bg-[#ffde17]/90 rounded-lg px-8 py-3 font-semibold transition-colors">
                     View All Articles
                     <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                   </a>
                 </div>
               </div>
             </section>

             {/* Vertical Line Separator - Overlapping sections */}
             <div className="relative -mt-8 mb-8">
               <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-16 bg-[#ffde17] z-10"></div>
             </div>

                   {/* Let's Build Together Section */}
             <section 
               ref={ctaRef as React.RefObject<HTMLElement>}
               id="lets-build-together" 
               className={`relative bg-[#f3fff6] py-16 transition-all duration-800 z-[999] ${
                 ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
               }`}
             >
               <div className="max-w-6xl mx-auto px-8 lg:px-16">
                 <div className="bg-[#ffde17] rounded-2xl shadow-2xl p-8 sm:p-12 lg:p-16 relative -mb-24 sm:-mb-24 lg:-mb-32 z-[9999]">
                   <div className="text-center">
                     <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#030303] mb-8 sm:mb-12 lg:mb-16 hover:scale-105 transition-transform duration-300 animate-fade-in-up px-4">
                       LET'S <span className="[font-family:'Permanent_Marker',Helvetica]">BUILD</span> TOGETHER
                     </h2>
             
                     {/* Contact Methods */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                       <div className="text-center group">
                         <div className="w-16 h-16 bg-[#030303] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ffde17] group-hover:scale-110 transition-all duration-300">
                           <svg className="w-8 h-8 text-[#ffde17] group-hover:text-[#030303] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold text-[#030303] mb-2 group-hover:text-[#030303] transition-colors duration-300">Call Us</h3>
                         <div className="text-[#030303]">
                           <div>082 959 1599</div>
                         </div>
                       </div>
                       
                       <div className="text-center group">
                         <div className="w-16 h-16 bg-[#030303] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ffde17] group-hover:scale-110 transition-all duration-300">
                           <svg className="w-8 h-8 text-[#ffde17] group-hover:text-[#030303] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold text-[#030303] mb-2 group-hover:text-[#030303] transition-colors duration-300">Mail Us</h3>
                         <div className="text-[#030303]">
                           <div>antsatwork2005@gmail.com</div>
                         </div>
                       </div>
                       
                       <div className="text-center group">
                         <div className="w-16 h-16 bg-[#030303] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ffde17] group-hover:scale-110 transition-all duration-300">
                           <svg className="w-8 h-8 text-[#ffde17] group-hover:text-[#030303] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold text-[#030303] mb-2 group-hover:text-[#030303] transition-colors duration-300">Follow Us</h3>
                         <div className="flex justify-center space-x-4">
                           <a href="https://web.facebook.com/profile.php?id=61576980251996" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                             <svg className="w-8 h-8 text-[#030303]" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                             </svg>
                           </a>
                           <a href="https://www.instagram.com/antsatwork_za/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                             <svg className="w-8 h-8 text-[#030303]" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                             </svg>
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </section>



             {/* Footer Section */}
             <section id="contact" className="relative bg-[#f3fff6] z-0">
               {/* Footer Content */}
               <div className="bg-[#111110] pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 relative z-0">
                 <div className="w-full px-4 sm:px-8 lg:px-16">
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                     {/* Logo Section */}
                     <div className="flex-1">
                       <div 
                         className="w-[150px] sm:w-[180px] lg:w-[200px] h-[132px] sm:h-[158px] lg:h-[176px] bg-cover bg-center mb-4" 
                         style={{ backgroundImage: `url(${footerLogo})` }}
                       />
                     </div>
                     {/* Services Column */}
                     <div className="flex-1">
                       <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Our Services</h3>
                       <ul className="space-y-1 sm:space-y-2 text-white text-xs sm:text-sm">
                         <li>Building & Construction</li>
                         <li>Shopfitting</li>
                         <li>Renovations</li>
                         <li>Removals</li>
                         <li>Kitchen & Bathroom</li>
                         <li>Plumbing & Tiling</li>
                       </ul>
                     </div>
                     {/* Quick Links Column */}
                     <div className="flex-1">
                       <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Quick Links</h3>
                       <ul className="space-y-1 sm:space-y-2 text-white text-xs sm:text-sm">
                         <li><a href="#services" className="hover:underline cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>Services</a></li>
                         <li><a href="#about" className="hover:underline cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About</a></li>
                         <li><a href="#clients" className="hover:underline cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' }); }}>Clients</a></li>
                         <li><a href="#gallery" className="hover:underline cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }}>Work</a></li>
                         <li><a href="/blog" className="hover:underline">Blog</a></li>
                       </ul>
                     </div>
                     {/* Contact Details Column */}
                     <div className="flex-1">
                       <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Contact Details</h3>
                       <div className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm">
                         <div>
                           <strong>Address:</strong><br />
                           Randburg, Gauteng, South Africa
                         </div>
                         <div>
                           <strong>Email:</strong><br />
                           antsatwork2005@gmail.com
                         </div>
                         <div>
                           <strong>Phone:</strong><br />
                           082 959 1599
                         </div>
                       </div>
                     </div>
                   </div>
                   {/* Bottom Bar - Copyright and Policies */}
                   <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
                     <div className="flex flex-col sm:flex-row justify-between items-center">
                       <div className="text-white text-xs sm:text-sm mb-3 sm:mb-0">
                         © 2024 Ants at Work. All Rights Reserved.
                       </div>
                       <div className="text-white text-xs sm:text-sm">
                         <span className="hover:underline cursor-pointer" onClick={() => setShowPrivacyModal(true)}>Privacy Policy</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </section>



      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[999999] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#030303]">Privacy Policy</h2>
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="text-sm text-gray-700 space-y-4">
                <p><strong>Last updated: January 2024</strong></p>
                
                <h3 className="text-lg font-semibold">1. Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you contact us, request a quote, or engage our services. This may include name, email, phone number, address, and project details.</p>
                
                <h3 className="text-lg font-semibold">2. How We Use Your Information</h3>
                <p>We use the information we collect to provide our services, communicate with you, process payments, and improve our services. We may also use your information to send you updates about our services.</p>
                
                <h3 className="text-lg font-semibold">3. Information Sharing</h3>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services.</p>
                
                <h3 className="text-lg font-semibold">4. Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                
                <h3 className="text-lg font-semibold">5. Data Retention</h3>
                <p>We retain your personal information for as long as necessary to provide our services and comply with legal obligations.</p>
                
                <h3 className="text-lg font-semibold">6. Your Rights</h3>
                <p>You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time.</p>
                
                <h3 className="text-lg font-semibold">7. Cookies and Tracking</h3>
                <p>Our website may use cookies and similar technologies to enhance your experience and collect usage information.</p>
                
                <h3 className="text-lg font-semibold">8. Changes to This Policy</h3>
                <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website.</p>
                
                <h3 className="text-lg font-semibold">9. Contact Us</h3>
                <p>If you have any questions about this privacy policy, please contact us at antsatwork2005@gmail.com or 082 959 1599.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
