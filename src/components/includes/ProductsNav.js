import React from 'react'
import "../../App.css"
import { NavLink, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function ProductsNav() {
    const products = [
        { name: 'Stylish Shirt', description: 'A comfortable and trendy shirt for any occasion. Available in various colors and sizes.', price: 29.99 },
        { name: 'Elegant Dress', description: 'A classy and elegant dress perfect for special events. Limited stock, order now!', price: 49.99 },
        { name: 'Casual Jeans', description: 'Comfortable and stylish jeans for a casual and trendy look. Available in different sizes.', price: 39.99 },
        { name: 'Fashionable Sneakers', description: 'Sporty and stylish sneakers for an active lifestyle. Choose your favorite color.', price: 59.99 },
        { name: 'Trendy Sunglasses', description: 'Protect your eyes with these fashionable sunglasses. UV protection included.', price: 19.99 },
        { name: 'Chic Handbag', description: 'Accessorize your outfit with this chic handbag. Spacious and stylish.', price: 44.99 },
        { name: 'Classic Watch', description: 'Timeless elegance with this classic wristwatch. Suitable for any occasion.', price: 79.99 },
        { name: 'Cozy Sweater', description: 'Stay warm and stylish with this cozy sweater. Perfect for the colder months.', price: 34.99 },
        { name: 'Formal Blazer', description: 'Elevate your look with this formal blazer. Ideal for business meetings and events.', price: 89.99 },
        { name: 'Trendsetting Hat', description: 'Complete your look with this trendsetting hat. Available in various styles.', price: 24.99 },
        { name: 'Boho-Chic Skirt', description: 'Express your unique style with this boho-chic skirt. Comfortable and trendy.', price: 54.99 },
        { name: 'Statement Earrings', description: 'Make a statement with these eye-catching earrings. Perfect for special occasions.', price: 14.99 },
        { name: 'Slim Fit Trousers', description: 'Achieve a sleek look with these slim fit trousers. Versatile and comfortable.', price: 49.99 },
        { name: 'Active Lifestyle Jacket', description: 'Embrace an active lifestyle with this lightweight and durable jacket.', price: 69.99 },
        { name: 'Quilted Backpack', description: 'Carry your essentials in style with this quilted backpack. Practical and fashionable.', price: 39.99 },
        { name: 'Printed Scarf', description: 'Add a pop of color to your outfit with this printed scarf. Versatile and trendy.', price: 19.99 },
        { name: 'Modern Sneaker Boots', description: 'Combine style and comfort with these modern sneaker boots. Perfect for everyday wear.', price: 54.99 },
        { name: 'Leather Belt', description: 'Complete your look with this classic leather belt. Timeless and versatile.', price: 29.99 },
        { name: 'Fancy Cocktail Dress', description: 'Dazzle at parties with this fancy cocktail dress. Elegant and glamorous.', price: 79.99 },
        { name: 'Cotton Summer Shorts', description: 'Stay cool in the summer with these comfortable cotton shorts. Stylish and breathable.', price: 24.99 },
        { name: 'Smartphone', description: 'High-performance smartphone with the latest features. Stay connected in style.', price: 599.99 },
        { name: 'Laptop', description: 'Powerful laptop for work and entertainment. Sleek design and impressive performance.', price: 899.99 },
        { name: 'Smart TV', description: 'Immersive smart TV with 4K resolution. Enjoy your favorite shows and movies with stunning clarity.', price: 699.99 },
        { name: 'Wireless Earbuds', description: 'True wireless earbuds with noise cancellation. Crystal clear sound for an immersive audio experience.', price: 129.99 },
        { name: 'Digital Camera', description: 'Capture every moment with this high-quality digital camera. Perfect for photography enthusiasts.', price: 499.99 },
        { name: 'Gaming Console', description: 'Next-gen gaming console for a premium gaming experience. Play the latest games with cutting-edge technology.', price: 449.99 },
        { name: 'Smart Watch', description: 'Stay fit and connected with this feature-packed smartwatch. Monitor your health and receive notifications on the go.', price: 249.99 },
        { name: 'Wireless Router', description: 'High-speed wireless router for seamless internet connectivity. Stream, work, and play without interruptions.', price: 79.99 },
        { name: 'Portable Bluetooth Speaker', description: 'Compact and powerful Bluetooth speaker for music lovers on the go. Enjoy your favorite tunes with great sound quality.', price: 59.99 },
        { name: 'External Hard Drive', description: 'Expand your storage with this reliable external hard drive. Ideal for backing up your important data.', price: 129.99 },
        { name: 'VR Headset', description: 'Immerse yourself in virtual reality with this advanced VR headset. Explore virtual worlds with stunning realism.', price: 299.99 },
        { name: 'Smart Thermostat', description: "Control your home's temperature from anywhere with this smart thermostat. Save energy and stay comfortable.", price: 129.99 },
        { name: 'Robot Vacuum Cleaner', description: 'Effortlessly keep your home clean with this smart robot vacuum. Set it and forget it for a tidy living space.', price: 199.99 },
        { name: 'Fitness Tracker', description: 'Track your fitness goals with this sleek fitness tracker. Monitor your steps, heart rate, and more.', price: 79.99 },
        { name: 'Wi-Fi Security Camera', description: 'Keep an eye on your home with this Wi-Fi security camera. Monitor from your smartphone for added peace of mind.', price: 149.99 },
        { name: 'Smart Home Hub', description: 'Centralize control of your smart home devices with this smart home hub. Make your home more efficient and connected.', price: 129.99 },
        { name: 'Wireless Charging Pad', description: 'Charge your devices wirelessly with this convenient charging pad. Compatible with the latest smartphones.', price: 39.99 },
        { name: 'Graphic Design Tablet', description: 'Unleash your creativity with this graphic design tablet. Perfect for digital artists and illustrators.', price: 199.99 },
        { name: 'Bluetooth Noise-Canceling Headphones', description: 'Enjoy immersive audio with these Bluetooth headphones. Active noise cancellation for a distraction-free experience.', price: 149.99 },
        { name: '4K Monitor', description: 'Experience stunning visuals with this 4K monitor. Ideal for gaming, design, and multimedia content.', price: 349.99 },
      ];
    return (
        <>
            <Helmet>
                <title>ALAFIIF LANDSCAPING | Products</title>
            </Helmet>
            <div className='products-nav'>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="">All</NavLink>
                        </li>
                        <li>
                            <NavLink to="fashion">Fashion</NavLink>
                        </li>
                        <li>
                            <NavLink to="electronics">Electronics</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />

            <div className='All'>
                <div className='fashion'>
                    <h1>All Products</h1>
        
              	    {products.map((product, index) => (
			    	    <div>
	                	    <div key={index} className="product">
        	         		    <h2>{product.name}</h2>
                	      		<p>Description: {product.description}</p>
                	  		    <p>Price: ${product.price.toFixed(2)}</p>
                		    </div>
			    	    </div>
                	))}
                </div>
                <div className='electronics'>
  
                {products.map((product, index) => (
                    <div>
                        <div key={index} className="products">
                            <h2>{product.name}</h2>
                            <p>Description: {product.description}</p>
                            <p>Price: ${product.price.toFixed(2)}</p>
                          </div>
                    </div>
                ))}
                </div>
                </div>
            </>
        )
}
