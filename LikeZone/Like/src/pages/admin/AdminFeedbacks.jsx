import Sidebar from '../../components/AdminComponents/Sidebar';
import EventTable from "../../components/AdminComponents/EventTable";
import Navbar from '../../components/AdminComponents/Navbar';

const AdminFeedbacks = () => {
  const columns = ["Event Name", "Rating", "Comment", "Suggestion"];

  const feedback = [
    { id: 1, eventname: "Technoplanet", rating: "5", comment: "//",suggestion:"//" },
    { id: 2, eventname: "Technoplanet", rating: "5", comment: "//",suggestion:"//" },
    { id: 3, eventname: "Technoplanet", rating: "5", comment: "//",suggestion:"//"},
    { id: 4,eventname: "Technoplanet", rating: "5", comment: "//",suggestion:"//"},
    { id: 5, eventname: "Technoplanet", rating: "5", comment: "//",suggestion:"//"},
  ];

 

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="p-6 flex-1">
      <Navbar title="Feedbacks" />

        <div className="bg-white p-4 rounded shadow-md mb-6">
          <EventTable columns={columns} events={feedback} />
        </div>
        
      </div>
    </div>
  );
};

export default AdminFeedbacks;
