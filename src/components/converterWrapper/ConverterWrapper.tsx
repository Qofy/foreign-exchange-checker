import { useState } from "react"
import { Tabs } from "../Tabs"
import { Compare } from "../Compare"
import { Favorite } from "../Favorite"
import { Log } from "../Log"
import { History } from "@/History"

export default function ConverterWrapper() {
    const [activeTab, setActiveTab] = useState('history')
  return (
    <>
    <Tabs onTabChange={setActiveTab}/>
    {activeTab === 'history' && <History/>}
    {activeTab === 'compare' && <Compare/>}
    {activeTab === 'favorites' && <Favorite/>}
    {activeTab === 'log' && <Log/>}

    </>
  )
};