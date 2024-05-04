import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: 'identify email' } }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === 'discord') {
        user.discordId = profile.id; 
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      token.customClaim = "cussdata";
      return token;
    },
    async session({ session, token }) {
      session.jwt = token;
      session.user.id = token.id;
      return session;
    }
  },
})
