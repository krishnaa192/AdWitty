import React from 'react'
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import '../../assets/css/SEOPage.css'; // Add custom styles here

const PerformanceMarketing = () => {
   
      return (
        <div className="seo-page">
          <header className="seo-header">
            <h1> Maximize Your ROI</h1>
            <h2>Data-Driven Ad Campaigns That Deliver Results</h2>
          </header>
          <section className="seo-benefits">
      <h3 className="benefits-title">Benefits</h3>
      <ul className="benefits-list">
        <li>
          <strong>Targeted Advertising: </strong> Reach the right audience at the right time.
        </li>
        <li>
          <strong>Optimized ROI:</strong> Get the most out of every ad rupee spent.
        </li>
        <li>
          <strong>Real-Time Metrics</strong>  Track, measure, and optimize ad performance.
        </li>
      </ul>
    </section>
    
          <section className="seo-plans">
            <h3>Plans & Pricing</h3>
            <PricingTable highlightColor="#1976D2">
              <PricingSlot
              onClick={() => window.open('/contact', '_blank')}
                buttonText="Book an Appointment"
                title="Starter SEO Plan"
                priceText="₹20,000/month"
              >
                <PricingDetail>Basic ad setup</PricingDetail>
                <PricingDetail>Campaign for one platform (e.g., Facebook or Google)</PricingDetail>
                <PricingDetail>Weekly performance reports</PricingDetail>
              </PricingSlot>
              <PricingSlot
                highlighted
                onClick={() => window.open('/contact', '_blank')}
                buttonText="Book an Appointment"
                title="Standard Plan"
                priceText="₹35,000/month"
              >
                <PricingDetail>Multi-platform campaigns (Facebook, Google, Instagram)</PricingDetail>
                <PricingDetail>A/B testing and optimization</PricingDetail>
                <PricingDetail>A/B testing and optimization</PricingDetail>
              </PricingSlot>
              <PricingSlot
             onClick={() => window.open('/contact', '_blank')}
                buttonText="Book an Appointment"
                title="Premium  Plan"
                priceText="₹50,000/month"
              >
                <PricingDetail>Advanced targeting and retargeting</PricingDetail>
                <PricingDetail>High-budget campaign scaling</PricingDetail>
                <PricingDetail>Dedicated account manager</PricingDetail>
              </PricingSlot>
            </PricingTable>
          </section>
      
          <section className="seo-example">
            <h3>Success Story</h3>
            <p>
            An e-commerce business reduced its customer acquisition cost by 40% while doubling sales within three months of using optimized ad campaigns.

            </p>
            <img
              src={`${process.env.PUBLIC_URL}/Image/seo.jpg`}
              alt="Traffic Growth Chart"
              className="seo-chart"
            />
          </section>
          
        </div>
      );
}

export default PerformanceMarketing
