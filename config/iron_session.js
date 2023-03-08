import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { cookie_pass, cookie_name } from "./application";

const sessionOptions = {
  password: cookie_pass,
  cookieName: cookie_name,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  }
};

export function authApi(handler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function authPages(handler) {
  return withIronSessionSsr(handler, sessionOptions);
}