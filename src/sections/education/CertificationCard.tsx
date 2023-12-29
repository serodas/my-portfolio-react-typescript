import { Certification } from "../../domain/Certification";
import { Theme } from "../../domain/Theme";
import styles from "./CertificationCard.module.scss";
import { CertificationIcon } from "./CertificationIcon";

export const CertificationCard = ({
	certification,
	theme,
}: {
	certification: Certification;
	theme: Theme;
}) => {
	return (
		<article
			className={
				theme.name === "dark" ? styles.certification_dark_card : styles.certification_light_card
			}
		>
			<figure style={{ textAlign: "center", alignItems: "center", paddingTop: "1.5rem" }}>
				<CertificationIcon icon={certification.icon} />
			</figure>
			<div className={styles.certification_text_container}>
				<h2 className={styles.certification_text__title}>
					<a
						href={certification.link}
						target="_blank"
						rel="noreferrer"
						style={{ color: theme.primaryTextColor }}
					>
						{certification.title}
					</a>
				</h2>
				<p
					className={styles.certification_text__subtitle}
					style={{ color: theme.secondaryTextColor }}
				>
					{certification.issued_by}
				</p>
			</div>
			<footer className={styles.certification_footer}>
				{certification.tags.map((tag) => (
					<span className={styles.certification_tag} key={`${certification.id}${tag}`}>
						{tag}
					</span>
				))}
			</footer>
		</article>
	);
};
