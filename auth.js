import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import { connectToDB } from './app/lib/utils'
import bcrypt from 'bcrypt'
import { User } from './app/lib/models'

let loginErrorMsg = ''
export const getLoginErrorMsg = () => loginErrorMsg

const login = async (credentials) => {
  try {
    connectToDB()
    const user = await User.findOne({ username: credentials.username })
    if (!user) throw new Error('The user does not exist!')

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    )

    if (!isPasswordCorrect) throw new Error('Wrong password!')

    return user
  } catch (err) {
    throw new Error(err.message)
  }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          return user
        } catch (err) {
          loginErrorMsg = err.message
          return null
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username
        token.isAdmin = user.isAdmin
        token.img = user.img
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.username = token.username
        session.email = token.email
        session.isAdmin = token.isAdmin
        session.img = token.img
      }
      return session
    },
  },
})
