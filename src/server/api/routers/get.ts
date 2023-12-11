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

  getOneRegionDiagnostics: publicProcedure.query(async ({ ctx }) => {}),
});
