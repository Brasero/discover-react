import { StyledTitle } from "./atoms";
import Home from './page/home'
import GlobalStyle from "./utils/style/GlobalStyle";
import { ThemeProvider } from "./utils/context";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
        <ThemeProvider>
            <GlobalStyle />
            <NavBar />
            <Home />
        </ThemeProvider>
    </>
  );
}

export default App;
