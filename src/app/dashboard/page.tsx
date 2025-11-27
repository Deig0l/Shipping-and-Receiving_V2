// Page.tsx (Authenticated Page)
import {redirect} from "next/navigation";
import { AreaChartHome } from "~/app/ui/Home/AreaChart";
import { BarChartHome } from "~/app/ui/Home/BarChart";
import { DonutChartHome } from "~/app/ui/Home/DonutChart";
import { auth } from "~/auth";
import { getDonutShart, getAreaShart, getBarChart, getUsers } from "~/server/db/actions";

export default async function Page() {
  const session = await auth();

  //console.log(session?.user?.name);

  if (!session) return redirect("/");


    const donutData = await getDonutShart();
    const areaData = await getAreaShart();
    const barData = await getBarChart();
    let userName = session?.user?.name || "user";
     // Get last two words of the name -> gets only first and second name
    //userName = userName.split(" ").splice(-2).join(" ");

    return (
            <main>
                <div className="text-2xl font-semibold tracking-tight first:mt-4 m-28 mb-1">
                    <h1>Welcome, {userName}!</h1>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 mt-8 m-28">
                    <DonutChartHome donutData={donutData}></DonutChartHome>
                    <AreaChartHome areaData={areaData}></AreaChartHome>
                    <BarChartHome barData={barData}></BarChartHome>
                </div>
            </main>
    );
}
