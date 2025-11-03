import { create } from 'zustand';

export type Task = {
  id?: number;
  title: string;
  description: string;
  status: 'Backlog' | 'In Progress' | 'Review' | 'Done';
};

type TasksState = {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
};

export const useTasksStore = create<TasksState>((set) => ({
  selectedStatus: 'Backlog',
  setSelectedStatus: (status) => set({ selectedStatus: status }),
}));
