import axios from 'axios';

const listProducts = () => ( dispatch ) => {
      try{
            dispatch({ type: PRODUCT_LIST_REQUEST });
            const { data } = await axios.get("/api/products");
            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })

      }
      catch {
            dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
      }
}

const detailsProduct  = ( productId ) => async ( dispatch ) => {
      try{
            dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
            const { data } = await axios.get("/api/products " + productId);
            dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })

      }
      catch (error){
            dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
      }
}