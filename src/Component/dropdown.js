import React, { useState } from 'react';
import './header.css';

const Dropdown = ({ activeCategory, toggleCategory }) => {
    return (
        <div className="services-dropdown">
            <div className="services-category">
                <div className="category-header" onClick={() => toggleCategory('brand')}>
                    <span>BRAND</span>
                    <span>{activeCategory === 'brand' ? '▾' : '▸'}</span>
                </div>
                {activeCategory === 'brand' && (
                    <div className="category-content">
                        <a href="/services/google-my-business">Google My Business</a>
                        <a href="/services/seo">Search Engine Optimization</a>
                    </div>
                )}
            </div>
            <div className="services-category">
                <div className="category-header" onClick={() => toggleCategory('digital')}>
                    <span>DIGITAL</span>
                    <span>{activeCategory === 'digital' ? '▾' : '▸'}</span>
                </div>
                {activeCategory === 'digital' && (
                    <div className="category-content">
                        <a href="/services/performance-marketing">Performance Marketing</a>
                        <a href="/services/social-media">Social Media Management</a>
                    </div>
                )}
            </div>
            <div className="services-category">
                <div className="category-header" onClick={() => toggleCategory('product')}>
                    <span>PRODUCT</span>
                    <span>{activeCategory === 'product' ? '▾' : '▸'}</span>
                </div>
                {activeCategory === 'product' && (
                    <div className="category-content">
                        <a href="/services/product-discovery">Product Discovery</a>
                        <a href="/services/webdev">Complete Web Development and Services</a>
                        <a href="/services/mobile-app-design">Landing Page for Lead Generation</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
