import React from 'react';
import './SobreNosotros.css';

import headerImg from '../../assets/images/about-header.jpg';
import escudoImg from '../../assets/images/escudo.png';
import instructorImg from '../../assets/images/instructor.png';

const AboutSection = () => {
	return (
		<section className="about-section" id="nosotros">
			{/* Cabecera con imagen */}
			<div
				className="about-header-img"
				style={{ backgroundImage: `url(${headerImg})` }}
			>
				<div className="about-overlay">
					<h1>
						SOBRE <span className="highlight-red">NOSOTROS</span>
					</h1>
					<p>25 años formando líderes tácticos al servicio de la seguridad</p>
				</div>
			</div>

			{/* Contenido principal */}
			<div className="about-container">
				<div className="about-header">
					<h2>
						¿QUIÉNES <span className="highlight-red">SOMOS</span>?
					</h2>
					<div className="divider" />
				</div>

				<div className="about-content">
					<div className="about-image">
						<img src={escudoImg} alt="Escudo USQAY WAÑUY" />
					</div>
					<div className="about-text">
						<p>
							USQAY WAÑUY es más que una escuela de formación táctica: somos una
							comunidad dedicada desde hace más de 25 años a la excelencia en el
							manejo de armas, preparación táctica y servicios de protección
							personal. Nuestros programas, modulares y escalonados, están
							diseñados para llevar a nuestros alumnos, de forma progresiva,
							desde los fundamentos más básicos hasta la élite del entrenamiento
							táctico, preparando a civiles, cuerpos de seguridad y fuerzas
							especiales, para enfrentar situaciones críticas con confianza y
							habilidad.
						</p>
					</div>
				</div>

				<div className="about-mision-vision">
					<div className="about-mv-text">
						<h3>
							NUESTRA <span className="highlight-red">MISIÓN</span>
						</h3>
						<p>
							Proporcionar una rigurosa formación táctica integral, que no sólo
							capacite a nuestros alumnos en el manejo seguro y eficaz de armas
							de fuego, sino que también, los prepare mental y físicamente para
							enfrentar las situaciones más exigentes. Nos dedicamos a cultivar
							la disciplina, la precisión y la mentalidad de guerrero necesaria
							para hacer frente, destacar y salir exitoso de cualquier situación
							crítica.
						</p>

						<h3>
							NUESTRA <span className="highlight-red">VISIÓN</span>
						</h3>
						<p>
							Convertirnos en el referente principal de formación táctica en el
							Perú y América Latina, reconocidos por nuestra doctrina única, la
							calidad de nuestros programas y la excelencia de nuestros
							instructores.
						</p>
					</div>

					<div className="about-instructor">
						<img src={instructorImg} alt="Instructor principal" />
					</div>
				</div>
			</div>
			<div className="valores-section">
				<>
					<h2 className="valores-titulo">
						NUESTROS <span className="highlight-red">VALORES</span>
					</h2>
					<div className="divider" />
				</>
				<div className="valores-grid">
					<div className="valor-card">
						<img src="/src/assets/images/escudo.png" alt="Disciplina" />
						<h3>DISCIPLINA MARCIAL</h3>
						<p>
							En USQAY WAÑUY, el error de uno es el error de todos. Nuestra
							filosofía de entrenamiento inculca una responsabilidad compartida,
							donde la confianza y el trabajo en equipo son esenciales para el
							éxito.
						</p>
					</div>
					<div className="valor-card">
						<img src="/src/assets/images/escudo.png" alt="Letalidad" />
						<h3>LETALIDAD Y EFICACIA</h3>
						<p>
							Nuestro nombre, que en quechua significa "muerte rápida", refleja
							nuestro compromiso con la eficacia en situaciones críticas, donde
							la precisión y la rapidez, son vitales.
						</p>
					</div>
					<div className="valor-card">
						<img
							src="/src/assets/images/escudo.png"
							alt="Entrenamiento bajo estrés"
						/>
						<h3>ENTRENAMIENTO BAJO ESTRÉS</h3>
						<p>
							Sabemos que en la vida real, el estrés de combate puede paralizar
							incluso a los más experimentados. Por eso, replicamos estas
							condiciones en nuestro entrenamiento, asegurando que nuestros
							alumnos estén preparados para cualquier situación.
						</p>
					</div>
					<div className="valor-card">
						<img src="/src/assets/images/escudo.png" alt="Excelencia" />
						<h3>COMPROMISO CON LA EXCELENCIA</h3>
						<p>
							Cada módulo de nuestro programa está diseñado para superar los
							estándares nacionales e internacionales, garantizando que nuestros
							alumnos reciban la mejor formación posible.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
