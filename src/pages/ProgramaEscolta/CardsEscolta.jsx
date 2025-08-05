import React from 'react';
import './CardsEscolta.css';
import icon1 from '../../assets/images/escolta1.png';
import icon2 from '../../assets/images/escolta2.png';
import icon3 from '../../assets/images/escolta3.png';
import icon4 from '../../assets/images/escolta4.png';

const cards = [
	{
		titulo: 'ESCOLTA I',
		icono: icon1,
		tema: 'Memoria Muscular',
		descripcion:
			'Fundamentos de tiro, uso responsable de armas, posiciones de combate y primeros auxilios tácticos.',
		habilidades: [
			'Seguridad básica con armas',
			'Posiciones de tiro estático y en movimiento',
			'Mantenimiento de equipos',
			'Protocolos de limpieza y almacenamiento',
		],
		intensidad: 'MODERADO',
	},
	{
		titulo: 'ESCOLTA II',
		icono: icon2,
		tema: 'Agilidad Mental',
		descripcion:
			'Desarrollo de confianza operativa, reacción táctica bajo presión y trabajo en equipo coordinado.',
		habilidades: [
			'Toma de decisiones en crisis',
			'Comunicación táctica',
			'Resolución de escenarios reales',
			'Tiro en movimiento y con obstáculos',
		],
		intensidad: 'INTERMEDIO',
	},
	{
		titulo: 'ESCOLTA III',
		icono: icon3,
		tema: 'Combate Cercano',
		descripcion:
			'Técnicas avanzadas de protección en entornos urbanos y uso estratégico del terreno.',
		habilidades: [
			'Formaciones de protección',
			'Tácticas de extracción',
			'Uso del entorno como ventaja',
			'Protección en espacios confinados',
		],
		intensidad: 'AVANZADO',
	},
	{
		titulo: 'ESCOLTA IV',
		icono: icon4,
		tema: 'Violencia Controlada',
		descripcion:
			'Dominio de situaciones de alto riesgo en diversos medios de transporte y bajo estrés extremo.',
		habilidades: [
			'Protección vehicular',
			'Procedimientos aeronáuticos',
			'Manejo de multitudes hostiles',
			'Técnicas de contravigilancia',
		],
		intensidad: 'ÉLITE',
	},
];

const CardsEscolta = () => {
	return (
		<section className="cards-escolta-section">
			<div className="cards-escolta-container">
				{cards.map((card, index) => (
					<div className="card-escolta" key={index}>
						<div className="card-header">
							<span className="titulo">{card.titulo}</span>
							<img src={card.icono} alt="icono" className="icono" />
						</div>
						<h3 className="tema">{card.tema}</h3>
						<p className="descripcion">{card.descripcion}</p>
						<div className="divider-white" />
						<h4 className="habilidades-titulo">HABILIDADES CLAVE</h4>
						<ul className="habilidades-lista">
							{card.habilidades.map((hab, i) => (
								<li key={i}>{hab}</li>
							))}
						</ul>
						<div className="divider" />
						<div
							className={`card-intensidad ${
								card.intensidad === 'MODERADO'
									? 'intensidad-moderado'
									: card.intensidad === 'INTERMEDIO'
									? 'intensidad-intermedio'
									: card.intensidad === 'AVANZADO'
									? 'intensidad-avanzado'
									: card.intensidad === 'ÉLITE'
									? 'intensidad-elite'
									: ''
							}`}
						>
							INTENSIDAD: {card.intensidad}
						</div>
						<div className="divider" />
						<p>32 horas (ó 4 días)</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default CardsEscolta;
