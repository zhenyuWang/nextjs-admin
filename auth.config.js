export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user
      const isOnLogin = request.nextUrl.pathname.startsWith('/login')
      if (!isOnLogin) {
        return isLoggedIn
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', request.nextUrl))
      }
      return true
    },
  },
}
