import { useEffect } from "react";

import { useSetAtom } from "jotai";
import { GetServerSidePropsContext } from "next";

import { storeIdAtom } from "@/atoms/storeId";
import {CartButton} from "@/components/common/CartButton"
import { StoreDescription } from "@/components/store/StoreDescription";
import { StoreHeader } from "@/components/store/StoreHeader";
import { StoreMenus } from "@/components/store/StoreMenus";



export default function Store({storeId} : {storeId : string}) {
    const setStoreId = useSetAtom(storeIdAtom)

    useEffect(() => {
      setStoreId(storeId)
    }, [setStoreId,storeId])

    return (
    <>
        <div className="pb-20">
            <StoreHeader />
            <StoreDescription />
            <StoreMenus />
        </div>
            <CartButton />

    </>
    )   
}

export async function getServerSideProps(context : GetServerSidePropsContext){
    const {storeId} = context.query ?? {}

    return {
        props : {
            storeId,
        },
    }
}