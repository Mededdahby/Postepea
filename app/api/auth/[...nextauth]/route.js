import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/ConnectDb";
import User from "@models/users";

const handler = nextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  async session({ session }) {
    const sessionUser = await User.findOne({
      email: session.user.email,
    });
    session.user.is = sessionUser._id.toString();
    return session;
  },
  async signIn({ profile }) {
    try {
      await connectToDB();

      const userExists = User.findOne({ email: profile.email });

      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").owerCase(),
          image: profile.picture,
        });
      }
      return true;
    } catch (error) {
      console.log(error);
    }
  },
});

export { handler as GET, handler as POST };
