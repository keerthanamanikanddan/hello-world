import React from 'react'
import "../../App.css"

export default function Fashion() {
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
      ];
    
      return (
        <div className='fashion'>
          <h1>Fashion Products</h1>
    
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
      );
}
