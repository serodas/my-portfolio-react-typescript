import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

export const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<nav>
					<ul>
						<li className="nav">
							<NavLink to="/" className={styles.home}>
								Inicio
							</NavLink>
						</li>
						<li className="nav">
							<NavLink to="/education" className={styles.education}>
								Educación
							</NavLink>
						</li>
						<li className="nav">
							<a href="#" className={styles.experience}>
								Experiencia
							</a>
						</li>
						<li className="nav">
							<a href="#" className={styles.projects}>
								Proyectos
							</a>
						</li>
						<li className="nav">
							<a href="#" className={styles.contact}>
								Contacto y CV
							</a>
						</li>
						<li>
							<button className={styles.menu__btn}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 0 448 512"
								>
									<path
										fill="#4ba598"
										d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
									/>
								</svg>
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};
