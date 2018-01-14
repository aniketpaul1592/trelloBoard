export function addCardData(payload){
    return {
        type:'ADD_CARD',
        payload
    }
}

export function editCardData(payload){
    return {
        type:'EDIT_CARD',
        payload
    }
}

export function deleteCardData(payload){
    return {
        type:'DELETE_CARD',
        payload
    }
}