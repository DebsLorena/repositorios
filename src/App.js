import { Person, Notifications, Chat, FavoriteRounded, QuestionMark, Add } from '@mui/icons-material';
import './App.css';
import MenuContainer from './Components/MenuContainer';
import { useEffect } from 'react';
import Pin from './Components/Pin';
import Data from './Components/Data';

function App() {
  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");

    function setMenuActive(){
      allIcon.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allIcon.forEach(n => n.addEventListener('click', setMenuActive))
  }, []);



  return (
    <div className="App">
      <div className="menuContainer">
      <ion-icon name="desktop-outline"></ion-icon>

        <div className="subMenu">
          <div>
            <MenuContainer icon={<Person />} />
            <MenuContainer icon={<Notifications />} />
            <MenuContainer icon={<Chat />} />
          </div>
          <div>
            <MenuContainer icon={<FavoriteRounded />} />
          </div>
          <div>
            <MenuContainer icon={<QuestionMark />} />
            <MenuContainer icon={<Add />} />
          </div>
        </div>
      </div>

      <main>
        <div className='searchBox'>
          <input type="text" placeholder="Search.." />
            <div className="search">
            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
            </div>
        </div>

        <div className="mainContainer">
          {Data && Data.map((data) => ( <Pin 
          key={data.id} 
          pinSize={data.size}
          imgSrc={data.imgSrc}
          name={data.name}
          link={data.link}
          />))}
        </div>
      </main>
    </div>
  );
}

export default App;
