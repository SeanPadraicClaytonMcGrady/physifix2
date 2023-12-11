import { createTRPCRouter, publicProcedure } from "../trpc";
import z from "zod";

const getAllRegionsSchema = z.object({});

const regionSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const getAllRegionsResponseSchema = z.array(regionSchema);

export const getRouter = createTRPCRouter({
  getAllRegions: publicProcedure.query(async ({ ctx }) => {
    const regions = await ctx.db.region.findMany();

    const responseValidation = getAllRegionsResponseSchema.safeParse(regions);

    if (!responseValidation.success) {
      throw new Error(responseValidation.error.message);
    }

    return regions;
  }),

  getRegionDiagnostics: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const region = await ctx.db.region.findUnique({
        where: { name: input.name },
        include: {
          Diagnostic: true,
        },
      });

      if (region) {
        return region;
      } else {
        throw new Error("Region not found");
      }
    }),
});
