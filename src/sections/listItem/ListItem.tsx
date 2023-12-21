import { ListItemInterface } from "../../domain/listItem/ListItemInterface";
import styles from "./ListItem.module.scss";

interface ListItemProps {
	listItem: ListItemInterface;
}

export const ListItem = ({ listItem }: ListItemProps) => {
	return (
		<li className="nav">
			<a href={listItem.url} className={styles[listItem.type]}>
				{listItem.name}
			</a>
		</li>
	);
};
