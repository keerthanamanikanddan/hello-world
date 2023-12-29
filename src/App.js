import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import "./App.css"
import Home from "./components/screens/Home"
import About from "./components/screens/About"
import Contact from "./components/screens/Contact"
import Nav from './components/includes/Nav'
import NoMatch from './components/screens/NoMatch'
import ProductsNav from './components/includes/ProductsNav'
import Products from './components/screens/Products'
import Fashion from './components/screens/Fashion'
import Electronics from './components/screens/Electronics'

export default function App() {
  	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/products" element={<ProductsNav />}>
					<Route index element={<ProductsNav />}/>
					<Route path="fashion" element={<Fashion />} />
					<Route path="electronics" element={<Electronics />} />
				</Route>
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</Router>
	)
}
