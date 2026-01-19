import { auth } from "~/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session) return redirect("/");
  
  return ( 
    <div className="m-14 mt-16">
        <h1>MPs Dashboard Coming Soon!</h1>     
    </div>
  );
}