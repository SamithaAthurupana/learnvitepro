import {storeTask} from "./utilities/state/taskSlice.js";
import {useDispatch} from "react-redux";
import {useState} from "react";

const App = () => {
  const [task, setTasks] = useState()
    const dispatch = useDispatch()

  const handleInput = (event) => {
    setTasks(event.target.value );
  }
  ;
  const addTask = () => {
    dispatch(storeTask(task))
  }

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
            type="text" name='task' id="visitors" onChange={handleInput} className="input_field" placeholder="" required/>
        </div>
        <div className="mt-3">
          <button type="button" className="dark_button m-4"
          onClick={()=> addTask()}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
