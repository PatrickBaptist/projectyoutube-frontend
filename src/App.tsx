import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App-style"
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./components/pages/home";
import Shorts from "./components/pages/shorts";
import Subscription from "./components/pages/subscription";
import Library from "./components/pages/library";
import History from "./components/pages/history";
import { UserStorage } from "./contextApi/usersContext";
import Login from "./components/pages/login";
import Search from "./components/pages/search";
import SignUp from "./components/pages/sign-up";
import YourVideos from "./components/pages/your-videos";
import { Container, ContainerRoutes } from "./App-style";

function App() {

  return (
  <BrowserRouter>
    <UserStorage>

      
    <div className="App">
      <Header />
      
      <Container>


        <Menu />

        <ContainerRoutes>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shorts' element={<Shorts />} />
            <Route path='/subscription' element={<Subscription />} />
            <Route path='/library' element={<Library />} />
            <Route path='/history' element={<History />} />
            <Route path='/login' element={<Login />} />
            <Route path='/search' element={<Search />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path="/yourvideos" element={<YourVideos />} />
          </Routes>

        </ContainerRoutes>

      </Container>
    
    
    </div>
    
    </UserStorage>
  </BrowserRouter>
  );
}

export default App;