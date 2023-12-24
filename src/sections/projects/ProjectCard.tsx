import { ProjectInterface } from "../../domain/ProjectInterface";
import styles from "./ProjectCard.module.scss";
import { ProjectIcon } from "./ProjectIcon";

export const ProjectCard = ({ project }: { project: ProjectInterface }) => {
	return (
		<article className={styles.project__container}>
			<header>{project.title}</header>
			<p>{project.description}</p>
			<footer className={styles.tecnologies__container}>
				<aside className={styles.languages__container}>
					<ul className={styles.dev_icons__container__soft_skills}>
						{project.languages.map((language) => (
							<li className={styles.software_skill__container__inline} key={language}>
								<figure>
									<ProjectIcon icon={language} />
									<figcaption>{language}</figcaption>
								</figure>
							</li>
						))}
					</ul>
				</aside>
			</footer>
		</article>
	);
};
