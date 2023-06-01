import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import cors from "cors";
import { getGratings, postGreting } from "@/app/controllers/hello.cont";
const router = createEdgeRouter();

router
  // A middleware example
  //   .use(async (req, event, next) => {
  //     const start = Date.now();
  //     await next(); // call next in chain
  //     const end = Date.now();
  //     console.log(`Request took ${end - start}ms`);
  //   })
  .get(getGratings)
  .post(postGreting);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
