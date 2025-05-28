import React from 'react'

const LoadingLogic = (WrappedComponent) => {
 
    const EnhancedComponent = ({isLoading, ...props}) => {
        
        if (isLoading) {
            return <h1>Loading...</h1>
        }
        return <WrappedComponent users={props.users } />
    }

    return EnhancedComponent;
}

export default LoadingLogic