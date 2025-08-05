import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LayoutHeader.css';

const LayoutHeader = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="layout-header">
			<div className="logo">
				<Link to="/">USQAY WAÑUY</Link>
			</div>
			<nav className={`nav ${menuOpen ? 'open' : ''}`}>
				<Link to="/" onClick={toggleMenu}>
					Inicio
				</Link>
				<Link to="/sobre-nosotros" onClick={toggleMenu}>
					Sobre Nosotros
				</Link>
				<Link to="/certificacion-trc" onClick={toggleMenu}>
					Certificación TRC
				</Link>
				<Link to="/programa-escolta" onClick={toggleMenu}>
					Programa Escolta
				</Link>
				<Link to="/defensa-urbana" onClick={toggleMenu}>
					Defensa Urbana
				</Link>
				<Link to="/manejo-tactico" onClick={toggleMenu}>
					Manejo Táctico
				</Link>
				<Link to="/cursos-especializados" onClick={toggleMenu}>
					Cursos Especializados
				</Link>
				<Link to="/blog" onClick={toggleMenu}>
					Blog
				</Link>
				<Link to="/contacto" onClick={toggleMenu}>
					Contacto
				</Link>
			</nav>
			<button className="menu-toggle" onClick={toggleMenu}>
				☰
			</button>
		</header>
	);
};

export default LayoutHeader;
