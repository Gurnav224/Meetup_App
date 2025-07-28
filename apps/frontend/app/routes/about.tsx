export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Event Villa</h1>
      
      <div className="prose prose-lg text-gray-700">
        <p className="mb-6">
          Event Villa is your premier destination for seamless event management and planning. 
          We specialize in creating unforgettable experiences for all types of events.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Corporate Event Planning</li>
          <li>Wedding Management</li>
          <li>Birthday Celebrations</li>
          <li>Conference Organization</li>
          <li>Social Gatherings</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Professional event management team</li>
          <li>Customized solutions for every budget</li>
          <li>Full-service planning from concept to execution</li>
          <li>Vendor network and venue partnerships</li>
        </ul>
      </div>
    </div>
  );
}
