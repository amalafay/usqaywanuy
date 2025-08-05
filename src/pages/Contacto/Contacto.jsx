import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
	const [formData, setFormData] = useState({
		curso: '',
		documento: '',
		autorizado: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.autorizado) {
			alert('Debes autorizar la verificación de antecedentes.');
			return;
		}

		const mailtoLink = `mailto:absalob.malafay@gmail.com?subject=Solicitud%20de%20Verificación%20de%20Elegibilidad&body=Curso%20de%20Interés:%20${encodeURIComponent(
			formData.curso,
		)}%0D%0ADocumento:%20${encodeURIComponent(formData.documento)}`;
		window.location.href = mailtoLink;
	};

	return (
		<section className="contacto-uw-section">
			<div className="contacto-uw-container">
				<h2>CONTÁCTANOS AHORA</h2>
				<p className="intro">
					¿Tienes preguntas, necesitas más información o quieres una propuesta
					personalizada? <br />
					¡Estamos listos para escucharte!
				</p>

				<div className="form-block">
					<h3>FILTRO DE SEGURIDAD PARA CURSOS</h3>
					<p className="descripcion">
						Para garantizar la seguridad y el perfil adecuado de nuestros
						participantes, realizamos una verificación inicial. Por favor,
						completa los siguientes datos.
					</p>

					<form onSubmit={handleSubmit} className="formulario-uw-contacto">
						<label>Curso de Interés:</label>
						<select
							name="curso"
							value={formData.curso}
							onChange={handleChange}
							required
						>
							<option value="">Selecciona un curso</option>
							<option>Programa Escolta</option>
							<option>Defensa Urbana</option>
							<option>Manejo Táctico</option>
							<option>Cursos Especializados</option>
							<option>Certificación TRC</option>
							<option>Información de Interés</option>
						</select>

						<label>DNI / Carnet de Extranjería:</label>
						<input
							type="text"
							name="documento"
							value={formData.documento}
							onChange={handleChange}
							placeholder="Ingresa tu número de documento"
							required
						/>

						<label className="check-legal">
							<input
								type="checkbox"
								name="autorizado"
								checked={formData.autorizado}
								onChange={handleChange}
							/>
							Autorizo la verificación de mis antecedentes según la Ley N°
							30150.
						</label>

						<button type="submit">VERIFICAR ELEGIBILIDAD</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contacto;
