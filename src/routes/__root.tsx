import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "2.07 Studio" },
      { name: "description", content: "A monochrome, interactive single-page portfolio for 2.07 Studio, showcasing digital marketing and creative services." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "2.07 Studio" },
      { property: "og:description", content: "A monochrome, interactive single-page portfolio for 2.07 Studio, showcasing digital marketing and creative services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "2.07 Studio" },
      { name: "twitter:description", content: "A monochrome, interactive single-page portfolio for 2.07 Studio, showcasing digital marketing and creative services." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5afd9c9a-8c6d-4d67-ac1e-6daf2697e0b2/id-preview-876cd09f--5f0ccd1e-fe1f-44aa-aae3-f3fa1493c054.lovable.app-1777709287271.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5afd9c9a-8c6d-4d67-ac1e-6daf2697e0b2/id-preview-876cd09f--5f0ccd1e-fe1f-44aa-aae3-f3fa1493c054.lovable.app-1777709287271.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="dark">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <SonnerToaster />
    </>
  );
}
