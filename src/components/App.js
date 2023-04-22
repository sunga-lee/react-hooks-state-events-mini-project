import React  from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = (TASKS)
  // const [categories, setCategories] = useState(CATEGORIES)
  const [category, setCategory] = ("All");

  // filtering throu tha task and category
  const filteredTasks = tasks.filter(
    (task) => category ===  "All" || task.category === category
  );

// task remove button
  const removeTask = (text) => {
    const newTask = tasks.filter((task) => task.text !== text);
    console.log(text)
    setTasks(newTask)
  };

   function onTaskFormSubmit(newTask) {
     setTasks([...tasks, newTask]);
   }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        category={category}
        selectCategory={setCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((category) => category !== "All")}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} removeTask={removeTask} />
    </div>
  );
}
export default App;
