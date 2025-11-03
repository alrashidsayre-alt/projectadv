import { create } from 'zustand'

const useWorkoutStore = create((set) => ({
  workouts: [],
  addWorkout: (workout) => 
    set((state) => ({
      workouts: [...state.workouts, { ...workout, id: Date.now(), completed: false }],
    })),
  toggleWorkout: (id) =>
    set((state) => ({
      workouts: state.workouts.map((workout) =>
        workout.id === id ? { ...workout, completed: !workout.completed } : workout
      ),
    })),
  deleteWorkout: (id) =>
    set((state) => ({
      workouts: state.workouts.filter((workout) => workout.id !== id),
    })),
}))

export default useWorkoutStore