import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

export const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(true);
	const handleMenu = (toggleMenu: boolean) => {
		setToggleMenu(!toggleMenu);
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
							<NavLink to="/" className={styles.home} onClick={() => handleMenu(toggleMenu)}>
								Inicio
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/education"
								className={styles.education}
								onClick={() => handleMenu(toggleMenu)}
							>
								Educación
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/experience"
								className={styles.experience}
								onClick={() => handleMenu(toggleMenu)}
							>
								Experiencia
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/projects"
								className={styles.projects}
								onClick={() => handleMenu(toggleMenu)}
							>
								Proyectos
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								className={styles.contact}
								onClick={() => handleMenu(toggleMenu)}
							>
								Contáctame
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
