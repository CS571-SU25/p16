import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router';
import NavigationBar from '../NavigationBar';
import Footer from '../Footer';
import Favorites from '../SavedProjects';
import Home from '../content/Home';
import AboutMe from '../content/AboutMe';
import Projects from '../content/Projects';
import Contact from '../content/Contact';
import Education from '../content/Education';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from '../ThemeToggle';


export default function App() {  
  const [favorites, setFavorites] = useState(() => {
    try {
      const json = localStorage.getItem('favorites');
      return json ? JSON.parse(json) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = proj => {
    setFavorites(favs =>
      favs.some(f => f.id === proj.id)
        ? favs.filter(f => f.id !== proj.id)
        : [...favs, proj]
    );
  };

  return (
    <ThemeProvider>
      <HashRouter>
        <NavigationBar>
          <ThemeToggle />
        </NavigationBar>

        <main className="flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route
              path="/projects"
              element={
                <Projects
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/favorites" element={<Favorites items={favorites} />} />
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
        </main>

        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}
