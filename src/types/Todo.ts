export interface Todo {
  id: number;
  title: string;
  description?: string;
  status?: 'Complete' | 'Incomplete';
}