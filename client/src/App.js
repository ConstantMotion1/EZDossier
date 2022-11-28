import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import "./App.css";
import Choose from "./pages/Choose";
import FillContent from "./pages/Content";
import FinalRender from "./pages/FinalPage";



const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Choose/>} />
        </Routes>
        <Routes>
          <Route path="/fillcontent" element={<FillContent/>} />
        </Routes>
        <Routes>
          <Route path="/finalrender" element={<FinalRender/>} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
