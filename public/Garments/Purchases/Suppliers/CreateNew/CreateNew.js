import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js"
import { StartFunc as AddListenersStartFunc } from "./AddListeners/EntryFile.js";

import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";

let jVarCommonKToken = ConfigObject.TokenName;
let jVarLocalStorageKeyName = ConfigObject.LocalStorageKeyName;
let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let StartFunc = async () => {
    // CheckUserFuncsjFStartFunc({
    //     inUserKey: jVarLocalStorageKeyName,
    //     inKTokenKey: jVarCommonKToken
    // });

    AddListenersStartFunc();
};

StartFunc().then();