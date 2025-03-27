import Sidebar from '../../components/AdminComponents/Sidebar';
import TableForm from '../../components/AdminComponents/TableForm';
import EventTable from "../../components/AdminComponents/EventTable";
import Navbar from '../../components/AdminComponents/Navbar';

const AdminPayments = () => {
  const columns = ["Email", "Payment Id", "Number", "Actions"];

  const payment = [
    { id: 1, email: "Abc@rku.ac.in", paymentid: "#123456@#$", number: "123456890" },
    { id: 2, email: "Xyz@rku.ac.in", paymentid: "#123456@#$", number: "987654321" },
    { id: 3, email: "Abc@rku.ac.in", paymentid: "#123456@#$", number: "123456890"},
    { id: 4, email: "Abc@rku.ac.in", paymentid: "#123456@#$", number: "123456890" },
    { id: 5, email: "Abc@rku.ac.in", paymentid: "#123456@#$", number: "123456890" },
  ];

  const paymentFields = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "payemntid", type: "text", placeholder: "School Enter Payment Id" },
    { name: "number", type: "text", placeholder: "Phone Number" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Form Submitted!");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="p-6 flex-1">
      <Navbar title="Payment" />

        <div className="bg-white p-4 rounded shadow-md mb-6">
          <EventTable columns={columns} events={payment} />
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <TableForm title="Payments" fields={paymentFields} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AdminPayments;
