import Sidebar from '../../components/AdminComponents/Sidebar';
import TableForm from '../../components/AdminComponents/TableForm';
import EventTable from '../../components/AdminComponents/EventTable';
import Navbar from '../../components/AdminComponents/Navbar';

const AdminCalendar = () => {
  const columns = ['Title', 'Time', 'Date', 'Actions'];

  const calendar = [
    { id: 1, title: 'title', time: '14:00', date: '12/02/25' },
    { id: 2, title: 'title', time: '14:00', date: '12/02/25' },
    { id: 3, title: 'title', time: '14:00', date: '12/02/25' },
    { id: 4, title: 'title', time: '14:00', date: '12/02/25' },
    { id: 5, title: 'title', time: '14:00', date: '12/02/25' },
  ];

  const calendarFields = [
    { name: 'title', type: 'test', placeholder: 'Title' },
    { name: 'time', type: 'time', placeholder: 'Time' },
    { name: 'number', type: 'date', placeholder: 'Date' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Calendar Form Submitted!');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="p-6 flex-1">
      <Navbar title="Calendar" />
        <div className="bg-white p-4 rounded shadow-md mb-6">
          <EventTable columns={columns} events={calendar} />
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <TableForm
            title="Calendar"
            fields={calendarFields}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminCalendar;
