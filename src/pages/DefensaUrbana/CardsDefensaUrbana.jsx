import React from 'react';
import './CardsDefensaUrbana.css';

const cards = [
	{
		programa: 'DEFENSA URBANA I',
		tema: 'Introducción al Uso de Armas',
		descripcion:
			'Fundamentos legales, técnicos y de seguridad para manejo responsable de armas de fuego.',
		habilidades: [
			'Legislación, responsabilidad legal, emocional y ética del uso del arma',
			'Fundamentos de tiro y de seguridad',
			'Mantenimiento y almacenaje seguro del arma',
			'Introducción al porte oculto (funda, posiciones, desenfunde)',
			'Ejercicios de tiro instintivo y selectivo',
		],
		requisito: 'Mayoría de edad (18+)',
	},
	{
		programa: 'DEFENSA URBANA II',
		tema: 'Técnicas para identificar y responder a amenazas en entornos urbanos.',
		descripcion:
			'Fundamentos de tiro, seguridad, desenfunde y posiciones de disparo para defensa personal.',
		habilidades: [
			'Lectura del entorno y detección temprana de amenazas (identificación de lenguaje corporal y señales sospechosas)',
			'Evaluación de zonas de riesgo y planificación de rutas seguras',
			'Ejercicios de rección',
			'Uso de coberturas improvisadas',
		],
		requisito: 'Haber completado DU I o equivalente',
	},
	{
		programa: 'DEFENSA URBANA III',
		tema: 'Protección Familiar y del Hogar',
		descripcion:
			'Estrategias para seguridad residencial y protección de seres queridos.',
		habilidades: [
			'“Núcleo familiar como principal”',
			'Formaciones básicas para protección de acompañantes',
			'Planificación de trayectos, técnicas de movimiento en grupo y comunicación',
			'Simulacros de crisis: entrada forzada al hogar, evacuación de lugar público',
		],
		requisito: 'Haber completado DU II',
	},
	{
		programa: 'DEFENSA URBANA IV',
		tema: 'Técnicas avanzadas para moverse y sobrevivir en situaciones de crisis urbana.',
		descripcion:
			'Preparación integral para escenarios de crisis urbana, colapso civil o desastre.',
		habilidades: [
			'Combate cercano',
			'Tiro en movimiento con control de blancos y entorno',
			'Reacción a emboscadas en tránsito',
			'Evaluación integral con simulación táctica urbana',
		],
		requisito: 'Haber completado DU III',
	},
];

const CardsDefensaUrbana = () => {
	return (
		<section className="cards-defensa">
			<div className="cards-container">
				{cards.map((card, index) => (
					<div className="card-defensa" key={index}>
						<div className="card-header">
							<h3>{card.programa}</h3>
						</div>
						<h4>{card.tema}</h4>
						<p className="descripcion">{card.descripcion}</p>
						<div className="divider-red" />
						<h5>TEMAS PRINCIPALES:</h5>
						<ul>
							{card.habilidades.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
						<div className="divider" />
						<p>Duración: 32 horas (ó 4 días)</p>
						<p className={`requisito ${card.requisito.toLowerCase()}`}>
							Requisito: {card.requisito}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default CardsDefensaUrbana;
