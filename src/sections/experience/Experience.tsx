import DevProductivityIcon from "./dev_productivity.svg";
import styles from "./Experience.module.scss";

export const Experience = () => {
	return (
		<section className={styles.section}>
			<div className={styles.icon__container}>
				<figure>
					<img src={DevProductivityIcon} alt="dev productivity" />
				</figure>
			</div>

			<article className={styles.experience_text__container}>
				<h1 className={styles.experience_text__title}>Experiencia</h1>
				<p className={styles.experience_text__subtitle}>
					Mi experiencia laboral más relevante ha sido como desarrollador Full-Stack Senior en la
					caja de compensación Comfamiliar Risaralda, donde he trabajado durante los últimos cinco
					años. En esta empresa he participado en proyectos internos para diferentes áreas como
					educación, salud y finanzas, utilizando diversas tecnologías y herramientas.
				</p>

				<h3 className={styles.experience_subtext__title}>Mis principales responsabilidades son:</h3>

				<ul className={styles.work_skills__container__list}>
					<li>
						🔥Realizar el análisis de los requisitos y necesidades de los clientes para la
						aplicación
					</li>
					<li>
						🔥Desarrollar e implementar aplicaciones web usando diversos frameworks como Symfony,
						Laravel, Django, ExpressJS y ReactJS
					</li>
					<li>
						🔥Realizar el mantenimiento y la actualización de las aplicaciones de acuerdo a los
						cambios solicitados por los clientes
					</li>
					<li>
						🔥Refactorizar código para mejorar la confiabilidad, escalabilidad y mantenibilidad
					</li>
					<li>
						🔥Optimizar consultas SQL para mejorar el rendimiento de la aplicación y reducir tiempos
						de respuesta
					</li>
				</ul>
			</article>
		</section>
	);
};
