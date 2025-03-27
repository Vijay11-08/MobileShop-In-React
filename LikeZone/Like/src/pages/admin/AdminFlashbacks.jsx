import Sidebar from '../../components/AdminComponents/Sidebar';
import TableForm from '../../components/AdminComponents/TableForm';
import EventTable from "../../components/AdminComponents/EventTable";
import Navbar from '../../components/AdminComponents/Navbar';

const AdminFlashbacks = () => {
  const columns = ["Event Name", "Date", "Highlight", "Image", "Actions"];

  const flashback = [
    { id: 1, eventname: "Event 1", date: "2023-10-01", hightlight: "-------------", image: "1.jpg" },
    { id: 2, eventname: "Event 2", date: "2023-11-01", hightlight: "-------------", image: "1.jpg" },
    { id: 3, eventname: "Event 3", date: "2023-12-01", hightlight: "-------------", image: "1.jpg" },
    { id: 4, eventname: "Event 4", date: "2024-01-01", hightlight: "-------------", image: "1.jpg" },
    { id: 5, eventname: "Event 5", date: "2024-02-01", hightlight: "-------------", image: "1.jpg" },
  ];

  const flashbackFields = [
    { name: "eventname", type: "text", placeholder: "Event Title" },
    { name: "date", type: "date", placeholder: "Date" },
    { name: "highlight", type: "text", placeholder: "Highlight" },
    { name: "image", type: "text", placeholder: "image" },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Flashback Form Submitted!");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="p-6 flex-1">
      <Navbar title="Flashbacks" />

        <div className="bg-white p-4 rounded shadow-md mb-6">
          <EventTable columns={columns} events={flashback} />
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <TableForm title="Flashbacks" fields={flashbackFields} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
export default AdminFlashbacks;
