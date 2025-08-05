import React from 'react';
import './CardsCursosEspecializados.css';
import fondo1 from '../../assets/images/elite_banner.png';
import fondo2 from '../../assets/images/harkay_banner.png';
import icono1 from '../../assets/images/elite.png';
import icono2 from '../../assets/images/harkay.png';

const cursos = [
	{
		titulo: 'ELITE VENTURE',
		subtitulo: 'Protección Especial',
		imagen: fondo1,
		icono: icono1,
		descripcion:
			'Programa diseñado para la protección de alto nivel en escenarios complejos, tanto en ambientes urbanos como rurales.',
		tema: 'TEMAS CLAVE',
		habilidades: [
			'Natación de combate',
			'Descenso táctico',
			'Armas largas',
			'Combate en zonas urbanas y rurales',
		],
	},
	{
		titulo: 'HARKAY',
		subtitulo: 'Nivel Máximo (Por invitación)',
		imagen: fondo2,
		icono: icono2,
		descripcion:
			'El pináculo del entrenamiento táctico, enfocado en planeamiento, situaciones críticas y liderazgo.',
		tema: 'TEMAS CLAVE',
		habilidades: [
			'Planeamiento anticipado',
			'Manejo de situaciones críticas',
			'Liderazgo táctico',
			'Filosofía del "lobo": cooperación, inteligencia y dominio del entorno',
		],
	},
];

const CardsCursosEspecializados = () => {
	return (
		<section className="cards-especializados">
			<div className="cards-especializados-container">
				{cursos.map((curso, index) => (
					<div
						key={index}
						className="card-especializado"
						style={{ backgroundImage: `url(${curso.imagen})` }}
					>
						<div className="icono-superior">
							<img src={curso.icono} alt="icono" />
						</div>
						<h3 className="titulo">{curso.titulo}</h3>
						<p className="subtitulo">{curso.subtitulo}</p>
						<div className="overlay-inferior">
							<p className="descripcion">{curso.descripcion}</p>
							<div className="divider-roja" />
							<p className="tema">{curso.tema}</p>
							<ul className="lista-habilidades">
								{curso.habilidades.map((item, i) => (
									<li key={i}>🎯 {item}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default CardsCursosEspecializados;
