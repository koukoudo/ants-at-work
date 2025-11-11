import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQItem[];
  pageUrl: string;
}

export const FAQStructuredData: React.FC<FAQStructuredDataProps> = ({ faqs, pageUrl }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    "url": pageUrl
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

// Example FAQ data that can be used for construction services
export const constructionFAQData: FAQItem[] = [
  {
    question: "How long does a typical home renovation project take?",
    answer: "The timeline varies significantly depending on the scope and complexity of your project. A simple kitchen renovation typically takes 2-4 weeks, while a full home renovation can span 8-24 weeks. At Ants At Work, we provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you provide building approvals?",
    answer: "Yes, our in-house building approval expertise is a cornerstone of our service. We handle the complete building approval process with Johannesburg City Council's requirements, streamlining the journey from concept to construction commencement."
  },
  {
    question: "Are NHBRC registered builders required for construction?",
    answer: "Yes, home builders in South Africa are legally required to be registered with the National Home Builders Registration Council (NHBRC) for any new house construction. This registration provides consumer protection and quality assurance for your project."
  },
  {
    question: "What areas do you service in Johannesburg?",
    answer: "We primarily serve Johannesburg, with a strong focus on Randburg and surrounding areas in Gauteng. Our location gives us excellent knowledge of local regulations, suppliers, and construction requirements."
  },
  {
    question: "Do you offer project management services?",
    answer: "Yes, we provide comprehensive project management services to ensure smooth and hassle-free construction. This includes coordinating with architects, engineers, and suppliers, managing timelines and budgets, and maintaining quality throughout the process."
  }
];
