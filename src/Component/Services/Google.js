import React from 'react';
import '../../assets/css/SEOPage.css'; // Add custom styles here
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';

const GoogleMyBusiness = () => {
 
  return (
    <div className="seo-page">
      <header className="seo-header">
        <h1>Get Discovered Locally with Google My Business</h1>
        <h2>Enhance Your Local Visibility and Attract Nearby Customers</h2>
      </header>
      <section className="seo-benefits">
  <h3 className="benefits-title">Why Choose Google My Business?</h3>
  Google My Business is the cornerstone of local SEO. An optimized GMB profile ensures your business stands out in Google Search and Maps, helping potential customers find and trust you.
<h3 className='benifit-title'>
Benefits of GMB Optimization
</h3>
  <ul className="benefits-list">
    <li>
      <strong>Increased Local Visibility</strong> Appear in the coveted "3-Pack" of local search results.
Attract nearby customers actively searching for your services.

    </li>
    <li>
      <strong>Customer Trust:</strong>Showcase glowing reviews and ratings to build credibility.
Display accurate business details, including location, hours, and services.

    </li>
    <li>
      <strong>Engagement and Insights:</strong> Post updates about offers, events, and news directly on your GMB profile.
Gain actionable insights into customer interactions and behaviors.

    </li>
  </ul>
</section>

      <section className="seo-plans">
        <h3>Plans & Pricing</h3>
        <PricingTable highlightColor="#1976D2">
          <PricingSlot
           onClick={() => window.open('/contact', '_blank')}
            buttonText="Book an Appointment"
            title="Starter Plan"
            priceText="₹7,000/month"
          >
        
            <PricingDetail>Business details and service area optimization</PricingDetail>
            <PricingDetail>Upload photos and branding assets</PricingDetail>
            <PricingDetail>GMB profile setup</PricingDetail>
          </PricingSlot>
          <PricingSlot
  highlighted
  onClick={() => window.open('/contact', '_blank')}
  buttonText="Book an Appointment"
  title="Standard Plan"
  priceText="₹12,000/month"
>

            <PricingDetail>Weekly GMB post updates (offers, events, and news)</PricingDetail>
            <PricingDetail>5-star review generation strategy

</PricingDetail>
            <PricingDetail>Competitor analysis</PricingDetail>
          </PricingSlot>
          <PricingSlot
            onClick={() => window.open('/contact', '_blank')}
            buttonText="Book an Appointment"
            title="Premium Plan"
            priceText="₹18,000/month"
          >
            <PricingDetail>Review management and response strategy </PricingDetail>
            <PricingDetail>Monthly insights and analytics reports.</PricingDetail>
            
            <PricingDetail>Full GMB audit and optimization</PricingDetail>
          </PricingSlot>
        </PricingTable>
      </section>
  
      <section className="seo-example">
        <h3>Success Story</h3>
        <p>
        A boutique salon saw a 50% increase in bookings within 30 days of optimizing their GMB profile. By posting weekly offers and highlighting customer reviews, they consistently appeared in the top 3 local search results.
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

export default GoogleMyBusiness;
