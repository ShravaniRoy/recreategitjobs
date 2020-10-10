import { useReducer, useEffect } from 'react'

const ACTIONS = {
    MAKE_REQUEST : 'make_request',
    GET_DATA : 'get_data',
    ERROR : 'error'
}
function reducer(state, action){
    switch(Selection.type){
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, jobs: action.payload.jobs }
        case ACTIONS.ERROR:
            return { ...state, loading: false, jobs: [], error: action.payload.error }
        default:
            return state

    }
}

export default function useFetchJobs(params, page){
    const [state, dispatch] = useReducer(reducer, {
        loading: false, error: false, jobs: [4, 5, 6]
    })

    useEffect(()=> {
        dispatch({ type: ACTIONS.MAKE_REQUEST })
    }, params, page)
    return {
        jobs: [4, 5, 6],
        loading: false,
        error: false
    }
}