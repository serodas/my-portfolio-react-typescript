import styles from "./Contact.module.scss";
import Me from "./me.png";

export const Contact = () => {
	return (
		<section className={styles.section}>
			<div className={styles.icon__container}>
				<figure className={styles.contact_heading__container}>
					<img src={Me} alt="me" />
				</figure>
			</div>

			<article className={styles.contact_text__container}>
				<h1 className={styles.contact_text__title}>Contáctame</h1>
				<p className={styles.contact_text__subtitle}>
					Puede contactarme en los lugares mencionados a continuación. Le responderé tan pronto como
					me sea posible.
				</p>
				<div className={styles.social_media__container__contact}>
					<a
						href="https://github.com/serodas"
						className={`${styles.icon_button} ${styles.github}`}
						target="_blank"
						rel="noreferrer"
					>
						<i className="fa-brands fa-github"></i>
					</a>
					<a
						href="https://linkedin.com/in/serodas"
						className={`${styles.icon_button} ${styles.linkedin}`}
						target="_blank"
						rel="noreferrer"
					>
						<i className="fa-brands fa-linkedin-in"></i>
					</a>
				</div>

				<div className={styles.github_button__container}>
					<a
						href="https://github.com/serodas"
						className={styles.button__primary}
						target="_blank"
						rel="noopener noreferrer"
					>
						Ver mi currículum
					</a>
				</div>
			</article>
		</section>
	);
};
