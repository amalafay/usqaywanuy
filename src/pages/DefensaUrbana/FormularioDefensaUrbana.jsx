import React, { useState } from 'react';
import './FormularioDefensaUrbana.css';

const FormularioDefensaUrbana = () => {
	const [formData, setFormData] = useState({
		nivel: '',
		nombre: '',
		documento: '',
		correo: '',
		autorizo: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.autorizo) {
			alert('Debes autorizar la verificación de antecedentes.');
			return;
		}

		// Aquí puedes conectar con Firebase, API o servicio que necesites
		console.log('Datos enviados:', formData);
		alert('Solicitud enviada correctamente');
		setFormData({
			nivel: '',
			nombre: '',
			documento: '',
			correo: '',
			autorizo: false,
		});
	};

	return (
		<section className="formulario-defensa-section">
			<div className="form-container-defensa">
				<div>
					<h2>INSCRIPCIÓN SEGURA</h2>
					<p>
						Nuestro proceso garantiza la seguridad de todos los participantes
						mediante:
					</p>
					<ul className="text-ul-defensa">
						<li>
							Verificación de antecedentes mediante API del Ministerio del
							Interior
						</li>
						<li>Validación de portación legal de armas (cuando aplica)</li>
						<li>Entrevista psicológica para niveles avanzados</li>
						<li>Certificación médica obligatoria</li>
					</ul>
				</div>
				<h2>SOLICITUD INICIAL</h2>
				<form onSubmit={handleSubmit} className="formulario-defensa-form">
					<label>
						Nivel de interés:
						<select
							name="nivel"
							value={formData.nivel}
							onChange={handleChange}
							required
						>
							<option value="">Selecciona un nivel</option>
							<option value="DEFENSA URBANA I">
								DEFENSA URBANA I - Introducción al uso de Armas
							</option>
							<option value="DEFENSA URBANA II">
								DEFENSA URBANA II - Tiro Defensivo y Tácticas Urbanas
							</option>
							<option value="DEFENSA URBANA III">
								DEFENSA URBANA III - Protección Familiar y del Hogar
							</option>
							<option value="DEFENSA URBANA IV">
								DEFENSA URBANA IV - Supervivencia Urbana
							</option>
						</select>
					</label>

					<label>
						Nombre completo:
						<input
							type="text"
							name="nombre"
							value={formData.nombre}
							onChange={handleChange}
							placeholder="Ingresa tu nombre"
							required
						/>
					</label>

					<label>
						DNI o Carnet de Extranjería:
						<input
							type="text"
							name="documento"
							value={formData.documento}
							onChange={handleChange}
							placeholder="Ingresa tu documento"
							required
						/>
					</label>

					<label>
						Correo electrónico:
						<input
							type="email"
							name="correo"
							value={formData.correo}
							onChange={handleChange}
							placeholder="Ingresa tu email"
							required
						/>
					</label>

					<label className="checkbox-label">
						<input
							type="checkbox"
							name="autorizo"
							checked={formData.autorizo}
							onChange={handleChange}
						/>
						Autorizo la verificación de mis antecedentes según la Ley N° 30150
					</label>

					<button type="submit">VERIFICAR ELEGIBILIDAD</button>
				</form>
			</div>
		</section>
	);
};

export default FormularioDefensaUrbana;
