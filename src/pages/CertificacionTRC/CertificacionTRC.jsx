import React from 'react';
import './CertificacionTRC.css';
import headerImg from '../../assets/images/trc-header.jpg';
import certificadoImg from '../../assets/images/certificado-trc.png';
import { Link } from 'react-router-dom';

const CertificacionTRC = () => {
	return (
		<section className="trc-section">
			{/* Cabecera con imagen */}
			<div
				className="trc-header"
				style={{ backgroundImage: `url(${headerImg})` }}
			>
				<div className="trc-overlay">
					<h1>TACTICAL READINESS CERTIFICATION®</h1>
					<p>Certifica la preparación táctica real de tu organización</p>
				</div>
			</div>

			{/* ¿Qué es TRC? */}
			<div className="trc-info">
				<div className="trc-title-row">
					<h2>
						¿QUÉ ES <span className="highlight-red">TRC</span>?
					</h2>
					{/* <img src={escudoImg} alt="Escudo" />*/}
					<div className="divider" />
				</div>
				<p>
					La Certificación de Disposición Táctica (TRC) es un estándar
					internacional desarrollado por USQAY WAÑUY para evaluar y validar la
					capacidad operativa de organizaciones frente a amenazas de seguridad.
					Va más allá de la capacitación, midiendo la preparación real de
					personal, procedimientos e infraestructura.
				</p>
				<p>
					Es un proceso riguroso que asegura que tu equipo no solo sabe qué
					hacer, sino que puede hacerlo bajo presión y en escenarios complejos.
				</p>
			</div>

			{/* Niveles de certificación */}
			<div className="certi-section">
				<>
					<h2 className="certi-titulo">
						NIVELES DE <span className="highlight-red">CERTIFICACIÓN</span>
					</h2>
					<div className="divider" />
				</>
				<div className="certi-grid">
					<div className="certi-card">
						<img src="/src/assets/images/escudo-trc.png" alt="Conciencia" />
						<h3>Awareness (Conciencia)</h3>
						<p>
							Evaluación inicial de la comprensión de riesgos y protocolos
							básicos de seguridad.
						</p>
					</div>
					<div className="certi-card">
						<img src="/src/assets/images/escudo-trc.png" alt="Preparación" />
						<h3>Preparedness (Preparación)</h3>
						<p>
							Verificación de la implementación de procedimientos y la
							capacitación del personal.
						</p>
					</div>
					<div className="certi-card">
						<img src="/src/assets/images/escudo-trc.png" alt="Disposición" />
						<h3>Readiness (Disposición)</h3>
						<p>
							Certificación de la capacidad operativa real para responder
							eficazmente a amenazas.
						</p>
					</div>
				</div>
			</div>
			{/* Metología de certificación */}
			<div className="certi-section">
				<>
					<h2 className="certi-titulo">
						METODOLOGÍA DE <span className="highlight-red">CERTIFICACIÓN</span>
					</h2>
					<div className="divider" />
				</>
				<div className="certi-grid">
					<div className="certi-card">
						<img src="/src/assets/images/escudo-trc.png" alt="Evaluación" />
						<h3>Evaluación en Campo</h3>
						<p>
							Simulacros y ejercicios prácticos en las instalaciones del cliente
							para medir la respuesta en tiempo real.
						</p>
					</div>
					<div className="certi-card">
						<img
							src="/src/assets/images/escudo-trc.png"
							alt="Revisión Documental"
						/>
						<h3>Revisión Documental</h3>
						<p>
							Análisis de políticas, manuales de procedimiento, planes de
							contingencia y registros de capacitación.
						</p>
					</div>
					<div className="certi-card">
						<img
							src="/src/assets/images/escudo-trc.png"
							alt="Panel de Expertos"
						/>
						<h3>Panel de Expertos</h3>
						<p>
							Entrevistas a personal clave y directivos para evaluar la cultura
							de seguridad y toma de decisiones.
						</p>
					</div>
				</div>
			</div>
			{/* Metología de certificación */}
			<div className="certi-section">
				<>
					<h2 className="certi-titulo">
						ÁREAS CRÍTICAS <span className="highlight-red">EVALUADAS</span>
					</h2>
					<div className="divider" />
				</>
				<div className="certi-grid">
					<div className="certi-card">
						<img src="/src/assets/images/escudo-trc.png" alt="Evaluación" />

						<ul className="custom-list">
							<li>Logística (equipamiento, suministros)</li>
							<li>Personal (capacitación, roles, liderazgo)</li>
							<li>Infraestructura (seguridad física, tecnología)</li>
							<li>Procedimientos (SOPs, planes de emergencia)</li>
							<li>Inteligencia (análisis de amenazas, monitoreo)</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="resultados-container">
				<div className="resultados-texto">
					<h2>
						RESULTADOS <span className="highlight-red">& CERTIFICADO</span>
					</h2>
					<p>
						Al completar exitosamente el proceso de evaluación, su organización
						recibirá un certificado TRC que valida su nivel de preparación
						táctica. Este certificado incluye:
					</p>
					<ul className="customer-list">
						<li>Sello de Certificación TRC (físico y digital)</li>
						<li>Badge digital para uso en plataformas web</li>
						<li>Código QR de verificación de autenticidad</li>
						<li>Informe detallado de fortalezas y áreas de mejora</li>
					</ul>
				</div>

				<div className="resultados-imagen">
					<img src={certificadoImg} alt="Certificado TRC" />
				</div>
			</div>
			<div className="renovacion-container">
				<h2>
					RENOVACIÓN Y <span className="highlight-red">RED CERTIFICADA</span>
				</h2>
				<p className="renovacion-descripcion">
					La certificación TRC tiene una validez de 2 años, tras los cuales se
					requiere un proceso de renovación para asegurar la continuidad de los
					altos estándares de preparación. Las organizaciones certificadas pasan
					a formar parte de la exclusiva Red TRC, con acceso a:
				</p>

				<ul className="renovacion-lista">
					<li>Actualizaciones de protocolos de seguridad</li>
					<li>Eventos exclusivos y seminarios avanzados</li>
					<li>Descuentos en programas de capacitación USQAY WAÑUY</li>
					<li>Asesoría táctica personalizada</li>
				</ul>

				<p className="renovacion-cta">
					<strong>
						SOLICITA UNA EVALUACIÓN <span className="highlight-red">TRC</span>
					</strong>
					<br />
					Contáctanos para una consulta personalizada y descubre cómo TRC puede
					elevar la seguridad de tu organización.
				</p>

				<Link to="/contacto" className="renovacion-boton">
					CONTACTAR PARA CERTIFICACIÓN TRC
				</Link>
			</div>
		</section>
	);
};

export default CertificacionTRC;
