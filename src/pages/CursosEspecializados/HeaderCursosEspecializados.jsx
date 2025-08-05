import React from 'react';
import './HeaderCursosEspecializados.css';
import headerImg from '../../assets/images/cursos-especializados-header.jpg'; // asegúrate que exista en tu carpeta

const HeaderCursosEspecializados = () => {
	return (
		<section className="header-cursos-especializados">
			<img
				src={headerImg}
				alt="Cursos Especializados"
				className="header-image"
			/>
			<div className="header-overlay">
				<div className="header-content">
					<h1>CURSOS ESPECIALIZADOS</h1>
					<p>
						Formación avanzada reservada para operadores tácticos, escoltas de
						alto nivel y fuerzas especiales. Estos cursos representan el máximo
						nivel de exigencia física, técnica y mental, combinando
						entrenamiento en múltiples entornos y escenarios realistas. Solo
						acceden quienes hayan completado los módulos anteriores con
						excelencia.
					</p>
				</div>
			</div>
		</section>
	);
};

export default HeaderCursosEspecializados;
