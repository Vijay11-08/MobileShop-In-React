import Sidebar from '../../components/AdminComponents/Sidebar';
import TableForm from '../../components/AdminComponents/TableForm';
import EventTable from "../../components/AdminComponents/EventTable";
import Navbar from '../../components/AdminComponents/Navbar';

const AdminLogin = () => {
  const columns = ["Email", "Password","Actions"];

  const login = [
    { id: 1, email: "abc@rku.ac.in", password: "********" },
    { id: 2, email: "abc@rku.ac.in", password: "********" },
    { id: 3, email: "abc@rku.ac.in", password: "********"},
    { id: 4, email: "abc@rku.ac.in", password: "********"},
    { id: 5, email: "abc@rku.ac.in", password: "********"},
  ];

  const loginFields = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "text", placeholder: "Password" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Form Submitted!");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="p-6 flex-1">
      <Navbar title="Login" />

        <div className="bg-white p-4 rounded shadow-md mb-6">
          <EventTable columns={columns} events={login} />
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <TableForm title="Login" fields={loginFields} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
