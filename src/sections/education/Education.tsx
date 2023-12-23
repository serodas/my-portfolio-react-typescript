import { certifications } from "../../certifications";
import { CertificationCard } from "./CertificationCard";
import styles from "./Education.module.scss";
import EducationSvg from "./education.svg";
import UnadIcon from "./unad_icon.svg";

export const Education = () => {
	return (
		<section className={styles.section}>
			<div className={styles.icon__container}>
				<figure>
					<img src={EducationSvg} alt="education svg" />
				</figure>
			</div>

			<article className={styles.education_text__container}>
				<h1 className={styles.education_text__title}>Educación</h1>
				<h3 className={styles.education_subtext__title}>Certificaciones</h3>
				<p className={styles.education_text__subtitle}>
					Me apasiona el aprendizaje continuo, participo activamente en cursos y actividades
					relacionadas con la tecnología. A continuación se muestran algunas de mis principales
					certificaciones.
				</p>
			</article>
			<span className={styles.education_container__border}></span>

			<div className={styles.education_container}>
				<h1 className={styles.education__header}>Titulo Profesional</h1>
				<article className={styles.degree_container}>
					<figure>
						<img src={UnadIcon} alt="unad icon" />
					</figure>
					<div className={styles.degree_text_container}>
						<h2 className={styles.degree_text__title}>
							Universidad Nacional Abierta y a Distancia - UNAD Colombia
						</h2>
						<p className={styles.degree_text__subtitle}>
							<a
								href="https://titulos.seu.com.co/verificarTitulo/p9lIUZZEZkp78Y90"
								target="_blank"
								rel="noreferrer"
							>
								Ingeniería de Sistemas
							</a>
						</p>
						<p className={styles.degree_text__subtitle_year}>2016 - 2021</p>
					</div>
				</article>
			</div>
			<span className={styles.education_container__border}></span>

			<div className={styles.education_container}>
				<h1 className={styles.education__header}>Certificaciones</h1>
				<div className={styles.certifications_container}>
					{certifications.map((certification) => (
						<CertificationCard key={certification.id} certification={certification} />
					))}
				</div>
			</div>
		</section>
	);
};
