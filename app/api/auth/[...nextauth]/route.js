import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log  (  process.env.GOOGLE_ID,
 process.env.GOOGLE_SECRET)
const handler = nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGL_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
