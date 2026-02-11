import { getNames } from "~/server/db/actions"
import { ShipmentForm } from "../ui/prueba/PruebaForm"
import { TabsManager} from "../../components/ui/tabs-manager-mps"
import { TabNavigation, TabNavigationLink } from "../../components/ui/tab-navigation"

export default async function HomePage() {

 const names = await getNames()
 

  return (
    <main className="flex min-h-screen flex-col p-6 bg-">
      {/*<ShipmentForm />*/}
      <div className="border border-dashed border-border p-10 rounded-xl">

        <section>
          <h2 className="mb-5">Componente "Tonto"</h2>
          <TabNavigation>
            <TabNavigationLink href="#" >Create</TabNavigationLink>
            <TabNavigationLink href="#" >Search</TabNavigationLink>
            <TabNavigationLink href="#" >MyItems</TabNavigationLink>
        </TabNavigation>
        </section>
        
        <section>
          <h2 className="mt-5 mb-5">Componente "Inteligente"</h2>
          <TabsManager />
        </section>
      </div>
    </main>
  )
}
 