import { useReducer, useEffect } from 'react'
import axios from 'axios'
//https://cors-anywhere.herokuapp.com/ this enables cors policy by performing as third party proxy for us.

const GET_DATA_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?'
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
        loading: false, error: false, jobs: []
    })

    useEffect(()=> {
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        axios.get(GET_DATA_URL, {
            params : { markdown: true, page: page, ...params }
        }).then(res => {
            dispatch({
                type: ACTIONS.GET_DATA, payload: { jobs: res.data }
            })
        }).catch(err => {
            dispatch({ type: ACTIONS.ERROR, payload: {error: err} })
        })
    }, params, page)
    return state
    
}