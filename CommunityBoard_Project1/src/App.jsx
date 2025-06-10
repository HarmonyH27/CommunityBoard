import './App.css';
import Board from './components/Board';

const App = () => {

  return (
    
    <div className= "App">

      <div className="header">
        <img id="header-img" src="src/assets/header.png" alt="header"/>
        <div id="borderline"></div>
      </div>

      <div className="board-container">

        <Board img="src/assets/maitland-museum.jpg" eventName="Art & History Museums of Maitland" info="Maitland, FL" link="https://artandhistory.org/"/>
        <Board img="src/assets/morse-museum.jpg" eventName="The Charles Hosmer Morse Museum" info="Winter Park, FL" link="https://morsemuseum.org/"/>
        <Board img="src/assets/oc-history-center.jpg" eventName="Orange County Regional History Center" info="Orlando, FL" link="https://www.thehistorycenter.org/"/>
        <Board img="src/assets/orlando-museum.jpg" eventName="Orlando Museum of Art" info="Orlando, FL" link="https://omart.org/"/>
        <Board img="src/assets/orlando-science-center.jpg" eventName="Orlando Science Center" info="Orlando, FL" link="https://www.osc.org/"/>
        <Board img="src/assets/ucf-art-gallery.jpg" eventName="UCF Art Gallery" info="Orlando, FL" link="https://cah.ucf.edu/gallery/"/>
        <Board img="src/assets/zora-neale-museum.jpeg" eventName="Zora Neale Hurston National Museum of Fine Arts" info="Eatonville, FL" link="http://www.zoranealehurstonmuseum.com/" />
        <Board img="src/assets/space-center.jpg" eventName="Kennedy Space Center" info="Merrit Island, FL" link="https://www.kennedyspacecenter.com/"/>
        <Board img="src/assets/rollins-museum.png" eventName="Rollins Museum of Art" info="Winter Park, FL" link="https://www.rollins.edu/rma/"/>
        <Board img="src/assets/winter-park-museum.jpg" eventName="Winter Park History Museum" info="Winter Park, FL" link="https://www.wphistory.org/"/>

      </div>

    </div>
  ) 
}

export default App;