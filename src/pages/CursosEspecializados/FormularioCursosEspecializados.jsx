import React, { useState } from 'react';
import './FormularioCursosEspecializados.css';

const FormularioCursosEspecializados = () => {
	const [formData, setFormData] = useState({
		razonSocial: '',
		ruc: '',
		ubicacion: '',
		rubro: '',
		personal: '',
		correo: '',
		necesidades: '',
	});

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí puedes integrar EmailJS o backend
		alert('Formulario enviado con éxito.');
	};

	return (
		<section className="formulario-especializado">
			<h2>PERSONALIZACIÓN DE ENTRENAMIENTO</h2>
			<p>
				Ofrecemos simulaciones y soluciones a medida para empresas, diseñadas
				para abordar necesidades específicas de seguridad y capacitación
				táctica.
			</p>
			<form onSubmit={handleSubmit}>
				<div className="form-grid">
					<input
						type="text"
						name="razonSocial"
						placeholder="Razón Social / Empresa"
						value={formData.razonSocial}
						onChange={handleChange}
						required
					/>
					<input
						type="text"
						name="ruc"
						placeholder="RUC"
						value={formData.ruc}
						onChange={handleChange}
						required
					/>
					<input
						type="text"
						name="ubicacion"
						placeholder="Ubicación (Ciudad/País)"
						value={formData.ubicacion}
						onChange={handleChange}
						required
					/>
					<input
						type="text"
						name="rubro"
						placeholder="Rubro de la empresa"
						value={formData.rubro}
						onChange={handleChange}
						required
					/>
					<input
						type="number"
						name="personal"
						placeholder="Número de personal a capacitar"
						value={formData.personal}
						onChange={handleChange}
						required
					/>
					<input
						type="email"
						name="correo"
						placeholder="Correo electrónico de contacto"
						value={formData.correo}
						onChange={handleChange}
						required
					/>
				</div>
				<textarea
					name="necesidades"
					placeholder="Necesidades específicas de capacitación..."
					rows="4"
					value={formData.necesidades}
					onChange={handleChange}
					required
				/>
				<p className="nota">
					*Toda solicitud está sujeta a verificación de seguridad y perfil del
					solicitante mediante API del Ministerio del Interior.
				</p>
				<button type="submit">SOLICITAR PROPUESTA PERSONALIZADA</button>
			</form>
		</section>
	);
};

export default FormularioCursosEspecializados;
