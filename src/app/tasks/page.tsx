"use-client"

import { useMutation, useQuery } from "convex/react";
import {api} from "../../../convex/_generated/api";


const TaskPage = () => {
    const tasks = useQuery(api.tasks.getTasks, {});
    const deleteTask = useMutation(api.tasks.deleteTasks)

  return (
    <div className="p-10 flex flex-col gap-4"> 
        <h1 className="text-5xl">All tasks are here in real-time</h1>
        {tasks?.map((tasks) =>(
            <div key={tasks._id} className="flex gap-2">
                <span>{tasks.text}</span>
                <button
                    onClick={async() =>{
                        await deleteTask({id: tasks._id});
                    }}
                >Delete Task</button>
            </div>
        ))}
    </div>
  )
};

export default TaskPage;