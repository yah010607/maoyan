import React from 'react';
import Loadable from 'react-loadable';

function Loading(){
  return  <span>loading...</span>
}
 
const WithLoading=(loader,loading=Loading)=>{
    return Loadable({
        loader,
        loading
    })
}

export default WithLoading