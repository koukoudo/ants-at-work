import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { Button } from "../../components/ui/button";
import { headerLogo, footerLogo } from "../../assets/images/logos";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

interface BlogPostPageProps {
  post?: BlogPost;
}

export const BlogPostPage = ({ post }: BlogPostPageProps): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const params = useParams();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // All blog posts data
  const allBlogPosts: BlogPost[] = [
    {
      id: 11,
      slug: "minor-home-repairs-plumbing-electrical-faults",
      title: "Why You Shouldn't Ignore Minor Home Repairs: From Plumbing Leaks to Electrical Faults",
      excerpt: "In the life of a home, small issues are inevitable. A dripping faucet, a flickering light, or a hairline crack in the wall may seem insignificant, but ignoring these minor repairs can lead to major, and often costly, problems down the line.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "1 day ago",
      readTime: "10 min read",
      category: "Maintenance",
      author: "Ants At Work Team",
      content: `
        <p>In the life of a home, small issues are inevitable. A dripping faucet, a flickering light, or a hairline crack in the wall may seem insignificant, but ignoring these minor repairs can lead to major, and often costly, problems down the line. At Ants At Work, our service spectrum extends far beyond major construction projects. We are your go-to partner for all home maintenance and small repairs in Johannesburg.</p>

        <br>

        <h2><strong>The True Cost of a "Minor" Issue</strong></h2>
        <p>A seemingly harmless issue can quickly escalate. For example:</p>

        <br>

        <ul>
          <li><strong>A Leaky Faucet:</strong> A persistent drip can waste thousands of litres of water over a year, significantly increasing your water bill.</li>
          <li><strong>A Small Roof Leak:</strong> What begins as a minor stain on the ceiling can become a major issue, leading to mold growth, damaged insulation, and compromised structural integrity.</li>
          <li><strong>Minor Electrical Faults:</strong> Ignoring issues like a flickering light or a circuit that frequently trips can pose a serious safety risk to your family and property.</li>
        </ul>

        <br>

        <h2><strong>Our Comprehensive Repair and Maintenance Services</strong></h2>
        <p>Ants At Work offers a full spectrum of services, ranging from "minor repairs" to "complete building construction". We believe that addressing small problems with the same professionalism and attention to detail as a large-scale project is crucial. Our home maintenance services include:</p>

        <br>

        <ul>
          <li><strong>Plumbing Repairs:</strong> From fixing leaky taps and burst pipes to unblocking drains, our team is equipped to handle all your plumbing needs.</li>
          <li><strong>Electrical Work:</strong> We can safely and efficiently handle minor electrical installations, repairs, and fault finding.</li>
          <li><strong>Roofing and Waterproofing:</strong> Timely repairs to your roof can prevent extensive water damage to your home.</li>
          <li><strong>General Handyman Services:</strong> Our skilled team can take on a variety of small jobs, from plaster repairs and painting to installing fixtures and fittings.</li>
        </ul>

        <br>

        <h2><strong>Building Trust, One Repair at a Time</strong></h2>
        <p>We understand that trust is paramount, especially when you are inviting a contractor into your home for a small job. Our commitment to quality and reliability is at the core of our brand, whether we're building a new home or fixing a leaky pipe. By providing a reliable service for your small repairs, we hope to build a relationship that lasts. A satisfied client who trusts us with a minor repair is more likely to turn to us for future, larger projects, such as a major renovation or a new build. This is how we build lasting partnerships and a legacy of excellence.</p>
      `
    },
    {
      id: 10,
      slug: "modern-kitchen-bathroom-renovations-johannesburg",
      title: "Modern Kitchen and Bathroom Renovations in Johannesburg: Choosing Materials and Designs",
      excerpt: "The kitchen and bathroom are often considered the heart of a home, and a well-executed renovation in these spaces can drastically improve your daily life and increase your property's value. In Johannesburg, modern renovations for these rooms are all about blending style, functionality, and durable materials.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
      date: "2 days ago",
      readTime: "11 min read",
      category: "Renovations",
      author: "Ants At Work Team",
      content: `
        <p>The kitchen and bathroom are often considered the heart of a home, and a well-executed renovation in these spaces can drastically improve your daily life and increase your property's value. In Johannesburg, modern renovations for these rooms are all about blending style, functionality, and durable materials. At Ants At Work, we bring a wealth of expertise to help you make the right choices for your dream kitchen or bathroom.</p>

        <br>

        <h2><strong>The Modern Kitchen: A Hub of Style and Function</strong></h2>
        <p>Today's kitchens are more than just a place to cook; they are central to family life and entertaining. When planning your kitchen renovation, consider these key elements:</p>

        <br>

        <h3><strong>Countertops:</strong></h3>
        <p>A crucial choice for both aesthetics and durability. Options range from the affordable and versatile Postform to the luxurious and hard-wearing Granite or Caesar Stone. Each offers a different look and feel, and our team can guide you on the best fit for your lifestyle and budget.</p>

        <br>

        <h3><strong>Cabinetry:</strong></h3>
        <p>Your choice of kitchen cupboards defines the room's style. For a sleek, contemporary look, "Seno board kitchens are very popular for their clean, modern feel". For a different aesthetic, consider wood or painted finishes.</p>

        <br>

        <h3><strong>Professional Installation:</strong></h3>
        <p>A high-quality finish depends on professional installation. We ensure every component is fitted with precision, from countertops to appliances, guaranteeing a flawless result.</p>

        <br>

        <h3><strong>Smart Storage Solutions:</strong></h3>
        <p>Modern kitchens maximize space with clever storage solutions, including pull-out pantries, corner organizers, and hidden drawers.</p>

        <br>

        <h2><strong>The Bathroom: A Sanctuary of Tranquility</strong></h2>
        <p>A bathroom renovation is an opportunity to create a personal sanctuary. Key trends in Johannesburg bathrooms include a focus on clean lines, natural materials, and an efficient use of space.</p>

        <br>

        <h3><strong>Showers and Tubs:</strong></h3>
        <p>A new shower or bath can be a focal point. New shower installations start at around R2,800, while new sink installations average R3,000.</p>

        <br>

        <h3><strong>Flooring:</strong></h3>
        <p>The cost of new flooring can be around R25,000 for an average bathroom, depending on the material you choose. Opt for durable, water-resistant materials like porcelain or ceramic tiles.</p>

        <br>

        <h3><strong>Modern Fixtures:</strong></h3>
        <p>Choosing contemporary faucets, lighting, and hardware can instantly elevate the space. Consider water-saving fixtures for both sustainability and cost savings.</p>

        <br>

        <h2><strong>The Value of Professional Expertise</strong></h2>
        <p>A kitchen or bathroom renovation can be a complex project, with an average cost for a bathroom renovation sitting at approximately R35,000. A professional contractor ensures that the project stays on budget and on schedule while handling all aspects, from demolition to plumbing and electrical work. At Ants At Work, we believe in a collaborative approach, working with you to bring your vision to life while ensuring every detail, from the selection of materials to the final installation, is handled with expertise.</p>
      `
    },
    {
      id: 1,
      slug: "navigating-building-approvals-johannesburg",
      title: "Navigating Building Approvals in Johannesburg: A Step-by-Step Guide for Homeowners",
      excerpt: "Embarking on a home renovation or new build in Johannesburg is an exciting prospect, but the journey often comes with a crucial, yet sometimes daunting, first step: securing building plan approvals. Understanding the City of Joburg's process is key to a smooth project.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "3 days ago",
      readTime: "12 min read",
      category: "Building Approvals",
      author: "Ants At Work Team",
      content: `
        <p>Embarking on a home renovation or new build in Johannesburg is an exciting prospect, but the journey often comes with a crucial, yet sometimes daunting, first step: securing building plan approvals. Understanding the City of Joburg's process is key to a smooth project. At Ants At Work, we believe in empowering homeowners with knowledge, and our in-house expertise is designed to simplify this very process for you.</p>

        <br>

        <h2><strong>Why are Building Approvals Necessary?</strong></h2>
        <p>Any new building or alteration that changes the structure of an existing building in Johannesburg requires approval from the City's Development Management Department. This isn't just red tape; it ensures your project complies with National Building Regulations and Town Planning Schemes, safeguarding your investment and the safety of your property. Building without approved plans can lead to severe penalties, including stop-work orders, demolition at your expense, and even legal action. Unapproved alterations can also cause significant issues when you decide to sell your home.</p>

        <br>

        <h2><strong>The City of Joburg's Digital Approval Process: CPMS</strong></h2>
        <p>Johannesburg has streamlined its building permit process through the digital Construction Permit Management System (CPMS). This system aims to enhance efficiency and align with the city's Smart City program. Here's a simplified overview of what to expect:</p>

        <br>

        <h3><strong>Registered Professional Submission</strong></h3>
        <p>Your appointed architect or designer, who must be registered with SACAP (South African Council for the Architectural Profession), will register on the CPMS and submit your building plans and all required documents in PDF format.</p>

        <br>

        <h3><strong>Pre-Scrutiny & Invoicing</strong></h3>
        <p>The application undergoes an initial check for completeness, and submission fees are calculated and invoiced electronically.</p>

        <br>

        <h3><strong>Payment Confirmation</strong></h3>
        <p>Once fees are paid and proof is uploaded, the application moves forward.</p>

        <br>

        <h3><strong>Assessment</strong></h3>
        <p>The CPMS automatically allocates your application to a Plans Examiner for a comprehensive review, ensuring compliance with all regulations.</p>

        <br>

        <h3><strong>Decision & Notification</strong></h3>
        <p>A Manager makes the final decision to approve or refuse the application. You and your professional team will receive an email notification, with approved plans carrying a digital signature.</p>

        <br>

        <h3><strong>Resubmission (if needed)</strong></h3>
        <p>If refused, the CPMS allows for corrections and resubmission, re-entering the assessment cycle.</p>

        <br>

        <h3><strong>Building Commencement</strong></h3>
        <p>Once approved, you'll be notified that construction can legally begin.</p>

        <br>

        <h3><strong>Inspections</strong></h3>
        <p>Throughout construction, compulsory inspections (foundations, drainage, final) are required and can be booked via CPMS. A final inspection is crucial before an Occupancy Certificate is issued.</p>

        <br>

        <h3><strong>Occupancy Certificate</strong></h3>
        <p>After a successful final inspection, the Chief Building Inspector issues an electronic Occupancy Certificate, confirming your building is compliant and safe for use.</p>

        <br>

        <h2><strong>Beyond Standard Building Plans: Other Permits You Might Need</strong></h2>
        <p>Depending on your project's scope, you might also require specific permits for:</p>

        <ul>
          <li><strong>Demolition:</strong> If you're taking down existing structures.</li>
          <li><strong>Excavation:</strong> For significant groundwork.</li>
          <li><strong>Blasting:</strong> If your project involves controlled explosions.</li>
          <li><strong>Hoarding:</strong> For erecting temporary structures around your construction site.</li>
        </ul>

        <br>

        <h2><strong>How Ants At Work Simplifies the Process</strong></h2>
        <p>At Ants At Work, we understand that navigating these regulations can be complex and time-consuming. That's why our in-house building approval expertise is a cornerstone of our service. We work closely with leading architects, designers, and engineers, and our team is adept at managing the entire permit application process on your behalf. From preparing the necessary forms and documentation to liaising with the City of Joburg's Development Management Department, we streamline the journey from concept to reality, ensuring your project is compliant and stress-free.</p>
      `
    },
    {
      id: 2,
      slug: "essential-home-renovation-tips-johannesburg",
      title: "Essential Home Renovation Tips for Johannesburg Properties",
      excerpt: "Transform your Johannesburg home with these expert renovation tips that will add value and improve your living space.",
      content: `
        <p>Home renovation in Johannesburg can be both exciting and challenging. Whether you're looking to increase your property value, improve functionality, or simply update the aesthetic appeal, proper planning and execution are crucial for success. At Ants At Work, we have extensive experience helping homeowners throughout Johannesburg bring their renovation dreams to life.</p>

        <br>

        <h2><strong>Planning Your Renovation Project</strong></h2>
        <p>Before starting any renovation work, it's essential to have a clear plan in place. This includes understanding your budget, timeline, and desired outcomes. Consider the current market trends in Johannesburg and how your renovation will impact your property's value.</p>

        <br>

        <h3><strong>Setting a Realistic Budget</strong></h3>
        <p>Determine your total budget and allocate funds for different aspects of the renovation. Remember to include a contingency fund of at least 10-15% for unexpected costs that may arise during the project.</p>

        <br>

        <h3><strong>Choosing the Right Materials</strong></h3>
        <p>Select materials that are durable, suitable for Johannesburg's climate, and within your budget. Consider factors like maintenance requirements, energy efficiency, and local availability.</p>

        <br>

        <h2><strong>Popular Renovation Trends in Johannesburg</strong></h2>
        <p>Stay current with the latest trends that are popular among Johannesburg homeowners:</p>

        <ul>
          <li><strong>Open Plan Living:</strong> Creating seamless flow between living, dining, and kitchen areas</li>
          <li><strong>Outdoor Living Spaces:</strong> Expanding living areas to include patios and entertainment areas</li>
          <li><strong>Energy Efficiency:</strong> Installing solar panels and energy-efficient appliances</li>
          <li><strong>Smart Home Technology:</strong> Integrating modern technology for convenience and security</li>
        </ul>

        <br>

        <h2><strong>Working with Professional Contractors</strong></h2>
        <p>Choosing the right contractor is crucial for a successful renovation. Look for experienced professionals who understand local building codes and regulations. At Ants At Work, we have extensive experience in Johannesburg renovations and can help bring your vision to life.</p>
      `,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "4 days ago",
      readTime: "8 min read",
      category: "Renovations",
      author: "Ants At Work Team"
    },
    {
      id: 3,
      slug: "home-renovation-trends-2025-johannesburg",
      title: "Top Home Renovation Trends for 2025 in Joburg: What to Consider for Your Property",
      excerpt: "As we look ahead to 2025, home design in Johannesburg is evolving, blending cutting-edge aesthetics with a strong emphasis on sustainability and personal well-being.",
      content: `
        <p>As we look ahead to 2025, home design in Johannesburg is evolving, blending cutting-edge aesthetics with a strong emphasis on sustainability and personal well-being. If you're planning a renovation, aligning with these trends can not only create a beautiful and functional space but also significantly enhance your property's value. At Ants At Work, we're committed to bringing these contemporary visions to life.</p>

        <br>

        <h2><strong>1. The "Evergreen" Home: Sustainability at its Core</strong></h2>
        <p>Sustainability is no longer a niche concept; it's a driving force in modern home design. Homeowners are increasingly seeking environmentally friendly products and climate-conscious living. This trend manifests through:</p>

        <br>

        <h3><strong>Biophilic Design</strong></h3>
        <p>Bringing nature indoors with natural textures like wood, stoneware, and concrete finishes, complemented by earthy tones such as beige, green, and brown.</p>

        <br>

        <h3><strong>Eco-Friendly Fabrics</strong></h3>
        <p>Opting for natural materials like bamboo, organic cotton, hemp, and linen over synthetics for curtains, upholstery, and storage.</p>

        <br>

        <h3><strong>Natural Lighting</strong></h3>
        <p>Incorporating large windows to maximize natural light and warmth, reducing reliance on artificial illumination.</p>

        <br>

        <h2><strong>2. Hidden Technology, Seamless Living</strong></h2>
        <p>Technology is an undeniable part of modern life, but the trend for 2025 is about discreet integration. Think hidden speakers, wires concealed behind artwork, wireless charging stations blending into furniture, and voice-controlled lighting. The goal is to enhance convenience without overwhelming your living space with visible gadgets.</p>

        <br>

        <h2><strong>3. Statement Lighting: More Than Just Illumination</strong></h2>
        <p>Lighting is transforming from a mere functional element into a key design feature. Modern LEDs are replacing traditional ceiling bulbs, with a focus on contemporary fixtures that create ambiance. Consider oversized pendants, sculpted lamps, and even lighting integrated into floors to make a bold statement.</p>

        <br>

        <h2><strong>4. Accent Walls: A Touch of Artistic Expression</strong></h2>
        <p>Move beyond four walls of the same colour. Accent walls are making a comeback, offering an opportunity for artistic expression. Explore textured walls with wood paneling, carved plaster finishes, or lime-washed gradients to add depth and character to a room.</p>

        <br>

        <h2><strong>5. Furniture as Art & Conscious Consumerism</strong></h2>
        <p>Your furniture can be a work of art. The trend leans towards unique, handmade pieces that support local artists and conscious consumerism. Hand-painted vases, handwoven rugs, and wooden or metal sculptures can fill spaces with personality and purpose.</p>

        <br>

        <h2><strong>Bringing Your Vision to Life with Ants At Work</strong></h2>
        <p>At Ants At Work, we stay abreast of the latest design trends and material innovations to ensure your renovation is not just beautiful but also future-proof. Whether you envision a sustainable oasis, a technologically integrated smart home, or a space that reflects your unique artistic flair, our team works closely with leading architects and designers to bring your vision to life. We understand the importance of quality materials and meticulous craftsmanship to ensure your renovated space is both stunning and enduring.</p>

        <br>

        <p>Ready to transform your Johannesburg home? Contact Ants At Work today to discuss how we can incorporate these exciting 2025 design trends into your next renovation project.</p>
      `,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "5 days ago",
      readTime: "10 min read",
      category: "Design Trends",
      author: "Ants At Work Team"
    },
    {
      id: 4,
      slug: "home-renovations-cost-guide-johannesburg",
      title: "Understanding the Cost of Home Renovations in Johannesburg: A Comprehensive Breakdown",
      excerpt: "One of the first questions homeowners ask when considering a renovation in Johannesburg is, 'How much will it cost?' While there's no one-size-fits-all answer, understanding the factors that influence renovation costs can help you set a realistic budget.",
      content: `
        <p>One of the first questions homeowners ask when considering a renovation in Johannesburg is, "How much will it cost?" While there's no one-size-fits-all answer, understanding the factors that influence renovation costs can help you set a realistic budget and plan effectively. At Ants At Work, we believe in transparency and helping you make informed decisions.</p>

        <br>

        <h2><strong>Key Factors Influencing Renovation Costs:</strong></h2>

        <br>

        <h3><strong>Scope and Size of the Project</strong></h3>
        <p>This is the most significant determinant. A minor cosmetic update will naturally cost less than a full structural overhaul.</p>

        <br>

        <h3><strong>Minor Repairs vs. Major Renovations</strong></h3>
        <p>Simple fixes like plaster work or wall crack repairs will be on the lower end. A complete remodel involving moving walls, altering plumbing or electrical lines, or adding new rooms will be substantially more expensive.</p>

        <br>

        <h2><strong>Room-Specific Renovations:</strong></h2>

        <br>

        <h3><strong>Bathroom Renovations</strong></h3>
        <p>Typically range between R15,000 and R55,000, with an average cost around R35,000. Individual replacements like flooring (around R25,000), shower installation (R2,800), sink installation (R3,000), or cabinet installation (R4,000) can be priced separately.</p>

        <br>

        <h3><strong>Kitchen Renovations</strong></h3>
        <p>Can range from R50,000 for entry-level designs to R300,000 for ultra-upmarket transformations. This includes custom design, professional installation, and material choices.</p>

        <br>

        <h3><strong>Extensions and Additions</strong></h3>
        <p>Adding a new patio, additional rooms, or extending existing spaces like kitchens or garages will involve significant costs due to structural changes, roofing, and finishing.</p>

        <br>

        <h2><strong>Material Selection</strong></h2>
        <p>The quality and type of materials you choose have a direct impact on the overall cost. For instance, in kitchens, countertop options range from affordable Postform to more premium Granite or Caesar Stone. Similarly, flooring choices like vinyl, tiles, or hardwood come with different price points.</p>

        <br>

        <h2><strong>Professional Fees</strong></h2>
        <p>Engaging qualified professionals like architects, engineers, and experienced contractors is crucial for a successful project. Their expertise ensures quality, compliance, and efficient project management, which, while an upfront cost, can save you money and headaches in the long run.</p>

        <br>

        <h2><strong>Permits and Approvals</strong></h2>
        <p>Don't forget the costs associated with obtaining necessary building permits from the City of Johannesburg. These fees are calculated based on the size and type of building stated in the application.</p>

        <br>

        <h2><strong>Unexpected Issues</strong></h2>
        <p>Renovation projects, especially in older homes, can uncover unforeseen problems like hidden structural damage, plumbing issues, or electrical faults. It's always wise to include a buffer in your budget (typically 10-15%) for these contingencies.</p>

        <br>

        <h2><strong>Setting a Realistic Budget</strong></h2>

        <br>

        <h3><strong>Define Your "Why"</strong></h3>
        <p>Understand the main purpose of your renovation – is it to increase home value, improve functionality, or simply update the aesthetics? This helps prioritize spending.</p>

        <br>

        <h3><strong>Prioritize</strong></h3>
        <p>Make a list of all desired renovations and prioritize them. This helps tailor services to your budget.</p>

        <br>

        <h3><strong>Get Detailed Quotes</strong></h3>
        <p>Obtain comprehensive, obligation-free quotes from reputable contractors. A detailed quote should outline all costs, ensuring transparency and no hidden fees.</p>
      `,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      date: "6 days ago",
      readTime: "11 min read",
      category: "Cost Guide",
      author: "Ants At Work Team"
    },
    {
      id: 5,
      slug: "building-materials-guide-johannesburg",
      title: "Choosing the Right Building Materials in Johannesburg: A Guide to Quality and Sustainability",
      excerpt: "The materials you choose for your construction or home renovation project in Johannesburg are fundamental to its quality, durability, and even its environmental footprint.",
      content: `
        <p>The materials you choose for your construction or home renovation project in Johannesburg are fundamental to its quality, durability, and even its environmental footprint. Selecting the right materials ensures not only a beautiful finish but also a long-lasting and sustainable investment. At Ants At Work, we prioritize sourcing top-quality materials and finishes for every project, ensuring your vision comes to life with integrity.</p>

        <br>

        <h2><strong>Common Building Materials in Johannesburg:</strong></h2>
        <p>Johannesburg's construction landscape utilizes a diverse range of materials, each with unique properties and applications:</p>

        <br>

        <h3><strong>Bricks and Blocks</strong></h3>
        <p>These are among the oldest and most common building materials, used extensively for walls, foundations, and structural elements. Options include clay, concrete, and face bricks, offering various aesthetic and structural benefits.</p>

        <br>

        <h3><strong>Cement and Concrete</strong></h3>
        <p>Essential for foundations, slabs, and structural components, cement is a binding agent in concrete, providing strength and stability.</p>

        <br>

        <h3><strong>Natural Stone</strong></h3>
        <p>Materials like granite, marble, and limestone add elegance and durability. They are used for walls, flooring, countertops, and decorative elements, offering timeless appeal.</p>

        <br>

        <h2><strong>Metals:</strong></h2>

        <br>

        <h3><strong>Steel</strong></h3>
        <p>Widely used for reinforcement within concrete structures, and for robust building frameworks, beams, and columns, ensuring longevity and safety.</p>

        <br>

        <h3><strong>Aluminium</strong></h3>
        <p>Favored for lightweight applications such as window frames and doors due to its corrosion resistance and modern aesthetic.</p>

        <br>

        <h3><strong>Copper</strong></h3>
        <p>Often used for roofing, gutters, and decorative elements, prized for its corrosion resistance and distinctive appearance.</p>

        <br>

        <h3><strong>Timber and Boards</strong></h3>
        <p>Used for roofing structures, flooring, decking, and various interior finishes. The choice of timber can significantly impact the aesthetic and structural integrity.</p>

        <br>

        <h2><strong>The Importance of Quality and Sustainability:</strong></h2>

        <br>

        <h3><strong>Durability and Longevity</strong></h3>
        <p>High-quality materials ensure your construction or renovation stands the test of time, resisting wear, tear, and environmental factors. This reduces the need for frequent repairs and replacements, saving you money in the long run.</p>

        <br>

        <h3><strong>Structural Integrity</strong></h3>
        <p>Using appropriate and certified materials is crucial for the safety and stability of any structure. This is where professional guidance and adherence to building standards become paramount.</p>

        <br>

        <h3><strong>Aesthetic Appeal</strong></h3>
        <p>The right materials contribute significantly to the overall look and feel of your home, enhancing its beauty and reflecting your personal style.</p>

        <br>

        <h3><strong>Sustainability</strong></h3>
        <p>A growing focus in Johannesburg is on eco-friendly choices. Opting for sustainable materials like bamboo, organic cotton, hemp, or linen for interiors, and considering the life cycle analysis of building materials, can reduce your environmental footprint. This also includes choosing materials that promote energy efficiency, such as good insulation and large windows for natural light.</p>

        <br>

        <h2><strong>How Ants At Work Ensures Excellence in Material Selection</strong></h2>
        <p>At Ants At Work, our commitment to excellence extends to every material we use. We work with a trusted network of suppliers to ensure top-quality materials and finishes for every project, big or small. Our team provides expert guidance on material selection, balancing your aesthetic preferences, budget, and the long-term performance of your home. We understand that the choice of materials impacts the quality, costs, and sustainability of your project, and we leverage our expertise to help you select the optimal building materials for your Johannesburg home.</p>
      `,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "1 week ago",
      readTime: "9 min read",
      category: "Materials",
      author: "Ants At Work Team"
    },
    {
      id: 6,
      slug: "benefits-nhbrc-registered-builder-johannesburg",
      title: "The Benefits of Hiring an NHBRC Registered Builder in Johannesburg",
      excerpt: "When undertaking a new home build or significant renovation in Johannesburg, one of the most critical decisions you'll make is choosing your builder.",
      content: `
        <p>When undertaking a new home build or significant renovation in Johannesburg, one of the most critical decisions you'll make is choosing your builder. Beyond experience and testimonials, looking for specific accreditations like NHBRC registration and Master Builders Association (MBA) membership is paramount. These affiliations offer vital protection and peace of mind, ensuring your project adheres to the highest industry standards.</p>

        <br>

        <h2><strong>What is the NHBRC and Why Does it Matter?</strong></h2>
        <p>The National Home Builders Registration Council (NHBRC) is a regulatory body established to protect housing consumers and regulate the home building environment in South Africa. For any new house construction, builders are legally required to be registered with the NHBRC. Failure to do so is a criminal offense.</p>

        <br>

        <h2><strong>Here's why hiring an NHBRC registered builder is crucial:</strong></h2>

        <br>

        <h3><strong>Consumer Protection</strong></h3>
        <p>The NHBRC's primary mission is to protect you, the housing consumer. They achieve this by setting home building standards and ensuring builders comply with the relevant Act.</p>

        <br>

        <h3><strong>Quality Assurance</strong></h3>
        <p>New houses undergo inspections during the building process to ensure they meet established standards. This oversight helps guarantee the quality of workmanship and materials used.</p>

        <br>

        <h3><strong>Defect Liability</strong></h3>
        <p>NHBRC registration provides a warranty against structural defects for a specified period after completion, offering you financial protection and recourse should issues arise.</p>

        <br>

        <h3><strong>Credibility and Trust</strong></h3>
        <p>A builder's NHBRC registration signals their commitment to professional standards and consumer protection, building a fundamental level of assurance for clients. Companies like Vogue Construction and H&W Builders proudly highlight their NHBRC registration as a mark of quality.</p>

        <br>

        <h2><strong>The Value of Master Builders Association (MBA) Membership</strong></h2>
        <p>Beyond NHBRC registration, membership in the Master Builders Association (MBA) further reinforces a company's professionalism and commitment to excellence. In Gauteng, the relevant body is the Master Builders Association North (MBA North), which has roots in both the Pretoria and Johannesburg Master Builders Associations, merging in 1996.</p>

        <br>

        <h2><strong>MBA membership signifies:</strong></h2>

        <br>

        <h3><strong>High Standards and Quality Construction</strong></h3>
        <p>The MBA's mission includes promoting high standards and quality construction within the industry.</p>

        <br>

        <h3><strong>Ethical Business Practices</strong></h3>
        <p>Members are expected to adhere to a code of ethics, fostering integrity and reliability in the construction sector.</p>

        <br>

        <h3><strong>Professional Development</strong></h3>
        <p>MBA provides ongoing training, legal services, and guidance on building codes and regulatory compliance, ensuring members stay updated with industry best practices.</p>

        <br>

        <h3><strong>Industry Recognition</strong></h3>
        <p>Being a long-standing member, like Ivecon Projects, demonstrates a sustained commitment to the industry and its values.</p>

        <br>

        <h2><strong>Ants At Work: Building with Trust and Accreditation</strong></h2>
        <p>At Ants At Work, we understand that your home is one of your most significant investments. That's why we are committed to upholding the highest standards of quality and professionalism. Our dedication to excellence is reflected in our adherence to industry regulations and best practices. When you choose Ants At Work, you're choosing a partner who prioritizes your peace of mind and the long-term integrity of your property.</p>

        <br>

        <p>By selecting a builder with these crucial accreditations, you're not just hiring a contractor; you're investing in a secure, high-quality, and professionally managed construction or renovation experience in Johannesburg.</p>
      `,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      date: "1 week ago",
      readTime: "8 min read",
      category: "Professional Standards",
      author: "Ants At Work Team"
    },
    {
      id: 7,
      slug: "family-owned-construction-company-johannesburg",
      title: "Why a Family-Owned Construction Company is Your Best Choice in Johannesburg",
      excerpt: "In the bustling construction and home renovation landscape of Johannesburg, choosing the right partner for your project can feel overwhelming.",
      content: `
        <p>In the bustling construction and home renovation landscape of Johannesburg, choosing the right partner for your project can feel overwhelming. While many companies offer impressive portfolios, there's a unique advantage to partnering with a family-owned business like Ants At Work. Our legacy, values, and approach offer a distinct level of commitment and trust that sets us apart.</p>

        <br>

        <h2><strong>1. A Legacy of Quality and Trust:</strong></h2>
        <p>Family-owned businesses, by their very nature, are built on a foundation of long-term vision and reputation. For Ants At Work, founded by Andrew Pietersen and now led by Dylan Pietersen, our name is synonymous with our family's integrity. This multi-generational commitment means we have a vested interest in every project's success, as it directly reflects on our family's legacy. This deep-rooted dedication often translates into an unwavering focus on "quality and trust", attributes that are paramount in an industry where clients make significant investments.</p>

        <br>

        <h2><strong>2. Personal Commitment and Accountability:</strong></h2>
        <p>Unlike larger, more corporate entities, a family-owned company often provides a more personalized and hands-on approach. The owners are directly involved in the day-to-day operations and project oversight, ensuring meticulous attention to detail and a direct line of communication. This personal stake fosters a higher degree of accountability, as the success of each project directly impacts the family's livelihood and reputation within the community.</p>

        <br>

        <h2><strong>3. Long-Term Stability and Accumulated Knowledge:</strong></h2>
        <p>A family business often implies continuity and stability. The knowledge, skills, and experience accumulated over generations are passed down, creating a rich pool of expertise. This institutional memory allows for a deeper understanding of construction challenges, innovative solutions, and a proven track record of adapting to market changes. This long-term perspective ensures that the company isn't just focused on the immediate project but on building lasting relationships and a sustainable future.</p>

        <br>

        <h2><strong>4. Values-Driven Service:</strong></h2>
        <p>For family businesses, core values like honesty, reliability, and customer satisfaction are often deeply ingrained in their operational philosophy. At Ants At Work, our belief in the power of collaboration and working closely with homeowners, architects, and designers is a testament to this. We're not just builders; we're your partners, guiding you through every step of the process with a genuine commitment to bringing your vision to life.</p>

        <br>

        <h2><strong>5. Community Roots:</strong></h2>
        <p>Family-owned businesses are often deeply embedded in their local communities. For Ants At Work in Johannesburg, this means a profound understanding of local regulations, suppliers, and the unique architectural landscape of the city. This local insight, combined with a desire to contribute positively to the community that supports them, often results in a more responsive and tailored service.</p>

        <br>

        <p>Choosing a family-owned construction company means choosing a partner with a personal stake in your satisfaction, a legacy of excellence, and a commitment to building not just structures, but lasting relationships. At Ants At Work, we embody these principles, ensuring your Johannesburg construction or renovation project is handled with the dedication and expertise it deserves.</p>
      `,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "2 weeks ago",
      readTime: "7 min read",
      category: "Company Values",
      author: "Ants At Work Team"
    },
    {
      id: 8,
      slug: "collaborative-construction-architects-engineers",
      title: "Collaborative Construction: Working with Architects and Engineers for Your Dream Home in Joburg",
      excerpt: "Building or renovating your dream home in Johannesburg is a complex undertaking, often requiring the expertise of multiple professionals.",
      content: `
        <p>Building or renovating your dream home in Johannesburg is a complex undertaking, often requiring the expertise of multiple professionals. At Ants At Work, we firmly believe that the most successful projects are born from a foundation of strong collaboration. Our integrated approach, working hand-in-hand with leading architects, designers, and engineers, ensures that your vision is not only realized but also executed with precision, efficiency, and unparalleled quality.</p>

        <br>

        <h2><strong>The Power of a Unified Team</strong></h2>
        <p>When architects, engineers, and builders collaborate from the outset, it creates a seamless flow of information and expertise. This synergy is crucial for:</p>

        <br>

        <h3><strong>Optimized Design and Functionality</strong></h3>
        <p>Architects bring creative vision and aesthetic expertise, designing spaces that are beautiful and functional. Engineers ensure structural integrity and safety, translating architectural concepts into buildable realities. When these professionals work together with the builder, potential challenges can be identified and resolved during the design phase, saving time and costly revisions during construction. Companies like HEXAD Projects emphasize this "SYNERGY" by working with "top-class consultants, subcontractors and suppliers" to proactively manage costs and minimize risks.</p>

        <br>

        <h3><strong>Streamlined Project Management</strong></h3>
        <p>A collaborative team ensures that all aspects of the project, from initial concept to final touches, are coordinated effectively. This includes managing timelines, budgets, and resources. Our project management service aims for smooth and hassle-free construction. This integrated approach minimizes miscommunication and ensures that everyone is working towards a shared goal, leading to more efficient project delivery.</p>

        <br>

        <h3><strong>Innovation and Problem-Solving</strong></h3>
        <p>Complex projects often require innovative solutions. When diverse experts pool their knowledge, they can overcome challenges more effectively and explore creative approaches that might not be possible in a siloed environment. This collaborative problem-solving leads to superior outcomes and often more sustainable and cost-effective solutions.</p>

        <br>

        <h3><strong>Quality Assurance</strong></h3>
        <p>By maintaining open communication and shared accountability, a collaborative team ensures that quality standards are upheld at every stage of construction. Regular site monitoring and adherence to meticulously planned steps contribute to a high-quality finished product.</p>

        <br>

        <h3><strong>Navigating Regulations with Ease</strong></h3>
        <p>In Johannesburg, navigating building permits and regulations can be a significant hurdle. When your builder, architect, and engineer are aligned, they can collectively ensure all plans comply with local municipal requirements, streamlining the approval process and preventing delays. Our in-house building approval expertise is a testament to this commitment.</p>

        <br>

        <h2><strong>Ants At Work: Your Collaborative Partner</strong></h2>
        <p>At Ants At Work, we don't just build; we collaborate. We foster strong relationships with Johannesburg's leading architects, designers, and engineers, ensuring that your project benefits from a collective pool of talent and experience. Our commitment to teamwork, transparency, and open communication means you are kept involved and updated at every step of the construction process. We believe that by working together, we can transform your ideas into reality, delivering a home that not only meets but exceeds your expectations.</p>

        <br>

        <p>Ready to embark on your construction journey with a truly collaborative partner? Contact Ants At Work today to discuss how our integrated approach can bring your dream home to life in Johannesburg.</p>
      `,
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "3 weeks ago",
      readTime: "10 min read",
      category: "Collaboration",
      author: "Ants At Work Team"
    },
    {
      id: 9,
      slug: "house-extensions-additions-johannesburg",
      title: "Expanding Your Space: A Guide to House Extensions and Additions in Johannesburg",
      excerpt: "As families grow or lifestyles change, the desire for more space often leads homeowners to consider a house extension. A well-planned and executed extension can not only increase your living area but also add significant value to your property. At Ants At Work, we specialize in seamless house extensions and additions, turning your current house into the home you've always envisioned.",
      content: `
        <p>As families grow or lifestyles change, the desire for more space often leads homeowners to consider a house extension. A well-planned and executed extension can not only increase your living area but also add significant value to your property. At Ants At Work, we specialize in seamless house extensions and additions, turning your current house into the home you've always envisioned.</p>

        <br>

        <h2><strong>Is an Extension the Right Choice for You?</strong></h2>
        <p>Before embarking on an extension project, it's essential to assess your needs and the potential of your property. Common reasons for extensions include:</p>

        <br>

        <ul>
          <li><strong>Growing Family:</strong> Adding new bedrooms or a playroom for children.</li>
          <li><strong>Creating New Functionality:</strong> Building a home office, a dedicated gym, or a guest suite.</li>
          <li><strong>Enhancing a Primary Space:</strong> Expanding a kitchen or living area to create an open-plan living space.</li>
          <li><strong>Maximizing Property Value:</strong> Extensions are one of the most effective ways to increase the overall value of your property.</li>
        </ul>

        <br>

        <h2><strong>Navigating the Process: What to Expect</strong></h2>
        <p>Extension projects require careful planning and professional expertise to ensure compliance with local building regulations and maximize the investment value.</p>

        <br>

        <h3><strong>Initial Consultation & Design</strong></h3>
        <p>The first step is to discuss your vision with a professional. We'll work with you to understand your needs and explore design options that align with your home's existing architecture and your budget. This is where the collaborative process with architects and designers begins, ensuring your new space is both beautiful and functional.</p>

        <br>

        <h3><strong>Building Plans & Permits</strong></h3>
        <p>Any new building or alteration that changes the structure of an existing building requires approval from the City of Joburg. This process involves submitting detailed building plans for approval. At Ants At Work, our in-house building approval expertise means we can manage this entire process for you, ensuring compliance and a stress-free experience.</p>

        <br>

        <h3><strong>Construction & Materials</strong></h3>
        <p>Once plans are approved, construction begins. The quality of materials is paramount to the durability and aesthetic of your new addition. We use a trusted network of suppliers to source top-quality materials, from structural steel to eco-friendly finishes, ensuring your extension is built to last.</p>

        <br>

        <h3><strong>Finishing Touches</strong></h3>
        <p>This final phase brings your vision to life. From electrical installations and plumbing to flooring and painting, our team ensures every detail is meticulously executed to the highest standard.</p>

        <br>

        <h2><strong>Why Choose Ants At Work for Your Johannesburg Extension?</strong></h2>
        <p>Our expertise spans the full spectrum of construction, from minor repairs to complete building construction. This versatility means we are uniquely equipped to handle the complexities of house extensions, which often involve integrating a new structure with an old one. We manage every step of the process with meticulous attention to detail, a collaborative spirit, and a commitment to delivering a high-quality finished product that blends seamlessly with your existing home.</p>

        <br>

        <p>Ready to expand your home and your life? Contact Ants At Work today to discuss your vision for a house extension in Johannesburg.</p>
      `,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80",
      date: "3 weeks ago",
      readTime: "12 min read",
      category: "House Extensions",
      author: "Ants At Work Team"
    }
  ];

  // Get the current post based on route param or use the first post as default
  const slugFromParams = params?.slug as string;
  const currentPost = post ?? allBlogPosts.find(p => p.slug === slugFromParams) ?? allBlogPosts[0];

  if (!currentPost) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-white text-[#030303] p-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Post not found</h1>
          <p className="mb-4">We couldn't find the blog post you're looking for.</p>
          <a href="/blog" className="text-blue-600 underline">Back to Blog</a>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{currentPost.title} | Ants At Work - Construction & Home Renovation</title>
        <meta name="description" content={`${currentPost.excerpt} Learn more from Johannesburg's premier construction and renovation experts.`} />
      </Helmet>

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
              {/* Navigation */}
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
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="mr-1 sm:mr-2">Contact Us</span>
                  <img className="w-4 h-4 sm:w-6 sm:h-6" alt="Arrow" src="https://c.animaapp.com/megx9igh612D8f/img/svg.svg" />
                </Button>
              </div>
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <button className="text-black transition-colors p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
            <div className="w-[80px] h-[70px] bg-cover bg-center cursor-pointer" style={{ backgroundImage: `url(${headerLogo})` }} onClick={() => window.location.href = '/'} />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-black text-2xl font-bold hover:text-gray-600 transition-colors p-2">×</button>
          </div>
          <nav className="pt-8 px-8 space-y-6">
            <a href="/" className="block text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="/#services" className="block text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="/#about" className="block text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="/#gallery" className="block text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
            <a href="/#clients" className="block text-[#030303] hover:text-[#ffde17] transition-colors cursor-pointer text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Clients</a>
            <a href="/blog" className="block text-[#030303] hover:text-[#ffde17] transition-colors text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="pt-20 sm:pt-24 lg:pt-28">
          <section className="bg-white py-8 sm:py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6">
                <a href="/blog" className="text-[#030303] hover:text-gray-600 transition-colors">← Back to Blog</a>
              </div>

              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm text-[#030303] font-semibold">{currentPost.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{currentPost.date}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{currentPost.readTime}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#030303] mb-4 leading-tight">{currentPost.title}</h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-6">{currentPost.excerpt}</p>
              </div>

              <div className="mb-8">
                <div className="w-full h-64 sm:h-80 lg:h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${currentPost.image})` }}></div>
              </div>

              <article className="prose prose-lg max-w-none">
                <div className="text-[#030303] leading-relaxed" dangerouslySetInnerHTML={{ __html: currentPost.content }} />
              </article>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section className="relative bg-[#f3fff6] py-16">
          <div className="max-w-6xl mx-auto px-8 lg:px-16">
            <div className="bg-[#ffde17] rounded-2xl shadow-2xl p-8 sm:p-12 lg:p-16 relative -mb-24 sm:-mb-24 lg:-mb-32 z-[9999]">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#030303] mb-8 sm:mb-12 lg:mb-16 hover:scale-105 transition-transform duration-300 animate-fade-in-up px-4">
                  LET'S <span className="[font-family:'Permanent_Marker',Helvetica]">BUILD</span> TOGETHER
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-[#030303] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ffde17] group-hover:scale-110 transition-all duration-300">
                      <svg className="w-8 h-8 text-[#ffde17] group-hover:text-[#030303] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#030303] mb-2">Call Us</h3>
                    <div className="text-[#030303]"><div>082 959 1599</div></div>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-[#030303] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ffde17] group-hover:scale-110 transition-all duration-300">
                      <svg className="w-8 h-8 text-[#ffde17] group-hover:text-[#030303] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#030303] mb-2">Mail Us</h3>
                    <div className="text-[#030303]"><div>antsatwork2005@gmail.com</div></div>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-[#030303] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ffde17] group-hover:scale-110 transition-all duration-300">
                      <svg className="w-8 h-8 text-[#ffde17] group-hover:text-[#030303] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#030303] mb-2">Follow Us</h3>
                    <div className="flex justify-center space-x-4">
                      <a href="https://web.facebook.com/profile.php?id=61576980251996" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <svg className="w-8 h-8 text-[#030303]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/antsatwork_za/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <svg className="w-8 h-8 text-[#030303]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.354 2.617 6.78 6.979 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.163zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
          <div className="bg-[#111110] pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 relative z-10">
            <div className="w-full px-4 sm:px-8 lg:px-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex-1">
                  <div className="w-[150px] sm:w-[180px] lg:w-[200px] h-[132px] sm:h-[158px] lg:h-[176px] bg-cover bg-center mb-4" style={{ backgroundImage: `url(${footerLogo})` }} />
                </div>
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
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Contact Details</h3>
                  <div className="space-y-2 sm:space-y-3 text-white text-xs sm:text-sm">
                    <div><strong>Address:</strong><br />Randburg, Gauteng, South Africa</div>
                    <div><strong>Email:</strong><br />antsatwork2005@gmail.com</div>
                    <div><strong>Phone:</strong><br />082 959 1599</div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-white text-xs sm:text-sm mb-4 md:mb-0">© 2024 Ants at Work. All Rights Reserved.</div>
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
                  <button onClick={() => setShowPrivacyModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                </div>
                <div className="text-sm text-gray-700 space-y-4">
                  <p><strong>Last updated: January 2024</strong></p>
                  <h3 className="text-lg font-semibold">1. Information We Collect</h3>
                  <p>We collect information you provide directly to us...</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPostPage;
