// import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import MovieList from './components/MovieList'
// export default function App() {
//   return (
//     <BrowserRouter>
//        <Navbar/>
//        <Hero/>
//        <MovieList/>
//        {/* <MovieList addToCart={addToCart} /> 
//             <CartItems cart={cart} removeFromCart={removeFromCart} /> Pass cart and removeFromCart */}
//     </BrowserRouter>
//   )
// }
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieList from './components/MovieList';
import CartItems from './components/CartItems'; // Import CartItems component

export default function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (movie) => {
        setCart((prevCart) => [...prevCart, movie]);
        console.log('Added to cart:', movie);
    };

    const removeFromCart = (movieId) => {
        setCart((prevCart) => prevCart.filter(movie => movie.id !== movieId));
        console.log('Removed from cart:', movieId);
    };

    return (
        <BrowserRouter>
            <Navbar cartCount={cart.length} /> {/* Pass cartCount to Navbar */}
            <Hero />
            <Routes>
                <Route path="/" element={<MovieList addToCart={addToCart} />} />
                <Route path="/cart" element={<CartItems cart={cart} removeFromCart={removeFromCart} />} /> {/* Cart route */}
            </Routes>
        </BrowserRouter>
    );
}