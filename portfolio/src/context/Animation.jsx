




const AnimationContext = React.createContext();




const AnimationProvider = ({children}) => {
    return <AnimationContext.Provider value={''}>
        {children}
    </AnimationContext.Provider>
}

export {AnimationContext, AnimationProvider}