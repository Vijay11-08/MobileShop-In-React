const EventTable = ({ columns, events }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200 text-left">
            {columns.map((col, index) => (
              <th key={index} className={`px-4 py-2 ${col === "Actions" ? "text-center" : ""}`}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="text-left border-b border-gray-300">
              {columns.map((col, index) => (
                col !== "Actions" ? (
                  <td key={index} className="px-4 py-2">
                    {event[col.toLowerCase().replace(/\s+/g, '')] || "N/A"}
                  </td>
                ) : (
                  <td key={index} className="px-4 py-2 text-center">
                    <button className="text-blue-600 hover:underline mr-4">Edit</button>
                    <button className="text-red-500 hover:underline">Delete</button>
                  </td>
                )
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;
