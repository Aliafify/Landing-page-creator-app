import React from "react";
const Context=React.createContext({
    user:{},
   admin:[],
   property:[],
   users:[],
   setAuth:[],
   script:[]
})
export default Context;