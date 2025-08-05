import React from 'react';
import './HeroCards.css';
import trcImg from '../../assets/images/trc.png';
import escoltaImg from '../../assets/images/escolta.jpg';
import defensaImg from '../../assets/images/defensa.jpg';
import tacticoImg from '../../assets/images/tactico.jpg';
import cursosImg from '../../assets/images/cursos.jpg';
import { Link } from 'react-router-dom';

const HeroCards = () => {
	const cards = [
		{ title: 'Certificación TRC', path: '/certificacion-trc', img: trcImg },
		{ title: 'Programa Escolta', path: '/programa-escolta', img: escoltaImg },
		{ title: 'Defensa Urbana', path: '/defensa-urbana', img: defensaImg },
		{ title: 'Manejo Táctico', path: '/manejo-tactico', img: tacticoImg },
		{
			title: 'Cursos Especializados',
			path: '/cursos-especializados',
			img: cursosImg,
		},
	];

	return (
		<div className="hero-cards-container">
			{cards.map((card, index) => (
				<Link key={index} to={card.path} className="hero-card">
					<img src={card.img} alt={card.title} />
					<div className="hero-card-title">{card.title}</div>
				</Link>
			))}
		</div>
	);
};

export default HeroCards;
