import React from 'react';
import './CertificacionEscolta.css';
//import escudo from '../../assets/images/escudo.png'; // opcional si deseas mostrar algo institucional

const CertificacionEscolta = () => {
	return (
		<section className="certificacion-escolta-section">
			<div className="certificacion-container">
				<h2>CERTIFICACIÓN INTERNACIONAL</h2>
				<p className="certificacion-text">
					Al completar satisfactoriamente los 4 niveles, los participantes
					reciben la certificación USQAY WAÑUY reconocida por:
				</p>

				<ul className="certificacion-lista">
					<li>Asociación Internacional de Protección (AIP)</li>
					<li>Federación Latinoamericana de Seguridad</li>
					<li>Ministerio del Interior Perú</li>
					<li>Consejo de Seguridad Privada</li>
				</ul>

				<div className="certificacion-card-info">
					<p>4 NIVELES</p>
					<div className="divider-white" />
					<p>14 DÍAS CONSECUTIVOS</p>
					<div className="divider-white" />
					<p>100% PRÁCTICO</p>
				</div>
			</div>
		</section>
	);
};

export default CertificacionEscolta;
