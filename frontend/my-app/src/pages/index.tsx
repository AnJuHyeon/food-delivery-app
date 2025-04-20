import { BottomNav } from "@/components/common/BottomNav";
import { CategoryFilters } from "@/components/filter/CategoryFilters";
import { MainSearchBar } from "@/components/search/MainSearchBar";
import { StoreList } from "@/components/store/StoreList";


export default function Home() {
  return (
    <>
    <div className="pb-16">
    <MainSearchBar />
    <CategoryFilters cols={4}/>
    <StoreList/>
    </div>
    <BottomNav />
    </>
  )
}
