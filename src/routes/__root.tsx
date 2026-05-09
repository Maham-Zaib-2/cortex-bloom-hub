import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { MobileShell } from "@/components/MobileShell";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center card-soft p-8">
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <p className="mt-2 text-sm text-slate-500">Page not found</p>
        <Link to="/home" className="inline-block mt-4 btn-primary px-5 py-2 text-sm">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center card-soft p-8">
        <h1 className="font-semibold text-slate-800">Something went wrong</h1>
        <p className="mt-2 text-sm text-slate-500">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-4 btn-primary px-5 py-2 text-sm">Retry</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CorteX — Customer Intelligence" },
      { name: "description", content: "CorteX Feedback and Loyalty Engine — premium customer intelligence app." },
      { property: "og:title", content: "CorteX — Customer Intelligence" },
      { property: "og:description", content: "CorteX Feedback and Loyalty Engine — premium customer intelligence app." },
      { name: "twitter:title", content: "CorteX — Customer Intelligence" },
      { name: "twitter:description", content: "CorteX Feedback and Loyalty Engine — premium customer intelligence app." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e6808e68-80db-421e-9148-4dcdb3dce12d/id-preview-ed640060--85b4d796-49b5-415f-b222-7bc285f307e3.lovable.app-1778319414580.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e6808e68-80db-421e-9148-4dcdb3dce12d/id-preview-ed640060--85b4d796-49b5-415f-b222-7bc285f307e3.lovable.app-1778319414580.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <MobileShell />
    </QueryClientProvider>
  );
}
