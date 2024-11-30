import React from 'react';
import '../../assets/css/SEOPage.css'; // Add custom styles here
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';


const WebDev = () => {

  return (
    <div className="seo-page">
      <header className="seo-header">
        <h1>Build a Digital Home for Your Brand</h1>
        <h2>Convert Visitors into Loyal Customers with Stunning Websites and High-Converting Landing Page</h2>
      </header>
      <section className="seo-benefits">
  <h3 className="benefits-title">Benefits</h3>
  <ul className="benefits-list">
    <li>
      <strong>Professional Design:</strong> Custom designs tailored to your brand's identity.
    </li>
    <li>
      <strong>High-Converting Pages:</strong> Optimized for sales, lead generation, and user engagement.
</li>
    <li>
      <strong>Mobile Responsivenes:</strong>  Seamless user experience across devices.
    </li>
  </ul>
</section>

      <section className="seo-plans">
        <h3>Plans & Pricing</h3>
        <PricingTable highlightColor="#1976D2">
          <PricingSlot
            onClick={() => window.open('/contact', '_blank')}
            buttonText="Book an Appointment"
            title="Basic Website Plan:"
            priceText="₹25,000"
          >
            <PricingDetail>5 pages (Home, About, Services, Contact, Blog)
            </PricingDetail>
            <PricingDetail>Responsive design</PricingDetail>
            <PricingDetail>Basic SEO setup</PricingDetail>
          </PricingSlot>
          <PricingSlot
            highlighted
            onClick={() => window.open('/contact', '_blank')}
            buttonText="Standard Website Plan"
            title="Standard SEO Plan"
            priceText="₹50,000/month"
          >
            <PricingDetail>Advanced SEO and analytics integration</PricingDetail>
            <PricingDetail>Custom landing page for campaigns
            </PricingDetail>
            <PricingDetail>Upto 10 Pages.</PricingDetail>
          </PricingSlot>
          <PricingSlot
      onClick={() => window.open('/contact', '_blank')}
            buttonText="Book an Appointment"
            title="Premium Website Plan"
            priceText="₹80,000/month"
          >
            <PricingDetail>Advanced customizations and performance optimization</PricingDetail>
            <PricingDetail>E-commerce functionality</PricingDetail>
            <PricingDetail>More than 10 Pages</PricingDetail>
          </PricingSlot>
        </PricingTable>
      </section>
  
      <section className="seo-example">
        <h3>Success Story</h3>
        <p>
         A  local bakery achieved 70% increased online orders after launching a responsive website with custom landing pages for seasonal offers.

        </p>
        <img
          src={`${process.env.PUBLIC_URL}/Image/seo.jpg`}
          alt="Traffic Growth Chart"
          className="seo-chart"
        />
      </section>
      
    </div>
  );
};

export default WebDev;
