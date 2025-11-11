import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { headerLogo, footerLogo } from "../../assets/images/logos";

export const BlogPage = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPosts = [
    {
      id: 11,
      slug: "minor-home-repairs-plumbing-electrical-faults",
      title: "Why You Shouldn't Ignore Minor Home Repairs: From Plumbing Leaks to Electrical Faults",
      excerpt: "In the life of a home, small issues are inevitable. A dripping faucet, a flickering light, or a hairline crack in the wall may seem insignificant, but ignoring these minor repairs can lead to major, and often costly, problems down the line.",
      image: "https://images.unsplash.com/photo-1621905252478-e3e6c84d13f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      date: "1 day ago",
      readTime: "10 min read",
      category: "Maintenance"
    },
    {
      id: 10,
      slug: "modern-kitchen-bathroom-renovations-johannesburg",
      title: "Modern Kitchen and Bathroom Renovations in Johannesburg: Choosing Materials and Designs",
      excerpt: "The kitchen and bathroom are often considered the heart of a home, and a well-executed renovation in these spaces can drastically improve your daily life and increase your property's value. In Johannesburg, modern renovations for these rooms are all about blending style, functionality, and durable materials.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
      date: "2 days ago",
      readTime: "11 min read",
      category: "Renovations"
    },
    {
      id: 1,
      slug: "navigating-building-approvals-johannesburg",
      title: "Navigating Building Approvals in Johannesburg: A Step-by-Step Guide for Homeowners",
      excerpt: "Embarking on a home renovation or new build in Johannesburg is an exciting prospect, but the journey often comes with a crucial, yet sometimes daunting, first step: securing building plan approvals. Understanding the City of Joburg's process is key to a smooth project.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "3 days ago",
      readTime: "12 min read",
      category: "Building Approvals"
    },
    {
      id: 2,
      slug: "essential-home-renovation-tips-johannesburg",
      title: "Essential Home Renovation Tips for Johannesburg Properties",
      excerpt: "Transform your Johannesburg home with these expert renovation tips that will add value and improve your living space.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "4 days ago",
      readTime: "8 min read",
      category: "Renovations"
    },
    {
      id: 3,
      slug: "home-renovation-trends-2025-johannesburg",
      title: "Top Home Renovation Trends for 2025 in Jobburg: What to Consider for Your Property",
      excerpt: "As we look ahead to 2025, home design in Johannesburg is evolving, blending cutting-edge aesthetics with a strong emphasis on sustainability and personal well-being.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "5 days ago",
      readTime: "10 min read",
      category: "Design Trends"
    },
    {
      id: 4,
      slug: "home-renovations-cost-guide-johannesburg",
      title: "Understanding the Cost of Home Renovations in Johannesburg: A Comprehensive Breakdown",
      excerpt: "One of the first questions homeowners ask when considering a renovation in Johannesburg is, 'How much will it cost?' While there's no one-size-fits-all answer, understanding the factors that influence renovation costs can help you set a realistic budget.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      date: "6 days ago",
      readTime: "11 min read",
      category: "Cost Guide"
    },
    {
      id: 5,
      slug: "building-materials-guide-johannesburg",
      title: "Choosing the Right Building Materials in Johannesburg: A Guide to Quality and Sustainability",
      excerpt: "The materials you choose for your construction or home renovation project in Johannesburg are fundamental to its quality, durability, and even its environmental footprint.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "1 week ago",
      readTime: "9 min read",
      category: "Materials"
    },
    {
      id: 6,
      slug: "benefits-nhbrc-registered-builder-johannesburg",
      title: "The Benefits of Hiring an NHBRC Registered Builder in Johannesburg",
      excerpt: "When undertaking a new home build or significant renovation in Johannesburg, one of the most critical decisions you'll make is choosing your builder.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      date: "1 week ago",
      readTime: "8 min read",
      category: "Professional Standards"
    },
    {
      id: 7,
      slug: "family-owned-construction-company-johannesburg",
      title: "Why a Family-Owned Construction Company is Your Best Choice in Johannesburg",
      excerpt: "In the bustling construction and home renovation landscape of Johannesburg, choosing the right partner for your project can feel overwhelming.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "2 weeks ago",
      readTime: "7 min read",
      category: "Company Values"
    },
    {
      id: 8,
      slug: "collaborative-construction-architects-engineers",
      title: "Collaborative Construction: Working with Architects and Engineers for Your Dream Home in Joburg",
      excerpt: "Building or renovating your dream home in Johannesburg is a complex undertaking, often requiring the expertise of multiple professionals.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      date: "2 weeks ago",
      readTime: "10 min read",
      category: "Collaboration"
    },
    {
      id: 9,
      slug: "house-extensions-additions-johannesburg",
      title: "Expanding Your Space: A Guide to House Extensions and Additions in Johannesburg",
      excerpt: "As families grow or lifestyles change, the desire for more space often leads homeowners to consider a house extension. A well-planned and executed extension can not only increase your living area but also add significant value to your property. At Ants At Work, we specialize in seamless house extensions and additions, turning your current house into the home you've always envisioned.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80",
      date: "3 weeks ago",
      readTime: "12 min read",
      category: "House Extensions"
    }
  ];

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
                <a href="/" className="text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer">Home</a>
                <a href="/#services" className="text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer">Services</a>
                <a href="/#about" className="text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer">About</a>
                <a href="/#gallery" className="text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer">Work</a>
                <a href="/#clients" className="text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer">Clients</a>
                <a href="/blog" className="text-[#030303] hover:text-[#ffde17] transition-colors">Blog</a>
              </nav>
              <Button
                className="bg-[#ffde17] text-black hover:bg-[#ffde17]/90 rounded-[10px] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-md transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 z-[99999]' : 'opacity-0 pointer-events-none'}`}>
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
            href="/"
            className="block text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/#services"
            className="block text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="/#about"
            className="block text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/#gallery"
            className="block text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Work
          </a>
          <a
            href="/#clients"
            className="block text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Clients
          </a>
          <a
            href="/blog"
            className="block text-[#030303] hover:text-[#ffde17] transition-colors text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </a>

          <div className="pt-4">
            <Button
              className="w-full bg-[#ffde17] text-black hover:bg-[#ffde17]/90 rounded-[10px] px-4 py-3 text-base font-medium"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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

      {/* Main Content with top padding for fixed header */}
      <div className="pt-20 sm:pt-24 lg:pt-28">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-[#030303] mb-6 leading-tight">
                  Navigating Building Approvals in Johannesburg: A Step-by-Step Guide for Homeowners
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Embarking on a home renovation or new build in Johannesburg? Learn everything you need to know about securing building plan approvals and navigating the City of Joburg's process.
                </p>
                <Button
                  className="bg-[#ffde17] text-black hover:bg-[#ffde17]/90 rounded-lg px-8 py-3 text-lg"
                  onClick={() => {
                    window.location.href = '/blog/navigating-building-approvals-johannesburg';
                  }}
                >
                  Read More →
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-cover bg-center rounded-lg shadow-lg"
                     style={{ backgroundImage: `url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)` }}>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#ffde17] rounded-full flex items-center justify-center">
                      <span className="text-black font-semibold text-sm">AA</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#030303]">Building Approvals</div>
                      <div className="text-sm text-gray-600">12 min read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#030303] mb-12">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => {
                    // Navigate to individual blog post page using slug
                    window.location.href = `/blog/${post.slug}`;
                  }}
                >
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}></div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-sm text-[#030303] font-semibold">{post.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#030303] mb-3 line-clamp-2 hover:text-gray-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Let's Build Together Section */}
      <section className="relative bg-[#f3fff6] py-16">
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
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.354 2.617 6.78 6.979 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
      <section id="contact" className="relative bg-[#f3fff6]">
        {/* Footer Content */}
        <div className="bg-[#111110] pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 relative z-10">
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
                  <li><a href="/#services" className="hover:underline cursor-pointer">Services</a></li>
                  <li><a href="/#about" className="hover:underline cursor-pointer">About</a></li>
                  <li><a href="/#gallery" className="hover:underline cursor-pointer">Work</a></li>
                  <li><a href="/#clients" className="hover:underline cursor-pointer">Clients</a></li>
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
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-white text-xs sm:text-sm mb-4 md:mb-0">
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
