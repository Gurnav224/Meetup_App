import { NavLink } from 'react-router';

export function AppNav() {
  return (
    <nav className="flex space-x-8">
      <NavLink 
        to="/" 
        end
        className={({ isActive }) => 
          `text-sm font-medium transition-colors hover:text-blue-600 ${
            isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-500'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink 
        to="/events" 
        className={({ isActive }) => 
          `text-sm font-medium transition-colors hover:text-blue-600 ${
            isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-500'
          }`
        }
      >
        Events
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => 
          `text-sm font-medium transition-colors hover:text-blue-600 ${
            isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-500'
          }`
        }
      >
        About
      </NavLink>
    </nav>
  );
}
