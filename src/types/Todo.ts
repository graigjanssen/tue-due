export interface Todo {
  title: string;
  description?: string;
  status?: 'Complete' | 'Incomplete';
}