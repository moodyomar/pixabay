const initState = {
    showModal:false,
    photos:[
    ]
  }
  
  export const pixaReducer = (state = initState, action) => {
  switch(action.type){
  
    case "CLOSE_MODAL":
    return {...state,showModal:false}
  
    case "OPEN_MODAL":
    return {...state,showModal:true}
      
      default:
        return state
  }
  }