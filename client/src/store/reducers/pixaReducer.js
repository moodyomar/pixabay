const initState = {
    showModal:false,
    currentCategory:'',
    loading:true,
    photos:[]
  }
  
  export const pixaReducer = (state = initState, action) => {
  switch(action.type){
  
    case "CLOSE_MODAL":
    return {...state,showModal:false}
  
    case "OPEN_MODAL":
    return {...state,showModal:true}

    case "GET_PHOTOS":
    return {...state,photos:action.payload,loading:false}
      
      default:
        return state
  }
  }