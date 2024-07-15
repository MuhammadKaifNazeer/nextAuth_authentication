declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string;
    NEXTAUTH_SECRET: string;
    // Add other environment variables here as needed
  }
}
