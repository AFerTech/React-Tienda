import {createContext} from 'react'

const QuiscoContext = createContext();

const QuioscoProvider = ({children}) =>{

    return(
        <QuioscoContext.Provider
            value={{

            }}

        >{children}</QuioscoContext.Provider>
    )
}

export{
    QuioscoProvider
}
export default QuiscoContext