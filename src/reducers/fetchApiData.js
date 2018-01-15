export function cardData(state = [], action) {
    switch (action.type) {
        case 'ADD_CARD':{
            let tempArr = Array.from(state)
            tempArr.push(action.payload)
            console.log(tempArr)
            localStorage.setItem('cardData', JSON.stringify(tempArr));
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
            console.log(tempArr)
            localStorage.setItem('cardData', JSON.stringify(tempArr));
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
            console.log(filteredArr)
            localStorage.setItem('cardData', JSON.stringify(filteredArr));
            return filteredArr
            }
        default:{
            let persistData = localStorage.getItem('cardData');
            if(persistData && persistData.length>0){
                return JSON.parse(persistData);
            }else{
                return state;
            }
        }
    }
}
