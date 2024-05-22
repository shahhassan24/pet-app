// import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store";
import Details from "./Details";
import SearchParams from "./SearchParams";
import Login from "./Login";
import "./style.css";
import AllBlogs from "./AllBlogs";
import AddBlog from "./AddBlog";
import Navbar from "./Navbar";
import BlogPage from "./BlogPage";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Navbar />
            <Toaster position="bottom-right" reverseOrder={false} />
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog/:id" element={<BlogPage />} />

              <Route path="/get-all-blogs" element={<AllBlogs />} />
              <Route path="/add-blog" element={<AddBlog />} />
            </Routes>
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
