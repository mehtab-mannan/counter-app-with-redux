import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant"

export const incrementCounter = () => {
    return {
        type: INCREMENT
    };
};
export const derementCounter = () => {
    return {
        type: DECREMENT
    };
};
export const resetCounter = () => {
    return {
        type: RESET
    };
};