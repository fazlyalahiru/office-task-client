import { useEffect } from "react";
import { useState } from "react";
import Task from "./components/Task";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("tasks.json")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  useEffect(() => {
    fetch("todo.json")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div className="flex h-screen overflow-x-scroll bg-white gap-2 py-2">
      <div className="md:flex w-full  p-2">
        <div className="md:w-1/4 h-screen bg-[#F2F4F7] flex-shrink-0 p-4  overflow-y-scroll custom-scrollbar rounded mx-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2 py-3">
              <div className="h-[20px] w-[20px] bg-red-600 rounded-l-full"></div>
              <div className="font-semibold">Incompleted </div>
            </div>
            <span className="bg-[#E8EEF3] py-1 px-2 text-sm font-semibold">
              {tasks.length}
            </span>
          </div>
          {tasks.map((task) => (
            <Task data={task} key={task.id} />
          ))}
        </div>
        <div className="md:w-1/4 h-screen bg-[#F2F4F7] flex-shrink-0 p-4  overflow-y-scroll custom-scrollbar rounded mx-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2 py-3">
              <div className="h-[20px] w-[20px] bg-[#00B5FF] rounded-l-full"></div>
              <div className="font-semibold">To Do </div>
            </div>
            <span className="bg-[#E8EEF3] py-1 px-2 text-sm font-semibold">
              {todos.length}
            </span>
          </div>
          {todos.map((todo) => (
            <Task data={todo} key={todo.id} />
          ))}
        </div>
        <div className="md:w-1/4 h-screen bg-[#F2F4F7] flex-shrink-0 p-4  overflow-y-scroll custom-scrollbar rounded mx-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2 py-3">
              <div className="h-[20px] w-[20px] bg-[#FFE700] rounded-l-full"></div>
              <div className="font-semibold">Doing</div>
            </div>
            <span className="bg-[#E8EEF3] py-1 px-2 text-sm font-semibold">
              {tasks.length}
            </span>
          </div>
          {tasks.map((task) => (
            <Task data={task} key={task.id} />
          ))}
        </div>
        <div className="md:w-1/4 h-screen bg-[#F2F4F7] flex-shrink-0 p-4  overflow-y-scroll custom-scrollbar rounded mx-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2 py-3">
              <div className="h-[20px] w-[20px] bg-orange-400 rounded-l-full"></div>
              <div className="font-semibold">Under Review</div>
            </div>
            <span className="bg-[#E8EEF3] py-1 px-2 text-sm font-semibold">
              {tasks.length}
            </span>
          </div>
          {tasks.map((task) => (
            <Task data={task} key={task.id} />
          ))}
        </div>
        <div className="md:w-1/4 h-screen bg-[#F2F4F7] flex-shrink-0 p-4  overflow-y-scroll custom-scrollbar rounded mx-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2 py-3">
              <div className="h-[20px] w-[20px] bg-green-600 rounded-l-full"></div>
              <div className="font-semibold">Completed</div>
            </div>
            <span className="bg-[#E8EEF3] py-1 px-2 text-sm font-semibold">
              {tasks.length}
            </span>
          </div>
          {tasks.map((task) => (
            <Task data={task} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
