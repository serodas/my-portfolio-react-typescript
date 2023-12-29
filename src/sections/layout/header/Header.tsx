import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
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
					<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 448 512">
						<path
							fill="#4ba598"
							d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
						/>
					</svg>
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
