export default function StructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Soukhyaa",
    "alternateName": "Soukhyaa Hospital Uniforms",
    "description": "Premium hospital uniforms for healthcare professionals. Comfort, professionalism, and hygiene in one.",
    "url": "https://soukhyaa.com",
    "logo": "https://soukhyaa.com/logos/Soukhyaa%20logo.png",
    "image": [
      "https://soukhyaa.com/logos/Soukhyaa%20logo.png",
      "https://soukhyaa.com/images/doctor-coat.jpg",
      "https://soukhyaa.com/images/nursing-scrubs.jpg",
      "https://soukhyaa.com/images/lab-coat.jpg"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXX-XXXXXX", // Replace with actual phone number
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "sameAs": [
      "https://www.linkedin.com/company/soukhyaa",
      "https://www.facebook.com/soukhyaa",
      "https://www.instagram.com/soukhyaa"
    ],
    "foundingDate": "2014",
    "numberOfEmployees": "50-100",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hospital Uniforms and Medical Apparel",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Doctor Coats",
            "description": "Crisp, professional, stain-resistant coats designed for comfort during long shifts.",
            "image": "https://soukhyaa.com/images/doctor-coat.jpg",
            "category": "Medical Apparel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Nursing Scrubs",
            "description": "Lightweight, multiple colors, long-shift friendly scrubs for healthcare professionals.",
            "image": "https://soukhyaa.com/images/nursing-scrubs.jpg",
            "category": "Medical Apparel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Lab Coats & Technician Wear",
            "description": "Protective and practical wear for laboratory and technical staff.",
            "image": "https://soukhyaa.com/images/lab-coat.jpg",
            "category": "Medical Apparel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Support Staff Uniforms",
            "description": "Durable and easy-care uniforms for hospital support staff.",
            "image": "https://soukhyaa.com/images/support-uniform.jpg",
            "category": "Medical Apparel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Customized Uniforms",
            "description": "Personalized uniforms with logos, embroidery, and hospital branding.",
            "image": "https://soukhyaa.com/images/custom-uniform.jpg",
            "category": "Medical Apparel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Specialized Wear",
            "description": "Specialized uniforms for different medical departments and requirements.",
            "image": "https://soukhyaa.com/images/specialized-wear.jpg",
            "category": "Medical Apparel"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "knowsAbout": [
      "Hospital Uniforms",
      "Medical Scrubs",
      "Doctor Coats",
      "Nursing Uniforms",
      "Healthcare Apparel",
      "Medical Clothing",
      "Lab Coats",
      "Custom Medical Uniforms"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Soukhyaa",
    "alternateName": "Soukhyaa Hospital Uniforms",
    "url": "https://soukhyaa.com",
    "description": "Premium hospital uniforms for healthcare professionals. Trusted by 500+ hospitals across India.",
    "publisher": {
      "@type": "Organization",
      "name": "Soukhyaa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://soukhyaa.com/logos/Soukhyaa%20logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://soukhyaa.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Soukhyaa",
      "url": "https://soukhyaa.com"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://soukhyaa.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://soukhyaa.com/#products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://soukhyaa.com/#about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://soukhyaa.com/#contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

