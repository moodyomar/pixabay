const initState = {
    showModal:false,
    category:'',
    page:1,
    loading:true,
    photos:[]
  }
  
  export const pixaReducer = (state = initState, action) => {
  switch(action.type){
    
    case "GET_PHOTOS":
    return {...state,photos:action.payload,loading:false}
  
    case "CLOSE_MODAL":
    return {...state,showModal:false}
  
    case "OPEN_MODAL":
    return {...state,showModal:true}
  
    case "CHANGE_CATEGORY":
    return {...state,category:action.payload,page:state.page=1}
    
    case "NEXT_PHOTOS":
    return {...state,page:state.page+1}

    case "PREV_PHOTOS":
    return {...state,page:state.page > 1 ? state.page-1 : state.page}
      
      default:
        return state
  }
  }