const TableForm = ({ title, fields, onSubmit }) => {
    return (
      <div className="mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          {fields.map((field, index) => (
            <input
              key={index}
              className="border border-gray-200 p-3 rounded-md w-full"
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
            />
          ))}
          <div className="flex space-x-4">
            <button type="submit" className="bg-black text-white px-6 py-3 rounded-md">
              Create
            </button>
            <button type="button" className="bg-yellow-500 text-white px-6 py-3 rounded-md">
              Edit
            </button>
            <button type="button" className="bg-red-500 text-white px-6 py-3 rounded-md">
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default TableForm;
  