import { ProjectRepository } from "../../domain/ProjectRepository";
import styles from "./Project.module.scss";
import { ProjectCard } from "./ProjectCard";
import ProjectIcon from "./projects.svg";

export const Project = ({ repository }: { repository: ProjectRepository }) => {
	const projects = repository.search();

	return (
		<section className={styles.section}>
			<div className={styles.icon__container}>
				<figure>
					<img src={ProjectIcon} alt="innovation projects" />
				</figure>
			</div>

			<article className={styles.project_text__container}>
				<header className={styles.project_text__title}>Mis Proyectos</header>
				<p className={styles.project_text__subtitle}>
					En mis proyectos personales, aplico mis conocimientos y habilidades en el desarrollo de
					aplicaciones web que ofrecen una experiencia de usuario óptima, dinámica y adaptativa,
					siguiendo las buenas prácticas. También demuestro mi competencia para crear, integrar,
					documentar APIs eficientes, flexibles y confiables, utilizando diversas tecnologías.
					Algunos de mis proyectos son:
				</p>
			</article>

			<div className={styles.projects__container}>
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>

			<div className={styles.github_button__container}>
				<a
					href="https://github.com/serodas"
					className={styles.button__primary}
					target="_blank"
					rel="noopener noreferrer"
				>
					Más Proyectos(GitHub)
				</a>
			</div>
		</section>
	);
};
