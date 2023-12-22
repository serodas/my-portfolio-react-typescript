import { ListItemRepository } from "../../domain/listItem/ListItemRepository";
import styles from "./Header.module.scss";
import { ListItem } from "./listItem/ListItem";

export const Header = ({ repository }: { repository: ListItemRepository }) => {
	const listItems = repository.search();

	return (
		<>
			<header className={styles.header}>
				<nav>
					<ul>
						{listItems.map((listItem) => (
							<ListItem listItem={listItem} key={listItem.id} />
						))}
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
