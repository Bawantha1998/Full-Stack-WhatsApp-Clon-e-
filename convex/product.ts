import {query, mutation} from "./_generated/server";
import { v } from "convex/values";

export const getProduct = query({
    args: {},
    handler: async(ctx, args) => {
        const product = await ctx.db.query("products").collect();
        return product;
    },
});

export const addProduct = mutation({
    args: {
        name: v.string(),
        price: v.number(),
    },
    handler: async(ctx, args) => {
        const productId = await ctx.db.insert("products",{name: args.name, price: args.price});
        return productId;
    },
});


export const deleteProduct = mutation ({
    args:{
        id: v.id("product"),
    },
    handler: async (ctx, args) =>{
        await ctx.db.delete(args.id);
    },
});