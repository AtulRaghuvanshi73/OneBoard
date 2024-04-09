import { authMiddleware } from "@clerk/nextjs";

//default middleware template imported from clerk

export default authMiddleware({});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};