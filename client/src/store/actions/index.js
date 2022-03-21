import axios from 'axios'

export const closeModal = () => {
      return {type:"CLOSE_MODAL"}
    }
    
export const openModal = () => {
      return {type:"OPEN_MODAL"}
    }
    
export const getPhotos = (cat='',p=1) => async dispatch => {
      try {
        const response = await axios.get(`/images?cat=${cat}&p=${p}`)
        dispatch({
          type:"GET_PHOTOS",
          payload:response.data
        })
      } catch (error) {
        console.log(error);
      }
    }

export const changeCategory = (cat) => {
      return {type:"CHANGE_CATEGORY",payload:cat}
    }

export const nextPhotos = () => {
      return {type:"NEXT_PHOTOS"}
    }

export const prevPhotos = () => {
      return {type:"PREV_PHOTOS"}
    }