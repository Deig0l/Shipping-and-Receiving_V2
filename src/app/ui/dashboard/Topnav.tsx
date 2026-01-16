
"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { SignOut } from "~/app/ui/login/signout-button";
import Image from "next/image";


export default function TopNav() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-row bg-white border-b-2">

            <div className="flex justify-between w-full p-6 mx-auto">

                <div className="">
                    <Link href="/dashboard">
                        <Image
                            alt="Phinia"
                            className="w-15 h-10 mx-1.5 sm:mx-6"
                            src="/PHIN_BIG.png"
                            width={200}
                            height={40}
                        />
                    </Link>
                </div>

                <div className="vertical-align: middle pt-2 pr-4 font-semibold">
                    <Link
                        href="/dashboard"
                        className={clsx(
                            "text-black dark:text-black border-b-2 mx-1.5 sm:mx-6",
                            { "border-red-500": pathname === "/dashboard" }
                        )}
                    >
                        <span>Home</span>
                    </Link>
                    <Link
                        href="/dashboard/export"
                        className={clsx(
                            "text-black dark:text-black border-b-2 mx-1.5 sm:mx-6",
                            { "border-red-500": pathname === "/dashboard/export" }
                        )}
                    >
                        <span>Export</span>
                    </Link>
                    <Link
                        href="/dashboard/import"
                        className={clsx(
                            "text-black dark:text-black border-b-2 mx-1.5 sm:mx-6",
                            { "border-red-500": pathname === "/dashboard/import" }
                        )}
                    >
                        <span>Import</span>
                    </Link>
                    <Link
                        href="/dashboard/profile"
                        className={clsx(
                            "text-black dark:text-black border-b-2 mx-1.5 sm:mx-6",
                            { "border-red-500": pathname === "/dashboard/mps" },
                            { "border-yellow-500 font-bold": false }
                        )}
                    >
                        <span>MPS</span>
                    </Link>
                    <Link
                        href="/dashboard/admin"
                        className={clsx(
                            "text-black dark:text-black border-b-2 mx-1.5 sm:mx-6",
                            { "border-red-500": pathname === "/dashboard/admin" }
                        )}
                    >
                        <span>Admin</span>
                    </Link>
                    <Link
                        href="/dashboard/profile"
                        className={clsx(
                            "text-black dark:text-black border-b-2 mx-1.5 sm:mx-6",
                            { "border-red-500": pathname === "/dashboard/profile" },
                            { "border-yellow-500 font-bold": false }
                        )}
                    >
                        <span>Profile</span>
                    </Link>

                </div>

                <div className="">
                    <SignOut />
                </div>

            </div>
        </nav>
    );
}