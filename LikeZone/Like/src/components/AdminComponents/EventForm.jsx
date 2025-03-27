const EventForm = () => {
  return (
    <div className=" mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Events</h2>
      <form className="flex flex-col space-y-4">
        <input className="border border-gray-200  p-3 rounded-md w-full" type="text" placeholder="Event Title" />
        <input className="border border-gray-200 text-gray-300 p-3 rounded-md w-full" type="date" />
        <input className="border border-gray-200 p-3 rounded-md w-full" type="text" placeholder="Location" />
        <input className="border border-gray-200 p-3 rounded-md w-full" type="text" placeholder="Price" />
        <textarea className="border border-gray-200 p-3 rounded-md w-full" placeholder="Event Description"></textarea>
        <div className="flex space-x-4">
          <button className="bg-black text-white px-6 py-3 rounded-md">Create Event</button>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-md">Edit Event</button>
          <button className="bg-red-500 text-white px-6 py-3 rounded-md">Delete Event</button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
