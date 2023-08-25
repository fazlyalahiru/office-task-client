import { useEffect } from "react";
import { useState } from "react";
import IncompletedTask from "./components/IncompletedTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("tasks.json")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return (
    <div className="flex h-screen overflow-x-scroll bg-white gap-2 py-2">
      <div className="flex w-full gap-2 p-2">
        <div className="w-1/4 h-screen bg-[#F2F4F7] flex-shrink-0 p-4  overflow-y-scroll custom-scrollbar rounded">
          {tasks.map((task) => (
            // eslint-disable-next-line react/prop-types
            <IncompletedTask data={task} key={task.id} />
          ))}
        </div>

        <div className="w-1/4 h-screen bg-blue-300 flex-shrink-0 p-4  overflow-y-scroll custom-scrollbar rounded">
          <div className="h-36">this is inner div 1</div>
          <div className="h-36 ">this is inner div 2</div>
          <div className="h-36 ">this is inner div 3</div>
          <div className="h-36">this is inner div 4</div>
        </div>

        <div className="w-1/4 h-screen bg-gray-300 flex-shrink-0 p-4  overflow-y-scroll custom-scrollbar rounded">
          <div className="h-36">this is inner div 1</div>
          <div className="h-36 ">this is inner div 2</div>
          <div className="h-36 ">this is inner div 3</div>
          <div className="h-36">this is inner div 4</div>
        </div>

        <div className="w-1/4 h-screen bg-yellow-300 flex-shrink-0 p-4  overflow-y-scroll custom-scrollbar rounded">
          <div className="h-36">this is inner div 1</div>
          <div className="h-36 ">this is inner div 2</div>
          <div className="h-36 ">this is inner div 3</div>
          <div className="h-36">this is inner div 4</div>
        </div>

        <div className="w-1/4 h-screen bg-purple-300 flex-shrink-0 p-4  overflow-y-scroll custom-scrollbar rounded">
          <div className="h-36">this is inner div 1</div>
          <div className="h-36 ">this is inner div 2</div>
          <div className="h-36 ">this is inner div 3</div>
          <div className="h-36">this is inner div 4</div>
        </div>
      </div>
    </div>
  );
};

export default App;
