import React from 'react';
import '../../assets/css/SEOPage.css'; // Add custom styles here
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';

const SocialMedia = () => {
 

  return (
    <div className="seo-page">
      <header className="seo-header">
        <h1> Your Brand’s Voice, Amplified</h1>
        <h2>Engage, Grow, and Thrive with Tailored Social Media Strategies</h2>
      </header>
      <section className="seo-benefits">
  <h3 className="benefits-title">Benefits:</h3>
  <ul className="benefits-list">
    <li>
      <strong>Engage Your Audienc</strong> Build strong connections through tailored content.
    </li>
    <li>
      <strong>Consistent Growth:</strong> Weekly increase in followers and engagement.
    </li>
    <li>
      <strong>Content That Converts:</strong> Strategic posts, reels, and stories that reflect your brand.

    </li>
  </ul>
</section>

      <section className="seo-plans">
        <h3>Plans & Pricing</h3>
        <PricingTable highlightColor="#1976D2">
          <PricingSlot
        onClick={() => window.open('/contact', '_blank')}
            buttonText="Book an Appointment"
            title="Basic Plan"
            priceText="₹8,990/month"
          >
        
            <PricingDetail>Weekly growth: 250 followers (organic + paid)</PricingDetail>
            <PricingDetail>Profile optimization and content posting</PricingDetail>
            <PricingDetail></PricingDetail>
          </PricingSlot>
          <PricingSlot
            highlighted
            onClick={() => window.open('/contact', '_blank')}
            buttonText="Book an Appointment"
            title="Standard Plan"
            priceText="₹12,999/month"
          >
            <PricingDetail>Weekly growth: 500 followers (organic + paid)</PricingDetail>
            <PricingDetail>Professional content creation (banners, reels, stories)

</PricingDetail>
            <PricingDetail></PricingDetail>
          </PricingSlot>
          <PricingSlot
          onClick={() => window.open('/contact', '_blank')}
            buttonText="Book an Appointment"
            title="Premium Plan"
            priceText="₹18,999/month"
          >
            <PricingDetail>Weekly growth: 1,000 followers (organic + paid) </PricingDetail>
            <PricingDetail>Ad campaign management and advanced analytics</PricingDetail>
            
            <PricingDetail></PricingDetail>
          </PricingSlot>
        </PricingTable>
      </section>
  
      <section className="seo-example">
        <h3>Success Story</h3>
        <p>
        A fitness influencer grew their followers by 2,000 in just 3 months, securing multiple brand collaborations worth ₹75,000.

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

export default SocialMedia;
