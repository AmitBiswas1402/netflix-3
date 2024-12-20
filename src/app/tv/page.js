'use client'

import { ManageAccounts } from "@/components/manage-accounts";
import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import { useContext } from "react";

export default function TV() {
    const {loggedInAccount} = useContext(GlobalContext)

    const {data: session} = useSession()
    console.log(session);

    if (session === null) return <UnauthPage />
    if (loggedInAccount === null) return <ManageAccounts />

    return <>
        TV
    </>
}