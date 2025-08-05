import React, { useState } from 'react';
import './FormularioEscolta.css';

const FormularioEscolta = () => {
	const [formData, setFormData] = useState({
		nombre: '',
		correo: '',
		telefono: '',
		nivel: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Formulario enviado:', formData);
		alert('Solicitud enviada correctamente.');
		// Aquí podrías enviar los datos a Firebase, EmailJS, etc.
	};

	return (
		<section className="form-escolta-section">
			<div className="form-container">
				<h2>SOLICITA INFORMACIÓN</h2>
				<form onSubmit={handleSubmit} className="form-escolta">
					<label>Nombre completo:</label>
					<input
						type="text"
						name="nombre"
						placeholder="Ingresa tu nombre"
						value={formData.nombre}
						onChange={handleChange}
						required
					/>

					<label>Correo electrónico:</label>
					<input
						type="email"
						name="correo"
						placeholder="Ingresa tu email"
						value={formData.correo}
						onChange={handleChange}
						required
					/>

					<label>Teléfono:</label>
					<input
						type="tel"
						name="telefono"
						placeholder="Ingresa tu teléfono"
						value={formData.telefono}
						onChange={handleChange}
						required
					/>

					<label>Nivel de interés:</label>
					<select
						name="nivel"
						value={formData.nivel}
						onChange={handleChange}
						required
					>
						<option value="">Selecciona un nivel</option>
						<option value="ESCOLTA I">ESCOLTA I - Memoria Muscular</option>
						<option value="ESCOLTA II">ESCOLTA II - Agilidad Mental</option>
						<option value="ESCOLTA III">ESCOLTA III - Combate Cercano</option>
						<option value="ESCOLTA IV">
							ESCOLTA IV - Violencia Controlada
						</option>
						<option value="PROGRAMA COMPLETO">Programa Completo</option>
					</select>

					<button type="submit">ENVIAR SOLICITUD</button>
				</form>
			</div>
		</section>
	);
};

export default FormularioEscolta;
