import React from 'react';
import HeaderEscolta from '../../pages/ProgramaEscolta/HeaderEscolta';
import CardsEscolta from '../../pages/ProgramaEscolta/CardsEscolta';
import CertificacionEscolta from '../../pages/ProgramaEscolta/CertificacionEscolta';
import FormularioEscolta from '../../pages/ProgramaEscolta/FormularioEscolta';

const ProgramaEscolta = () => {
	return (
		<>
			<HeaderEscolta />
			<CardsEscolta />
			<CertificacionEscolta />
			<FormularioEscolta />
		</>
	);
};

export default ProgramaEscolta;
