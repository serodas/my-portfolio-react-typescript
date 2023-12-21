import { ListItemInterface } from "./ListItemInterface";

export interface ListItemRepository {
	search(): ListItemInterface[];
}
