import { useState } from 'react';
import frameworksList from './items';
import ListView from './ListView';
//componentes de presentacion y componentes contenedores

function List(){
    let [items,setItems]=useState;

    function filterItems(searchPattern){
        if(searchPattern===""){
            setItems(frameworksList);
        }else{
           let newItems=  filterItemsBySearchPattern(searchPattern);
           setItems(newItems);
        }
    }

    function filterItemsBySearchPattern(searchPattern){
     let filterItems=frameworksList
                      .map(item.toLowerCase().includes(searchPattern.toLowerCase()) ? item :null);
     return filterItems;
    }

    return(
        <ListView elements={items} funcFilterItems={filterItems}/>
    );
}

export default List;

