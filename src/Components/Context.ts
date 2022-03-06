import React, { createContext } from "react";

interface ContextState {
    // set the type of state you want to handle with context e.g.
   
    //signIn:void
    signIn:any,
    signOut:any
}
export const AuthContext=createContext({} as ContextState );