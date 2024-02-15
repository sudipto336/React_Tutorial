export interface TodoDetail {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface TodoAction {
  type: string;
  id: number;
}
