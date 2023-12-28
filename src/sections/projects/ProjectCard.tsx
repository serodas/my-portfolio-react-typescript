import { ProjectInterface } from "../../domain/ProjectInterface";
import { Theme } from "../../domain/Theme";
import styles from "./ProjectCard.module.scss";
import { ProjectIcon } from "./ProjectIcon";

export const ProjectCard = ({ project, theme }: { project: ProjectInterface; theme: Theme }) => {
	return (
		<article
			className={styles.project__container}
			style={{ backgroundColor: theme.ProjectCardColor }}
		>
			<header style={{ color: theme.primaryTextColor }}>{project.title}</header>
			<p style={{ color: theme.primaryTextColor }}>{project.description}</p>
			<footer className={styles.tecnologies__container}>
				<aside className={styles.languages__container}>
					<ul className={styles.dev_icons__container__soft_skills}>
						{project.languages.map((language) => (
							<li className={styles.software_skill__container__inline} key={language}>
								<figure>
									<ProjectIcon icon={language} />
									<figcaption style={{ color: theme.secondaryTextColor }}>{language}</figcaption>
								</figure>
							</li>
						))}
					</ul>
				</aside>
				<aside className={styles.languages__container}>
					<ul className={styles.dev_icons__container__soft_skills}>
						<li className={styles.software_skill__container__inline}>
							<figure>
								<a href={project.github_url} target="_blank" rel="noreferrer">
									<ProjectIcon icon="GitHub" />
								</a>
								<figcaption style={{ color: theme.secondaryTextColor }}>GitHub</figcaption>
							</figure>
						</li>
						{project.website_url && (
							<li className={styles.software_skill__container__inline}>
								<figure>
									<a href={project.website_url} target="_blank" rel="noreferrer">
										<ProjectIcon icon="Demo" />
									</a>
									<figcaption style={{ color: theme.secondaryTextColor }}>Demo</figcaption>
								</figure>
							</li>
						)}
					</ul>
				</aside>
			</footer>
		</article>
	);
};
