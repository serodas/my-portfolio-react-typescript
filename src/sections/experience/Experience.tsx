import { Theme } from "../../domain/Theme";
import { DevProductivitySVG } from "./DevProductivitySVG";
import styles from "./Experience.module.scss";

export const Experience = ({ theme }: { theme: Theme }) => {
	return (
		<section className={styles.section}>
			<div className={styles.icon__container}>
				<figure>
					<DevProductivitySVG theme={theme} />
				</figure>
			</div>

			<article className={styles.experience_text__container}>
				<header className={styles.experience_text__title} style={{ color: theme.primaryTextColor }}>
					Experiencia
				</header>
				<p className={styles.experience_text__subtitle} style={{ color: theme.secondaryTextColor }}>
					Mi experiencia laboral más relevante ha sido como desarrollador Full-Stack Senior en la
					caja de compensación Comfamiliar Risaralda, donde he trabajado durante los últimos cinco
					años. En esta empresa he participado en proyectos internos para diferentes áreas como
					educación, salud y finanzas, utilizando diversas tecnologías y herramientas.
				</p>

				<h3 className={styles.experience_subtext__title} style={{ color: theme.primaryTextColor }}>
					Mis principales responsabilidades y logros son:
				</h3>

				<ul
					className={styles.work_skills__container__list}
					style={{ color: theme.secondaryTextColor }}
				>
					<li>
						🔥Diseñar, implementar y mantener aplicaciones web desarrolladas en PHP con Symfony para
						la gestión de procesos internos y externos de la entidad, tales como el sistema de
						jornadas escolares complementarias, el portal web institucional, el sistema de
						asignación de subsidios de vivienda y el sistema para crédito social.
					</li>
					{/* <li>
						🔥Desarrollar e implementar aplicaciones web usando diversos frameworks como Symfony,
						Laravel, Django, ExpressJS y ReactJS
					</li> */}
					<li>
						🔥 Colaborar con otros desarrolladores, analistas y usuarios finales para definir los
						requisitos, especificaciones y pruebas de los proyectos asignados, siguiendo las
						metodologías ágiles y los estándares de calidad establecidos.
					</li>
					<li>
						🔥Investigar y aprender constantemente nuevas herramientas, frameworks y buenas
						prácticas para mejorar el rendimiento, la seguridad y la usabilidad de las aplicaciones
						desarrolladas.
					</li>
					<li>
						🔥Liderar el proceso de migración de algunas aplicaciones legacy a tecnologías más
						modernas y eficientes, logrando reducir los tiempos de carga, optimizar los recursos y
						facilitar el mantenimiento.
					</li>
					<li>
						🔥Capacitar y asesorar a otros desarrolladores y usuarios en el uso de las aplicaciones
						desarrolladas, resolviendo dudas, problemas y sugerencias.
					</li>
				</ul>
			</article>
		</section>
	);
};
