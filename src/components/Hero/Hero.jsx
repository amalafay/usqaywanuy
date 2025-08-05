import React, { useState, useRef } from 'react';
import './Hero.css';
import videoFondo from '../../assets/videos/hero-video.mp4';
import imagenFondo from '../../assets/images/hero-background.jpg';
import HeroCards from './HeroCards';

const Hero = () => {
	const [muted, setMuted] = useState(true);
	const videoRef = useRef();

	const toggleMute = () => {
		setMuted((prev) => !prev);
		if (videoRef.current) {
			videoRef.current.muted = !videoRef.current.muted;
		}
	};

	return (
		<>
			<section className="hero-section">
				<div className="hero-media">
					<video
						ref={videoRef}
						className="hero-video"
						autoPlay
						loop
						playsInline
						muted={muted}
						poster={imagenFondo}
					>
						<source src={videoFondo} type="video/mp4" />
						Tu navegador no soporta video HTML5.
					</video>
					<div className="hero-overlay"></div>
				</div>

				<div className="hero-content">
					<h1 className="hero-titulo">VELOCIDAD EN EL DESENFUNDE</h1>
					<p className="hero-titulo-dos">PRESICIÓN EN EL IMPACTO</p>

					<button className="mute-button" onClick={toggleMute}>
						{muted ? '🔊 Activar audio' : ' 🔇 Silenciar'}
					</button>
				</div>
				<div className="hero-content-menu"></div>
			</section>
			{/* Cards superpuestas */}
			<HeroCards />
		</>
	);
};

export default Hero;
