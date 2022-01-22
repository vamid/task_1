import './App.css';
import Avatar from './components/Avatar';
import avatarImg from "./assets/images/avatar.jpg"

function App() {
  return (
    <>
      <h1> hello world</h1>

      <Avatar img={avatarImg} />
    </>
  );
}

export default App;
