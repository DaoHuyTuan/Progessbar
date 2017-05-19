import React, { Component } from 'react';
import './App.css';
class App extends Component {
render()
{
    return(
          <div id="loader"></div>
          );
}
      /*componentDidMount is the function will work when the render function done */
  componentDidMount(){
      /*javascript of progess bar */
      LoadProgess();
      function LoadProgess(){
        var progessBar  = document.getElementById('loader');
        var width = 1;
        var id    = setInterval(loader, 10);

            function loader()
            {
                    if  (width >= 100)
                    {
                        clearInterval(id);
                    }
                    else
                    {
                        width++;
                        progessBar.style.width = width + '%';
                    }
            }
      }

  }
}

export default App;
