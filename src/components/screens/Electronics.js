import React from 'react'
import "../../App.css"

export default function Electronics() {
    const products = [
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
        <div className='electronics'>
          <h1>Electronics Products</h1>
    
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
      );
}
