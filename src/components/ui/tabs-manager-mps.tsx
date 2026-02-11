"use client"

//Imports
import { useState } from "react"
import { TabNavigation, TabNavigationLink } from "./tab-navigation"
import { SeccionRojo } from "./tab-create-mps"
import { SeccionVerde } from "./tab-verde"
import { SeccionAzul } from "./tab-azul"

//In this array is generated an id and it's associated to a label (what's shown - user view) for each tab
const TABS = [
  { id: "create" as const, label: "Create MPS" },
  { id: "search" as const, label: "Search MPS" },
  { id: "items" as const, label: "My MPS's" },
]

//here we map each id to its corresponding component(content of each tab)
const TAB_CONTENT = {
  create: SeccionRojo,
  search: SeccionVerde,
  items: SeccionAzul,
} as const

//Here we extract the key of every variable in TAB_CONTENT. Example: "create", "search", "items"
//This is useful if we want to add more tabs in the future (keeps us from adding them manually)
type TabId = keyof typeof TAB_CONTENT

//This is the main component that manages the tabs
export function TabsManager() {
  const [activeTab, setActiveTab] = useState<TabId>("create")
  const ContentComponent = TAB_CONTENT[activeTab]

  return (
    <div className="flex flex-col gap-4">
      <TabNavigation>
        {TABS.map((tab) => (
          <TabNavigationLink
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </TabNavigationLink>
        ))}
      </TabNavigation>

      <div className="mt-4">
        <ContentComponent />
      </div>
    </div>
  )
}