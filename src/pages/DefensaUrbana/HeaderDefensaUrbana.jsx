import React from 'react';
import './HeaderDefensaUrbana.css';
import headerImg from '../../assets/images/defensa-urbana-header.jpg'; // cámbialo por tu imagen real

const HeaderDefensaUrbana = () => {
	return (
		<section className="header-defensa">
			<img src={headerImg} alt="Defensa Urbana" className="header-image" />
			<div className="header-overlay">
				<div className="header-content">
					<h1>DEFENSA URBANA</h1>
					<p>
						Programa de formación táctica adaptado para civiles preocupados por
						su seguridad personal y familiar. No se requiere experiencia previa.
					</p>
				</div>
			</div>
		</section>
	);
};

export default HeaderDefensaUrbana;
