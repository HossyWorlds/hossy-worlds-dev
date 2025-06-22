declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASIC_AUTH_USERNAME?: string;
      BASIC_AUTH_PASSWORD?: string;
    }
  }
}

export {}; 
