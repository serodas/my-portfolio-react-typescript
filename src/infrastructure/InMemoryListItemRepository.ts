import { ListItemInterface } from "../domain/listItem/ListItemInterface";
import { ListItemRepository } from "../domain/listItem/ListItemRepository";
import { ListItems } from "../list_items";

export class InMemoryListItemRepository implements ListItemRepository {
	search(): ListItemInterface[] {
		return ListItems;
	}
}
