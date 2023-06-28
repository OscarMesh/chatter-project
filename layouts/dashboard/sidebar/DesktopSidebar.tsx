import Logo from "@/components/Logo";
import useRoutes from "@/hooks/useRoutes";
import React from "react";
import DesktopItem from "./DesktopItem";

const DesktopSidebar = () => {
  const { overviewRoutes, personalRoutes, trendingTagsRoutes } = useRoutes();
  return (
    <div className="px-6 ml-auto h-full flex flex-col items-center py-6">
      <div>
        <Logo />
      </div>
      <div className="flex flex-col items-center mt-8  space-y-4">
        <h3>Overview</h3>

        <nav className="flex flex-col mt-4 justify-between">
          <ul role="list" className="space-y-2 flex flex-col items-start">
            {overviewRoutes.map((route) => (
              <DesktopItem
                key={route.label}
                path={route.path}
                label={route.label}
                icon={route.icon}
                active={route.active}
              />
            ))}
          </ul>
        </nav>
      </div>

      {/* <div className="flex items-center flex-col mt-8 space-y-4">
        <h3>Trending tags</h3>

        <nav className="flex flex-col mt-4 justify-between">
          <ul role="list" className="space-y-2 flex flex-col items-start">
            {trendingTagsRoutes.map((route) => {
              return (
                <DesktopItem
                  key={route.label}
                  path={route.path}
                  label={route.label}
                  active={route.active}
                />
              );
            })}
          </ul>
        </nav>
      </div> */}

      <div className="flex items-center flex-col mt-8 space-y-4">
        <h3>Personal</h3>

        <nav className="flex flex-col mt-4 justify-between">
          <ul role="list" className="space-y-2 flex flex-col items-start">
            {personalRoutes.map((route) => (
              <DesktopItem
                key={route.label}
                path={route.path}
                label={route.label}
                icon={route.icon}
                active={route.active}
                onClick={route.onClick}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DesktopSidebar;
