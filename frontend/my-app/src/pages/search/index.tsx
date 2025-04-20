import { useEffect } from "react";

import { useSetAtom } from "jotai";

import { searchQueryAtom } from "@/atoms/search";
import { initialFilter, storeFilterAtom } from "@/atoms/storeFilter";
import { CategoryFilters } from "@/components/filter/CategoryFilters";
import { SearchBar } from "@/components/search/Searchbar";
import { StoreFilters } from "@/components/store/StoreFilters";
import { StoreItem } from "@/components/store/Storeitem";
import { useSearch } from "@/queries/search";


export default function Search() {

    const setQuery = useSetAtom(searchQueryAtom)
    const setFilter = useSetAtom(storeFilterAtom)
    const {data} = useSearch() 


    //query 초기화
    useEffect(() => {
        setQuery(undefined)
        
    }, [])
    //필터 리셋 데이터가 없을 때 초기화
    useEffect(() => {
      if(!data) setFilter(initialFilter)
    }, [data,setFilter])
    
    
    return(
        <>
        <SearchBar/>
        <StoreFilters/>
        {!data?.length ? (
            <CategoryFilters cols={2} />
        ) : (
            <>
            {data?.map((store)=>(
                <StoreItem key={store._id} store={store}/>
            ))}
            </>
        )}
        </>
    )
}