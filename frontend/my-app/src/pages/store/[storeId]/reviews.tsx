import { GetServerSideProps } from "next"

import { StoreReviewList } from "@/components/StoreReviews/StoreReviewList"
import { StoreReviewTop } from "@/components/StoreReviews/StoreReviewTop"



export default function StoreReviews({storeId}:{storeId:string}) {

    return (
        <>
        <StoreReviewTop {...{storeId}} />
        <StoreReviewList {...{storeId}} />

        </>
    )
}

export const getServerSideProps : GetServerSideProps = async (context) =>{
    const {storeId} = context.query

    return {
        props : {
            storeId,
        },
    }
}