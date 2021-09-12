import { ADD, SQUARE } from '../../constans'

export const addAction = (num) => {
    return {
        type: ADD,
        num
    }
}

export const squareAction = () => {
    return {
        type: SQUARE 
    }
}

