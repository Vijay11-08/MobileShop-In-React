import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Events', path: '/adminevents' },
    { name: 'Registration Data', path: '/adminregistrations' },
    { name: 'Payments', path: '/adminpayments' },
    { name: 'Flashbacks', path: '/adminflashbacks' },
    { name: 'Calendar', path: '/admincalendar' },
    { name: 'Feedback', path: '/adminfeedbacks' },
    { name: 'Login', path: '/adminlogin' },
  ];

  return (
    <div className="w-64 bg-white text-gray-800 h-full p-4">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name} className="mb-2">
            <a
              onClick={() => navigate(item.path)}
              className="hover:underline cursor-pointer block"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
