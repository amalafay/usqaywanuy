import React from 'react';
import Hero from '../../components/Hero/Hero';
import './Inicio.css';

const Inicio = () => {
	return (
		<>
			<Hero />
			<section className="inicio-container">
				<div className="inicio-content">
					<h1 className="inicio-titulo">Bienvenido a USQAY WAÑUY</h1>
					<p className="inicio-subtitulo">
						Formación táctica, entrenamiento estratégico, defensa personal y
						más.
					</p>
				</div>
			</section>
		</>
	);
};

export default Inicio;
