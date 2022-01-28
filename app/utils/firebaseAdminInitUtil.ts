import { initializeApp } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"
import { env } from "../env/dotEnv"

const appAdmin = initializeApp(env.getFirebaseConfig())
export const authAdmin = getAuth()
export default appAdmin
