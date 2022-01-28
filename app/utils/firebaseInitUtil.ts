import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { env } from "../env/dotEnv"

const app = initializeApp(env.getFirebaseConfig())
export const auth = getAuth()
export default app
