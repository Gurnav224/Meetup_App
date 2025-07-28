export default function Events() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Upcoming Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Event Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Summit 2025</h3>
            <p className="text-gray-600 mb-4">Join industry leaders for networking and insights.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Jan 15, 2025</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Event Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Wedding Expo</h3>
            <p className="text-gray-600 mb-4">Discover perfect vendors for your special day.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Feb 10, 2025</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Event Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-pink-500 to-red-600"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Birthday Bash Planning</h3>
            <p className="text-gray-600 mb-4">Make birthdays unforgettable with our experts.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Ongoing</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Want to Host Your Own Event?</h2>
        <p className="text-gray-600 mb-6">Let our expert team help you plan the perfect event.</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}
