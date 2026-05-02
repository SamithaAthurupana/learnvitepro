const App = () => {
  return (
    <>
      <div className="m-4 grid grid-cols-2">
        <div>
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Tasks
          </label>
          <input
            type="text" id="visitors" className="input_field" placeholder="" required/>
        </div>
        <div className="mt-3">
          <button type="button" className="dark_button m-4">
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
