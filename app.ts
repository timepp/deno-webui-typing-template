import { WebUI } from "https://deno.land/x/webui/mod.ts";
import { apiImpl } from "./api_impl.ts";


// Create new window
const myWindow = new WebUI();

function typedBind<T>(name: string, fn: (e: WebUI.Event) => T){
    myWindow.bind(name, e => JSON.stringify(fn(e)))
}

typedBind("checkResult", e => apiImpl.checkResult(e.arg.number(0), e.arg.number(1), e.arg.number(2)))
typedBind("getWindows", e => apiImpl.getWindows())

myWindow.show('./app.html');

await WebUI.wait();
