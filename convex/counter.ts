import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const counter = await ctx.db
      .query("counters")
      .withIndex("by_name", (q) => q.eq("name", "global"))
      .first();
    return counter?.count ?? 0; // Returns 0 if not yet created
  },
});

export const increment = mutation({
  args: { by: v.number() },
  handler: async (ctx, { by }) => {
    const existing = await ctx.db
      .query("counters")
      .withIndex("by_name", (q) => q.eq("name", "global"))
      .first();

    let newCount: number;
    if (existing) {
      newCount = existing.count + by;
      await ctx.db.patch(existing._id, { count: newCount });
    } else {
      newCount = by;
      await ctx.db.insert("counters", { name: "global", count: newCount });
    }
    return newCount;
  },
});
