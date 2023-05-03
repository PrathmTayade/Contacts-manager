import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import ContactsPage from "./pages/ContactsPage.tsx";
import MapsChartsPage from "./pages/DashboardPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  // Setting up the routing
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate to={"contacts"} replace />,
        },
        {
          path: "contacts",
          element: <ContactsPage />,
        },
        {
          path: "dashboard",
          element: <MapsChartsPage />,
        },
      ],
    },
  ]);

  //React query initialization
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
