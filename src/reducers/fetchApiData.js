export function cardData(state = [], action) {
    let tempArr = state
    switch (action.type) {
        case 'ADD_CARD':
            tempArr = state
            tempArr.push(action.payload)
            console.log(tempArr)
            return tempArr

        case 'EDIT_CARD':
            tempArr = state
            let {name,
                oldTitle,
                oldDescription,
                newType,
                title,
                description,} = action.payload
            tempArr.map(val=>{
                if(val.name === name && val.title === oldTitle && val.description === oldDescription){
                    val.name = newType
                    val.title = title
                    val.description = description
                }
            })
            console.log(tempArr)
            return tempArr

            case 'DELETE_CARD':
            tempArr = state
            let filteredArr = tempArr.filter(val=>{
                if(val.name === action.payload.name && val.title === action.payload.oldTitle && val.description === action.payload.oldDescription){
                    return false
                }else{
                    return true
                }
            })
            console.log(filteredArr)
            return filteredArr
        default:
            return state;
    }
}