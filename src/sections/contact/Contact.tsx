import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Theme } from "../../domain/Theme";
import styles from "./Contact.module.scss";
import Me from "./me.png";

export const Contact = ({ theme }: { theme: Theme }) => {
	return (
		<section className={styles.section}>
			<div className={styles.icon__container}>
				<figure className={styles.contact_heading__container}>
					<img src={Me} alt="me" />
				</figure>
			</div>

			<article className={styles.contact_text__container}>
				<header className={styles.contact_text__title} style={{ color: theme.primaryTextColor }}>
					Contáctame
				</header>
				<p className={styles.contact_text__subtitle} style={{ color: theme.secondaryTextColor }}>
					Puede contactarme en los lugares mencionados a continuación. Le responderé tan pronto como
					me sea posible.
				</p>
				<div className={styles.social_media__container__contact}>
					<a
						href="https://github.com/serodas"
						className={`${styles.icon_button}`}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} size="2xs" style={{ color: theme.primaryTextColor }} />
					</a>
					<a
						href="https://linkedin.com/in/serodas"
						className={`${styles.icon_button}`}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} size="2xs" style={{ color: "#0e76a8" }} />
					</a>
				</div>

				<footer className={styles.github_button__container}>
					<a
						href="https://github.com/serodas"
						className={styles.button__primary}
						target="_blank"
						rel="noopener noreferrer"
					>
						Ver mi currículum
					</a>
				</footer>
			</article>
		</section>
	);
};
