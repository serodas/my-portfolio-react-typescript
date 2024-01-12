import { ProjectRepository } from "../../domain/ProjectRepository";
import { Theme } from "../../domain/Theme";
import styles from "./Project.module.scss";
import { ProjectCard } from "./ProjectCard";
import ProjectIcon from "./projects.svg";

export const Project = ({ repository, theme }: { repository: ProjectRepository; theme: Theme }) => {
	const projects = repository.search();

	return (
		<section className={styles.section}>
			<div className={styles.icon__container}>
				<figure>
					<img src={ProjectIcon} alt="innovation projects" />
				</figure>
			</div>

			<article className={styles.project_text__container}>
				<header className={styles.project_text__title} style={{ color: theme.primaryTextColor }}>
					Mis Proyectos
				</header>
				<p className={styles.project_text__subtitle} style={{ color: theme.secondaryTextColor }}>
					En los proyectos aplico mis conocimientos y habilidades en el desarrollo de aplicaciones
					web que ofrecen una experiencia de usuario óptima, dinámica y adaptativa, siguiendo las
					buenas prácticas de programación. También demuestro mi competencia para crear, integrar,
					documentar APIs eficientes, flexibles y confiables, utilizando diversas tecnologías como
					Symfony y Django. Algunos de mis proyectos son:
				</p>
			</article>

			<div className={styles.projects__container}>
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} theme={theme} />
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
