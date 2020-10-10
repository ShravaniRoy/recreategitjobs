import { useReducer } from 'react'

export default function useFetchJobs(params, page){
    return {
        jobs: [4, 5, 6],
        loading: false,
        error: false
    }
}