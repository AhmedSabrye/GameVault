import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./pages/NotFound";
// import GameDetails from "./pages/GameDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/game/:id" element={<GameDetails />} /> */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
