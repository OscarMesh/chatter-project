import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { BsBookmarks } from "react-icons/bs";
import { MdOutlineAnalytics, MdOutlineDrafts, MdOutlineDynamicFeed, MdOutlineManageAccounts } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { signOut } from "next-auth/react";

export const EXAMPLE_TAGS_DATA = [
    {
        id: "1",
        label: "Next.js",
        path: "/dashboard/tags/1"

    },
    {
        id: "2",
        label: "React",
        path: "/dashboard/tags/2"

    },
    {
        id: "3",
        label: "TypeScript",
        path: "/dashboard/tags/3"
    }
]
const useRoutes = () => {
    const pathname = usePathname();



    const overviewRoutes = useMemo(() => [
        {
            label: "Feed",
            path: "/dashboard/feed",
            icon: MdOutlineDynamicFeed,
            active: pathname === "/dashboard/feed"
        },
        {
            label: "Bookmarks",
            path: "/dashboard/bookmarks",
            icon: BsBookmarks,
            active: pathname === "/dashboard/bookmarks"
        },
        {
            label: "Team blogs",
            path: "/dashboard/team-blogs",
            icon: AiOutlineTeam,
            active: pathname === "/dashboard/team-blogs"
        },
        {
            label: "Drafts",
            path: "/dashboard/drafts",
            icon: MdOutlineDrafts,
            active: pathname === "/dashboard/drafts"
        },
        {
            label: "Analytics",
            path: "/dashboard/analytics",
            icon: MdOutlineAnalytics,
            active: pathname === "/dashboard/analytics"
        }
    ], [pathname]);

    const trendingTagsRoutes = useMemo(() => {
        const tagsRoutes = EXAMPLE_TAGS_DATA.map(tag => ({
            label: tag.label,
            path: `/dashboard/tags/${tag.id}`,
            active: pathname === `/dashboard/tags/${tag.id}`
        }));

        return tagsRoutes;
    }, [pathname]);

    const personalRoutes = useMemo(() => [
        {
            label: "Accounts",
            path: "/dashboard/accounts",
            icon: MdOutlineManageAccounts,
            active: pathname === "/dashboard/accounts"
        },
        {
            label: "Notifications",
            path: "/dashboard/notifications",
            icon: IoNotificationsOutline,
            active: pathname === "/dashboard/notifications"
        },
        {
            label: 'Logout',
            onClick: () => signOut(
                {
                    callbackUrl: "/signin",
                }
            ),
            path: '#',
            icon: HiArrowLeftOnRectangle,
        }
    ], [pathname]);

    return {
        overviewRoutes,
        trendingTagsRoutes,
        personalRoutes
    };
}

export default useRoutes;
