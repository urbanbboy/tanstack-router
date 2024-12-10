import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="m-2 bg-slate-200">
        <div className="flex gap-x-2 p-4">
          <Link to="/about">about</Link>
          <Link to="/login">login</Link>
          <Link to="/">main</Link>
        </div>
      </div>
      <Outlet />
      {!import.meta.env.PROD && <TanStackRouterDevtools />}
    </>
  ),
});