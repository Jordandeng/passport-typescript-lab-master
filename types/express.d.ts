import "express-session";    // What should import here?

// Store in the session to identify the user
export type SerializedUser = string;

// Augment the express-session module to include our custom session data
declare module "express-session" {
  interface SessionData {
    // "?" optional property, means this field is optional
    // This will hold the entire passport user object
    passport?: {
      user: SerializedUser; // What type should this be?
    };
  }
}

declare module "express-session" {
  interface SessionData {
    messages?: string[];
  }
}

declare global {
  namespace Express {
    interface User {
      id: number;
      name: string;
      email: string;
    }
  }
}


// Ensure this file is treated as a module
export {};