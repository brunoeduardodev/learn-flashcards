import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const collectionRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx: { session, prisma } }) => {
    try {
      return await prisma.collection.findMany({
        where: {
          userId: session.user.id,
        },
      });
    } catch (e) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Could not get collections",
      });
    }
  }),
});
