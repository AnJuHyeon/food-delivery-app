import { useInfiniteScroll } from "@/lib/useInfiniteScroll"
import { useStoers } from "@/queries/store"


import {StoreListUI} from './StoreListUI'




export const StoreList = () =>{
    const {isLoading,error,data, hasNextPage,isFetching, fetchNextPage } = useStoers()
    
    const loader = useInfiniteScroll(hasNextPage,isFetching,fetchNextPage)
    
    if(isLoading||error||!data) return null

return(
    <StoreListUI {...{data,loader,isFetching}} />
)


}