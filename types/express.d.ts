import "express-session";

declare global {
  namespace Express {
    interface User {
      id: number;
      name: string;
      email?: string;
      password?: string;
    }
  }
}


declare module 'express-session' {
  interface SessionData {
    messages?: string[];
  }
}

// Ensure this file is treated as a module
export {};