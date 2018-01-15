export function cardData(state = [], action) {
    switch (action.type) {
        case 'ADD_CARD':{
            let tempArr = Array.from(state)
            tempArr.push(action.payload)
            return tempArr
        }
        case 'EDIT_CARD':{
            let tempArr = Array.from(state)
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
            return tempArr
            }   
            case 'DELETE_CARD':{
            let tempArr = Array.from(state)
            let filteredArr = tempArr.filter(val=>{
                if(val.name === action.payload.name && val.title === action.payload.oldTitle && val.description === action.payload.oldDescription){
                    return false
                }else{
                    return true
                }
            })
            return filteredArr
            }
        default:
            return state;
    }
}
