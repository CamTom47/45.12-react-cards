import React, { useState} from "react";

const useFlip = () => {
    
    const [state, setState] = useState()
    const flip = () => {
        setState(state => !state)
    }

    return [state, flip];
}

export default useFlip