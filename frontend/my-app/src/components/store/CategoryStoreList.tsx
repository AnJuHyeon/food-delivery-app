import { StoreCategory } from "@/constants/storeCategory";
import { useInfiniteScroll } from "@/lib/useInfiniteScroll";
import {useCategoryStores} from '@/queries/category'



import {StoreListUI} from './StoreListUI'

export const CategoryStoreList = ({
    category,
}: {
    category?: StoreCategory
}) =>{
    const {isLoading,data,error,hasNextPage,fetchNextPage,isFetching} = 
    useCategoryStores(category)

    const loader = useInfiniteScroll(hasNextPage,isFetching,fetchNextPage)

    if(isLoading || !data || error){
        return null
    }

    return <StoreListUI {...{data,isFetching,loader}} />
}
