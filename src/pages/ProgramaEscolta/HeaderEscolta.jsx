import React from 'react';
import './HeaderEscolta.css';
import escoltaHeaderImg from '../../assets/images/programa-escolta-header.jpg'; // pon aquí tu imagen

const HeaderEscolta = () => {
	return (
		<section className="escolta-header-section">
			<div className="escolta-header-img">
				<img src={escoltaHeaderImg} alt="Programa Escolta" />
				<div className="escolta-header-overlay">
					<h1>PROGRAMA ESCOLTA</h1>
					<p>
						Columna vertebral de la formación en USQAY WAÑUY. Diseñado para
						llevar al participante desde los fundamentos hasta el dominio
						táctico en escenarios críticos.
					</p>
				</div>
			</div>
		</section>
	);
};

export default HeaderEscolta;
