export default class DotEnv {
  /**
   * firebase config
   */
  public getFirebaseConfig = () => {
    return {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY as string,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN as string,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID as string,
      appId: process.env.REACT_APP_FIREBASE_APP_ID as string,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
    }
  }
}

export const env = new DotEnv()
