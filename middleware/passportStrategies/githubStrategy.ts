import { Strategy as GitHubStrategy, Profile } from 'passport-github2';
import { PassportStrategy } from '../../interfaces/index';
import { VerifyCallback } from 'passport-oauth2';
import { Request } from 'express';
import { database } from '../../models/userModel';

const githubStrategy: GitHubStrategy = new GitHubStrategy(
    {
        clientID: "Ov23liZA1SoVC6E2UagK",
        clientSecret: "9a3fc72ff4a76b268fb972ab511975d0ce245341",
        callbackURL: "http://192.168.1.155:8000/auth/github/callback",
        passReqToCallback: true,
    },
    
    /* FIX ME 😭 */
    async (
        req: Request,
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: VerifyCallback
    ) => {
        console.log("GitHub Profile:", profile);
        const newUser = { id: profile.id, name: profile.displayName };
        database.push(newUser);
        done(null, newUser);
    },
);

const passportGitHubStrategy: PassportStrategy = {
    name: 'github',
    strategy: githubStrategy,
};

export default passportGitHubStrategy;
