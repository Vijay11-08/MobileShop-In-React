import Sidebar from '../../components/AdminComponents/Sidebar';
import TableForm from '../../components/AdminComponents/TableForm';
import EventTable from '../../components/AdminComponents/EventTable';
import Navbar from '../../components/AdminComponents/Navbar';

const AdminRegistrations = () => {
  const columns = ['Email', 'School name', 'Number', 'Actions'];

  const registrations = [
    { id: 1, email: 'Abc@rku.ac.in', schoolname: 'SOE', number: '123456890' },
    { id: 2, email: 'Xyz@rku.ac.in', schoolname: 'SOC', number: '987654321' },
    { id: 3, email: 'Abc@rku.ac.in', schoolname: 'SOE', number: '123456890' },
    { id: 4, email: 'Abc@rku.ac.in', schoolname: 'SOE', number: '123456890' },
    { id: 5, email: 'Abc@rku.ac.in', schoolname: 'SOE', number: '123456890' },
  ];

  const registrationFields = [
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'schoolname', type: 'text', placeholder: 'School Name' },
    { name: 'number', type: 'text', placeholder: 'Phone Number' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Form Submitted!');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="p-6 flex-1">
              <Navbar title="Registrations" />
        
        <div className="bg-white p-4 rounded shadow-md mb-6">
          <EventTable columns={columns} events={registrations} />
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <TableForm
            title="Manage Registrations"
            fields={registrationFields}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminRegistrations;
