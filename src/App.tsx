import TaskCreation from './components/TaskCreation';
import { useEffect, useState } from 'react';
import Task from './components/Task';
import { QuoteResp, TaskInfo } from './types';
import QuoteBox from './components/QuoteBox';
import FilterButtons from './components/FilterButtons';

export enum filterBy{
  all,
  completed,
  unCompleted
}

function App() {

  const [tasks, setTasks] = useState<any[]>([]);
  const [quoteData, setquoteData] = useState<QuoteResp>();
  const [filter, setFilter] = useState<filterBy>(filterBy.all);


  const refreshTasks = () => {
    const tasksArray = Object.entries(localStorage).map(([key, value]) => {
      try {
        return { id: key, ...JSON.parse(value) };
      } catch (error) {
        return { id: key, description: value };
      }
    });
    setTasks(tasksArray);
  };

  const fetchQuote = async() =>{
    try{
        const resp = await fetch('http://api.quotable.io/random');
        if(resp.status!== 200) throw Error("failed call");
        const data = await resp.json();
      setquoteData(data);
    }
    catch{
      alert("error fetching inpiring quote ):");
    }
   
  }

  const filterTasks = () =>{
    if(filter == filterBy.all){
      return tasks;
    }
    else if (filter == filterBy.completed){
      return tasks.filter((t) => t.done == true);
    }
    else{
      return tasks.filter((t) => t.done == false);
    }
  }

  const markAsDone = (task: TaskInfo) => {
    localStorage.setItem(task.id, JSON.stringify({ ...task, done: true }));
    refreshTasks();
  };

  const onDelete = (task: TaskInfo) => {
    localStorage.removeItem(task.id);
    refreshTasks();
  };

  useEffect(() => {
    refreshTasks();
    fetchQuote();
  }, []);

  return (
    <div className="p-3">
      <TaskCreation refreshTasks={refreshTasks}/>
      <FilterButtons setFilter={setFilter} filter={filter}/>
      <div className="row">
        {filterTasks().map((task: TaskInfo) => (
          <div className="col-md-4 mb-3" key={task.id}>
            <Task
              info={task}
              id={task.id}
              onMarkAsDone={() => markAsDone(task)}
              onDelete={() => onDelete(task)}
            />
          </div>
        ))}
      </div>
      <QuoteBox sentence={quoteData?.content|| 'loading...'} author={quoteData?.author|| 'loading..'}/>
    </div>
  );
}

export default App;