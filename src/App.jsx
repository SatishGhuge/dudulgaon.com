import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import PostDetails from './pages/PostDetails';
import AdminPostForm from './pages/AdminPostForm';
import Media from './pages/Media';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/admin/posts/new" element={<AdminPostForm />} />
      <Route path="/media" element={<Media />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
