import {defineSchema,defineTable} from "convex/server";
import { v } from "convex/values"
export default defineSchema({
  tasks: defineTable({
    // we can assign different data types 
    text: v.string(),
    completed: v.boolean(),
  }),
 products: defineTable({
    name: v.string(),
    price: v.number(),
 }),
});