import React from 'react';
import '../assets/css/SEOPage.css'; // Add custom styles here
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';


const SEO = () => {
  const handleSignup = (plan) => {
    alert(`You selected the ${plan} plan!`);
  };

  return (
    <div className="seo-page">
      <header className="seo-header">
        <h1>Be Found Where It Matters</h1>
        <h2>Rank Higher on Search Engines and Drive Organic Traffic</h2>
      </header>
      <section className="seo-benefits">
  <h3 className="benefits-title">Benefits</h3>
  <ul className="benefits-list">
    <li>
      <strong>Higher Visibility:</strong> Improve rankings on Google and attract more visitors.
    </li>
    <li>
      <strong>Better Traffic:</strong> Drive quality, cost-effective traffic with optimized content.
    </li>
    <li>
      <strong>Competitive Edge:</strong> Dominate your niche and outperform competitors.
    </li>
  </ul>
</section>

      <section className="seo-plans">
        <h3>Plans & Pricing</h3>
        <PricingTable highlightColor="#1976D2">
          <PricingSlot
            onClick={() => handleSignup('Starter')}
            buttonText="Book an Appointment"
            title="Starter SEO Plan"
            priceText="₹12,000/month"
          >
            <PricingDetail>On-page SEO for 5 pages</PricingDetail>
            <PricingDetail>Monthly performance report</PricingDetail>
            <PricingDetail>Basic keyword research</PricingDetail>
          </PricingSlot>
          <PricingSlot
            highlighted
            onClick={() => handleSignup('Standard')}
            buttonText="Book an Appointment"
            title="Standard SEO Plan"
            priceText="₹20,000/month"
          >
            <PricingDetail>On-page + Off-page SEO for 10 pages</PricingDetail>
            <PricingDetail>Bi-weekly performance updates</PricingDetail>
            <PricingDetail>Competitor analysis</PricingDetail>
          </PricingSlot>
          <PricingSlot
            onClick={() => handleSignup('Premium')}
            buttonText="Book an Appointment"
            title="Premium SEO Plan"
            priceText="₹35,000/month"
          >
            <PricingDetail>Advanced SEO for 20+ pages</PricingDetail>
            <PricingDetail>AI-driven keyword tracking</PricingDetail>
            <PricingDetail>Backlink strategy</PricingDetail>
          </PricingSlot>
        </PricingTable>
      </section>
  
      <section className="seo-example">
        <h3>Success Story</h3>
        <p>
          A small tech startup moved from page 5 to page 1 on Google in 3 months,
          leading to a 40% increase in organic leads.
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

export default SEO;
