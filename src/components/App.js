import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectCat , setSelectCat] = useState("All")
  function handleSelectCategory(category){
    setSelectCat(category)
   
  }
  const filteredTasks = tasks.filter((task) => selectCat === "All" ? true : selectCat=== task.category)
  function handleFormSubmit(newTask){
    setTasks(tasks => [...tasks, newTask])
  }
  function handleDeleteTask(text){
    setTasks(tasks => tasks.filter(task =>
       task.text !== text)) 

  }
 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={handleSelectCategory} selectedCategory={selectCat}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleFormSubmit}/>
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
