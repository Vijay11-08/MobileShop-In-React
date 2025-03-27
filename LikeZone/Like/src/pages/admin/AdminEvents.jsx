import Sidebar from '../../components/AdminComponents/Sidebar';
import TableForm from '../../components/AdminComponents/TableForm';
import EventTable from '../../components/AdminComponents/EventTable';
import Navbar from '../../components/AdminComponents/Navbar';

const AdminEvents = () => {
  const columns = ['Event Name', 'Date', 'Location', 'Price', 'Actions'];

  const events = [
    {
      id: 1,
      eventname: 'Event 1',
      date: '2023-10-01',
      location: 'Campus',
      price: 'Free',
    },
    {
      id: 2,
      eventname: 'Event 2',
      date: '2023-11-01',
      location: 'Campus',
      price: 'Free',
    },
    {
      id: 3,
      eventname: 'Event 3',
      date: '2023-12-01',
      location: 'Campus',
      price: 'Free',
    },
    {
      id: 4,
      eventname: 'Event 4',
      date: '2024-01-01',
      location: 'Campus',
      price: 'Free',
    },
    {
      id: 5,
      eventname: 'Event 5',
      date: '2024-02-01',
      location: 'Campus',
      price: 'Free',
    },
  ];

  const eventFields = [
    { name: 'eventname', type: 'text', placeholder: 'Event Title' },
    { name: 'date', type: 'date', placeholder: 'Date' },
    { name: 'location', type: 'text', placeholder: 'Location' },
    { name: 'price', type: 'text', placeholder: 'Price' },
    { name: 'description', type: 'textarea', placeholder: 'Event Description' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Form Submitted!');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="p-6 flex-1">
              <Navbar title="Events" />
        
        <div className="bg-white p-4 rounded shadow-md mb-6">
          <EventTable columns={columns} events={events} />
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <TableForm
            title="Manage Events"
            fields={eventFields}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminEvents;
