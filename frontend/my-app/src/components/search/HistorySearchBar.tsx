import { ChangeEventHandler, useTransition } from "react"

import { useSetAtom } from "jotai"
import { BiSearch } from "react-icons/bi"

import { searchQueryAtom } from "@/atoms/search"


export const HistorySearchBar =() => {
    const [, startTransition] = useTransition()
    const setSearchQuery = useSetAtom(searchQueryAtom)
    
    const handleInput: ChangeEventHandler<HTMLInputElement> = (e) =>{
        startTransition(()=>{
            setSearchQuery(e.target.value)
        })

    }
    return (
        <div className="flex border-b-8 border-b-gray-100 p-4">
            <input
            className="flex-grow bg-gray-200 rounded-lg px-3" 
            placeholder="주문한 메뉴/매장을 찾아보세요"
            onChange={handleInput}></input>
            <BiSearch className="m-2 text-2xl" />
        </div>
    )
}