import React, { createContext} from  'react'
import useAuthApi from './Api/AuthApi'

export const GlobalContext = createContext()

function DataProvider(props) {
    let data ={
        auth: useAuthApi()
    }

    return (
        <GlobalContext.Provider value ={data}>
            {
                props.children
            }
        </GlobalContext.Provider>
    )
}

export default DataProvider