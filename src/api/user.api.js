import { getAction, postAction } from "./index";

const getUser = (url) => getAction(url);

const addUser = (url,params) => postAction(url,params);

export {
    getUser,
    addUser
}