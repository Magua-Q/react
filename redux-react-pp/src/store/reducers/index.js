export const reducer = (state = 10, action) =>　{
    switch (action.type) {
        case 'ADD':
        return state + action.num
        case 'SQUARE':
        return state * state
        default:
        return state
    }
}