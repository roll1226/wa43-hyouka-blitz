import { passportAuth } from "blitz"
import db from "db"
import { Strategy as CustomStrategy } from "passport-custom"
import { authAdmin } from "app/utils/firebaseAdminInitUtil"

export default passportAuth({
  successRedirectUrl: "/",
  errorRedirectUrl: "/",
  secureProxy: true,
  strategies: [
    {
      strategy: new CustomStrategy(async (req, done) => {
        if (!req.query.idToken) return done(new Error("Request doesn't have idToken."))
        const idToken = req.query.idToken as string

        try {
          const { email, name } = await authAdmin.verifyIdToken(idToken)

          if (!email) {
            return done(new Error("Firebase auth response doesn't have email."))
          }

          const user = await db.user.upsert({
            where: { email },
            create: {
              email,
              name,
            },
            update: { email },
          })

          const publicData = { userId: user.id, roles: [user.role], source: "firebase auth" }
          done(null, { publicData })
        } catch (error) {
          done(new Error(`Firebase auth OAuth failed...`))
        }
      }),
    },
  ],
})
