import { AppNav } from './app-nav';

export function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Event Villa</h1>
            <AppNav />
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to Event Villa
            </h2>
            <p className="text-lg text-gray-600">
              Your premier destination for event management and planning.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
