"use client"

import { Provider } from 'react-redux'
import { store } from '../Store'

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers
