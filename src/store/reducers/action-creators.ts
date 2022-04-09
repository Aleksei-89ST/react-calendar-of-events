import { AuthActionCreators } from "./auth/action-creators";
import { EventActionCreators } from "./event/actions-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators
}