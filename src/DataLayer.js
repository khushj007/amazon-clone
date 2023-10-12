import { createContext,useContext,useReducer } from "react";
import React from "react";

const DataLayerContext = createContext()

function DataLayer(props)
{
    return(
    <div>    
    <DataLayerContext.Provider value={useReducer(props.reducer,props.initialState)} >
     {props.children}
    </DataLayerContext.Provider>
    </div>
    )
}





function useDataLayerValue() {
    return (
        useContext(DataLayerContext)

    );
}

export default DataLayer;

export {useDataLayerValue};
