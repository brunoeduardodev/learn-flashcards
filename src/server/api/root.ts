import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { collectionRouter } from "./routers/collection";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  collections: collectionRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
