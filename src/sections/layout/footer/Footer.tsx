import { Theme } from "../../../domain/Theme";
import styles from "./Footer.module.scss";

export const Footer = ({ theme }: { theme: Theme }) => {
	return (
		<footer className={styles.footer} style={{ color: theme.secondaryTextColor }}>
			<p> Hecho con ❤️ por Samir Rodas</p>
		</footer>
	);
};
