export interface ListItem {
  id: string;
  title: string;
  description?: string;
}

export interface List<T = ListItem> {
  options?: ReadonlyArray<T>;
}

export interface MessageItemProps extends Omit<ListItem, 'title'> {
  userName: string;
  timestamp: number;
  isEdit?: boolean;
  onEdit?: (text: string, formId: string) => void;
}
