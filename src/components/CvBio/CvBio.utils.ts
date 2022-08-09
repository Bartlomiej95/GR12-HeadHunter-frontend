import {NavigateFunction} from "react-router-dom";

export function delayAndGo(e: any, path: string, history: NavigateFunction) {
    e.preventDefault();

    setTimeout(() => history(path), 1500);
}