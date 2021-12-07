import React from 'react';

/**npm install node-sass --save */
import './Pagination.scss';

class Pagination extends React.Component {

    constructor(props) {
      super(props);
      this.state = { changepag: true };
    }


    render() {
        return (
            <div id="app" class="container">  
              <ul class="page">
              <li class="page__numbers active"> 1</li>
              <li class="page__numbers">2</li>
              <li class="page__numbers">3</li>
              <li class="page__numbers">4</li>
              <li class="page__numbers">5</li>
              <li class="page__numbers">6</li>
              <li class="page__dots">...</li>
              <li class="page__numbers"> 10</li>
              </ul>
            </div>
        );
    }
}
export default Pagination 