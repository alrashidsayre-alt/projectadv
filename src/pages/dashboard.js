import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useAuthStore from '../store/authStore'
import WorkoutForm from '../components/WorkoutForm'
import WorkoutList from '../components/WorkoutList'

export default function Dashboard() {
  const router = useRouter()
  const { isAuthenticated, user, logout } = useAuthStore()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Workout Tracker
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700 dark:text-gray-300">
                Welcome, {user?.name}
              </span>
              <button
                onClick={() => {
                  logout()
                  router.push('/login')
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto mt-8 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <WorkoutForm />
          <WorkoutList />
        </div>
      </main>
    </div>
  )
}
