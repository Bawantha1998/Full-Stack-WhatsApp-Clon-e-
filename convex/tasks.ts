import {query, mutation} from "./_generated/server";
import { v } from "convex/values";

export const getTasks = query ({
    handler: async (ctx,args) => {
        const tasks = await ctx.db.query("tasks").collect();
        return tasks;
    }
})


// Add text
export const addTask = mutation ({
    args: {
        text: v.string()
    },
    handler: async (ctx,args) =>{
       const taskId = await ctx.db.insert("tasks",{text: args.text,completed:false});
        return taskId;
    }
})

// update text 
export const completeTask = mutation ({
    args: {
        id: v.id("tasks"),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, { completed: true});
    },
});

// delete text 

export const deleteTask = mutation ({
    args: {
        id: v.id("tasks"),
    },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id)
    },
});
