import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutHeader from '../components/LayoutHeader/LayoutHeader';

// Páginas
import Inicio from '../pages/Inicio/Inicio';
import SobreNosotros from '../pages/SobreNosotros/SobreNosotros';
import CertificacionTRC from '../pages/CertificacionTRC/CertificacionTRC';
import ProgramaEscolta from '../pages/ProgramaEscolta/ProgramaEscolta';
import DefensaUrbana from '../pages/DefensaUrbana/DefensaUrbana';
import ManejoTactico from '../pages/ManejoTactico/ManejoTactico';
import CursosEspecializados from '../pages/CursosEspecializados/CursosEspecializados';
import Blog from '../pages/Blog/Blog';
import Contacto from '../pages/Contacto/Contacto';

const AppRouter = () => {
	return (
		<Router>
			<LayoutHeader />
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/sobre-nosotros" element={<SobreNosotros />} />
				<Route path="/certificacion-trc" element={<CertificacionTRC />} />
				<Route path="/programa-escolta" element={<ProgramaEscolta />} />
				<Route path="/defensa-urbana" element={<DefensaUrbana />} />
				<Route path="/manejo-tactico" element={<ManejoTactico />} />
				<Route
					path="/cursos-especializados"
					element={<CursosEspecializados />}
				/>
				<Route path="/blog" element={<Blog />} />
				<Route path="/contacto" element={<Contacto />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
