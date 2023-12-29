import { faBars, faClose, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { darkTheme, lightTheme, Theme } from "../../../domain/Theme";
import styles from "./Header.module.scss";

export const Header = ({
	theme,
	setTheme,
}: {
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}) => {
	const themeIcon =
		theme.name === "dark" ? (
			<FontAwesomeIcon icon={faMoon} size="xl" style={{ color: "#A7A7A7" }} />
		) : (
			<FontAwesomeIcon icon={faSun} size="xl" style={{ color: "#F9D784" }} />
		);
	const [toggleMenu, setToggleMenu] = useState(true);
	const handleMenu = (toggleMenu: boolean) => {
		setToggleMenu(!toggleMenu);
	};

	const handleToggleTheme = () => {
		setTheme((prevTheme) => (prevTheme.name === "light" ? darkTheme : lightTheme));
	};

	return (
		<>
			<header className={styles.header}>
				<button className={styles.menu__btn} onClick={() => handleMenu(toggleMenu)}>
					<figure>
						{toggleMenu ? (
							<FontAwesomeIcon icon={faBars} size="2x" style={{ color: "#4ba598" }} />
						) : (
							<FontAwesomeIcon icon={faClose} size="2x" style={{ color: "#4ba598" }} />
						)}
					</figure>
				</button>
				<nav className={toggleMenu ? styles.nav : ""}>
					<ul>
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? `${styles.home} ${styles.active}` : styles.home
								}
								onClick={() => handleMenu(toggleMenu)}
								style={{ color: theme.primaryTextColor }}
							>
								Inicio
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/education"
								className={({ isActive }) =>
									isActive ? `${styles.education} ${styles.active}` : styles.education
								}
								onClick={() => handleMenu(toggleMenu)}
								style={{ color: theme.primaryTextColor }}
							>
								Educación
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/experience"
								className={({ isActive }) =>
									isActive ? `${styles.experience} ${styles.active}` : styles.experience
								}
								onClick={() => handleMenu(toggleMenu)}
								style={{ color: theme.primaryTextColor }}
							>
								Experiencia
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/projects"
								className={({ isActive }) =>
									isActive ? `${styles.projects} ${styles.active}` : styles.projects
								}
								onClick={() => handleMenu(toggleMenu)}
								style={{ color: theme.primaryTextColor }}
							>
								Proyectos
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								className={({ isActive }) =>
									isActive ? `${styles.contact} ${styles.active}` : styles.contact
								}
								onClick={() => handleMenu(toggleMenu)}
								style={{ color: theme.primaryTextColor }}
							>
								Contáctame
							</NavLink>
						</li>
						<li>
							<button
								className={
									theme.name === "dark" ? styles.button_dark_icon : styles.button_light_icon
								}
								style={{ backgroundColor: theme.name === "dark" ? "#292c3f" : "#7cd1f7" }}
								onClick={handleToggleTheme}
							>
								{themeIcon}
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
