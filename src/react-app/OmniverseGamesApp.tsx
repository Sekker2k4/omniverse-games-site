import React, { useState, useEffect } from 'react';

const OmniverseGamesApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-section').forEach(el => {
      observer.observe(el);
    });

    // Header background on scroll
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
          header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Particle effect
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: rgba(0, 212, 255, 0.6);
        pointer-events: none;
        z-index: -1;
        border-radius: 50%;
        left: ${Math.random() * window.innerWidth}px;
        top: ${window.innerHeight}px;
      `;
      
      document.body.appendChild(particle);
      
      const animation = particle.animate([
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
      ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'ease-out'
      });
      
      animation.onfinish = () => particle.remove();
    };

    const particleInterval = setInterval(createParticle, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(particleInterval);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Orbitron', 'Arial', sans-serif;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          color: #ffffff;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 60% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 10% 30%, rgba(0, 255, 200, 0.2) 0%, transparent 40%);
          overflow: hidden;
        }

        .hero-background::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: 
            repeating-conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg, 
              rgba(255, 255, 255, 0.03) 1deg, 
              transparent 2deg, 
              transparent 10deg),
            conic-gradient(from 0deg at 30% 70%, 
              rgba(0, 200, 255, 0.1), 
              rgba(255, 0, 128, 0.1), 
              rgba(0, 255, 200, 0.1), 
              rgba(255, 255, 0, 0.1),
              rgba(0, 200, 255, 0.1));
          animation: omniverseRotation 20s linear infinite;
        }

        .hero-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(ellipse at 25% 25%, rgba(0, 200, 255, 0.2) 0%, transparent 70%),
            radial-gradient(ellipse at 75% 75%, rgba(255, 0, 128, 0.2) 0%, transparent 70%),
            radial-gradient(ellipse at 75% 25%, rgba(0, 255, 200, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 25% 75%, rgba(255, 255, 0, 0.15) 0%, transparent 60%);
          animation: omniversePulse 8s ease-in-out infinite alternate;
        }

        @keyframes omniverseRotation {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes omniversePulse {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
          100% { opacity: 0.4; transform: scale(0.95); }
        }

        .hero-title {
          font-size: 4rem;
          font-family: 'Orbitron', monospace;
          font-weight: 900;
          color: #ffffff;
          text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.8),
            0 0 20px rgba(255, 255, 255, 0.6),
            0 0 30px rgba(255, 255, 255, 0.4),
            0 0 40px rgba(255, 255, 255, 0.2);
          animation: whiteGlow 2s ease-in-out infinite alternate;
          letter-spacing: 2px;
        }

        @keyframes whiteGlow {
          from { 
            text-shadow: 
              0 0 10px rgba(255, 255, 255, 0.8),
              0 0 20px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 255, 255, 0.4),
              0 0 40px rgba(255, 255, 255, 0.2);
          }
          to { 
            text-shadow: 
              0 0 15px rgba(255, 255, 255, 1),
              0 0 25px rgba(255, 255, 255, 0.8),
              0 0 35px rgba(255, 255, 255, 0.6),
              0 0 45px rgba(255, 255, 255, 0.4);
          }
        }

        .sci-fi-button {
          background: linear-gradient(135deg, #0099ff, #0066cc, #003d99);
          border: 2px solid #00ccff;
          color: white;
          border-radius: 30px;
          font-family: 'Orbitron', monospace;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 0 20px rgba(0, 204, 255, 0.3),
            inset 0 0 20px rgba(0, 204, 255, 0.1);
          transition: all 0.4s ease;
        }

        .sci-fi-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .sci-fi-button:hover::before {
          left: 100%;
        }

        .sci-fi-button:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 10px 30px rgba(0, 204, 255, 0.5),
            inset 0 0 30px rgba(0, 204, 255, 0.2);
          border-color: #00ffff;
          background: linear-gradient(135deg, #00b3ff, #0080ff, #0066ff);
        }

        .fade-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-10px);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 w-full backdrop-blur-lg z-50 transition-all duration-300" 
              style={{background: 'rgba(10, 10, 10, 0.95)'}}>
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">
          <a href="#" className="text-2xl font-black font-mono bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
            OMNIVERSE GAMES
          </a>
          <div className="hidden md:flex space-x-8">
            {['inicio', 'sobre-nosotros', 'proyectos', 'equipo', 'inversion', 'contacto'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white hover:text-blue-400 transition-colors duration-300 capitalize font-mono"
              >
                {section.replace('-', ' ')}
              </button>
            ))}
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 p-4">
            {['inicio', 'sobre-nosotros', 'proyectos', 'equipo', 'inversion', 'contacto'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left text-white hover:text-blue-400 py-2 capitalize font-mono"
              >
                {section.replace('-', ' ')}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="h-screen flex items-center justify-center text-center relative overflow-hidden">
        <div className="hero-background"></div>
        <div className="max-w-4xl z-10 px-8">
          <h1 className="hero-title mb-6">OMNIVERSE GAMES</h1>
          <p className="text-xl mb-8 opacity-90">
            Creamos experiencias de juego extraordinarias que trascienden los límites de la realidad
          </p>
          <button 
            onClick={() => scrollToSection('proyectos')}
            className="sci-fi-button px-8 py-4 text-lg"
          >
            Descubre Nuestros Proyectos
          </button>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre-nosotros" className="fade-section py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-mono bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
          Sobre Nosotros
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Nuestra Visión",
              content: "Ser pioneros en la creación de universos de juego inmersivos que conecten a jugadores de todo el mundo, ofreciendo experiencias únicas que combinen innovación tecnológica con narrativas cautivadoras."
            },
            {
              title: "Nuestra Misión", 
              content: "Desarrollar videojuegos de clase mundial que desafíen los límites creativos y técnicos, proporcionando entretenimiento de calidad premium mientras construimos comunidades gaming vibrantes."
            },
            {
              title: "Nuestros Valores",
              content: "Innovación constante, excelencia en cada detalle, respeto por nuestra comunidad, y compromiso con crear experiencias que marquen una diferencia en la industria del gaming."
            }
          ].map((item, index) => (
            <div key={index} className="glass-card p-8">
              <h3 className="text-blue-400 text-xl font-bold mb-4 font-mono">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
        <div className="glass-card p-8">
          <h3 className="text-blue-400 text-xl font-bold mb-4 font-mono">Historia del Estudio</h3>
          <p>Omniverse Games nace de la pasión por crear mundos digitales extraordinarios. Nuestro equipo multidisciplinario combina años de experiencia en desarrollo de videojuegos, diseño gráfico, y tecnologías emergentes para dar vida a conceptos innovadores que redefinen la experiencia gaming.</p>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="fade-section py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-mono bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
          Nuestros Proyectos
        </h2>
        <div className="bg-gradient-to-r from-blue-500/20 to-pink-500/20 p-12 rounded-3xl text-center border border-white/10">
          <h3 className="text-3xl font-bold text-pink-500 mb-6 font-mono">OMNIVERSE: THE PRIMORDIAL BATTLEZONE</h3>
          <p className="text-lg mb-8">
            Nuestro proyecto estrella: un universo de batalla multijugador masivo que combina estrategia, acción y elementos RPG en un entorno completamente destructible. Los jugadores forjarán alianzas, construirán imperios y lucharán por el control de recursos primordiales en múltiples dimensiones.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { icon: "🌌", title: "Multiuniverso", desc: "Explora múltiples dimensiones con física y reglas únicas" },
              { icon: "⚔️", title: "Combate Táctico", desc: "Sistema de combate profundo con miles de combinaciones" },
              { icon: "🏗️", title: "Construcción", desc: "Construye bases, vehículos y armas personalizadas" }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="text-blue-400 font-bold mb-2 font-mono">{feature.title}</h4>
                <p className="text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scrollToSection('contacto')} className="sci-fi-button px-8 py-3">
            Más Información
          </button>
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="fade-section py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-mono bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
          Nuestro Equipo
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { role: "Director Ejecutivo", desc: "Visionario creativo con más de 10 años liderando proyectos gaming innovadores", abbrev: "CEO" },
            { role: "Desarrollador Principal", desc: "Experto en engines avanzados y arquitecturas de juegos multijugador masivos", abbrev: "DEV" },
            { role: "Director Artístico", desc: "Maestro en diseño visual que da vida a mundos extraordinarios y personajes memorables", abbrev: "ART" },
            { role: "Diseñador de Juegos", desc: "Especialista en mecánicas de juego y experiencias de usuario cautivadoras", abbrev: "GD" }
          ].map((member, index) => (
            <div key={index} className="glass-card p-8 text-center hover:scale-105 transition-transform">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-pink-500 flex items-center justify-center font-mono font-bold text-lg">
                {member.abbrev}
              </div>
              <h4 className="font-bold mb-2 font-mono">{member.role}</h4>
              <p className="text-sm opacity-90">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inversión */}
      <section id="inversion" className="fade-section py-20 px-8">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-pink-500/20 to-blue-500/20 p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-8 font-mono bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Oportunidades de Inversión
          </h2>
          <p className="text-lg mb-8">
            Únete a nosotros en la revolución gaming del futuro. Omniverse Games busca socios estratégicos para acelerar el desarrollo de nuestros proyectos ambiciosos.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {[
              { icon: "💰", title: "ROI Proyectado", desc: "Retorno de inversión competitivo con potencial de crecimiento exponencial" },
              { icon: "🚀", title: "Escalabilidad", desc: "Tecnología propia escalable para múltiples proyectos y plataformas" },
              { icon: "🌍", title: "Mercado Global", desc: "Acceso a mercados internacionales con estrategias diversificadas" },
              { icon: "🔮", title: "Innovación", desc: "Tecnologías emergentes: IA, blockchain, VR y metaversos" }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="text-blue-400 font-bold mb-2 font-mono">{feature.title}</h4>
                <p className="text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scrollToSection('contacto')} className="sci-fi-button px-8 py-3">
            Información de Inversión
          </button>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="fade-section py-20 px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 font-mono bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
          Contacto
        </h2>
        <p className="text-lg mb-12">¿Listo para formar parte del futuro gaming? Conecta con nosotros.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { 
              title: "💼 Negocios & Asociaciones", 
              desc: "Para colaboraciones empresariales y oportunidades de negocio",
              subject: "Consulta de Negocios - Omniverse Games",
              body: "Hola equipo de Omniverse Games,%0A%0AMe gustaría consultar sobre:"
            },
            { 
              title: "💰 Inversiones", 
              desc: "Información sobre oportunidades de inversión y financiación",
              subject: "Consulta de Inversión - Omniverse Games",
              body: "Estimado equipo,%0A%0AEstoy interesado en conocer más sobre las oportunidades de inversión en Omniverse Games."
            },
            { 
              title: "📰 Prensa & Media", 
              desc: "Consultas de medios, entrevistas y material de prensa",
              subject: "Consulta de Prensa - Omniverse Games",
              body: "Estimado equipo de comunicación,%0A%0ASoy de [MEDIO/ORGANIZACIÓN] y me gustaría:"
            },
            { 
              title: "🎮 Talento & Carreras", 
              desc: "Únete a nuestro equipo de desarrollo",
              subject: "Aplicación de Trabajo - Omniverse Games",
              body: "Hola,%0A%0AEstoy interesado en formar parte del equipo de Omniverse Games.%0A%0AMi especialidad:%0AMi experiencia:%0A%0AAdjunto mi CV."
            }
          ].map((contact, index) => (
            <div key={index} className="glass-card p-6">
              <h4 className="text-blue-400 font-bold mb-4 font-mono">{contact.title}</h4>
              <p className="mb-4 text-sm">{contact.desc}</p>
              <a 
                href={`mailto:bankaipc@gmail.com?subject=${contact.subject}&body=${contact.body}`}
                className="sci-fi-button px-6 py-2 text-sm inline-block"
              >
                Contactar
              </a>
            </div>
          ))}
        </div>

        <div className="glass-card p-8">
          <h4 className="text-blue-400 font-bold mb-4 font-mono">💬 Contacto General</h4>
          <p className="mb-4">¿Tienes alguna pregunta específica? Contáctanos directamente:</p>
          <a 
            href="mailto:bankaipc@gmail.com?subject=Consulta General - Omniverse Games&body=Hola equipo de Omniverse Games,%0A%0A"
            className="sci-fi-button px-8 py-3"
          >
            Enviar Mensaje
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 text-center py-8">
        <div className="flex justify-center space-x-6 mb-4">
          {['🐦', '📘', '📷', '🎮'].map((icon, index) => (
            <a key={index} href="#" className="text-2xl hover:text-blue-400 transition-colors">
              {icon}
            </a>
          ))}
        </div>
        <p className="opacity-75">&copy; 2024 Omniverse Games. Todos los derechos reservados.</p>
        <p className="opacity-75">Diseñado para Cloudflare Pages | Optimizado para el futuro gaming</p>
      </footer>
    </div>
  );
};

export default OmniverseGamesApp;
