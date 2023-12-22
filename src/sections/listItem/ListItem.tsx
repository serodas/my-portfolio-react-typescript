import { ListItemInterface } from "../../domain/listItem/ListItemInterface";
import styles from "./ListItem.module.scss";

export const ListItem = ({ listItem }: { listItem: ListItemInterface }) => {
	return (
		<li className="nav">
			<a href={listItem.url} className={styles[listItem.type]}>
				{listItem.name}
			</a>
		</li>
	);
};
