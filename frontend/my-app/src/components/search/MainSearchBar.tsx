import Link from "next/link"
import { useSession } from "next-auth/react"
import {FaSearch} from 'react-icons/fa'
//a 태그가 아닌 Link 태그를 사용하는 이유는 a태그는 페이지를 이동하는데 비해 링크 컴포넌트를 사용하면 싱글 페이지 어플리케이션처럼 동작이 됨
//싱글 페이지 어플리케이션 : 다른 페이지로 새로 이동하는 것이 아니라 새로운 페이지의 데이터를 받아와 렌더링만 해주는 것. 로딩이 빠르다.
export const MainSearchBar = () =>{
    const {data} = useSession()


    return(
    <div className="px-4 py-2">
        <Link className="flex items-center justify-stretch rounded-full border border-b-4 p-2" href='/search'>
            <FaSearch /> 
            <span className="ml-4 truncate">
            {data?.user?.name ? `${data?.user.name}님, 맥도날드 어때요?` 
            : '검색해보세요'}
            </span>
        </Link>
    </div>
    )
}
//Fasearch는 아이콘 가져오는 것. react-icons 에서
//{data} 에서 ? 다음은 데이터가 있을 때  : 일때는 없을 때 나오는 문구.