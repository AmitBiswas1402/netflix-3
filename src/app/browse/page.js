'use client'

import { ManageAccounts } from "@/components/manage-accounts";
import { GlobalContext } from "@/context";
import { useContext } from "react";
import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react"

export default function Search() {
    const {loggedInAccount} = useContext(GlobalContext)

    const {data: session} = useSession()
    console.log(session);

    if (session === null) return <UnauthPage />
    if (loggedInAccount === null) return <ManageAccounts />
    
    return (
        <>
        Browse
        </>
    )
}