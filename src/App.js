import React, { Component } from 'react';
import Home from './Home';
import CreateDistricts from './view/CreateDistricts';
import CreateQuestions from './view/CreateQuestions';
import Questions from './view/Questions';
import ListChoices from './view/ListChoices';
import CreateChoices from './view/CreateChoices';
import EditChoices from './view/EditChoices';
import EditQuestions from './view/EditQuestions';
import AddChoices from './view/AddChoices';
import AddDistrict from './view/AddDistrict';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faCheck, faTimes, faAlignLeft, faCaretSquareDown} from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faCheck, faTimes, faAlignLeft, faCaretSquareDown);

class App extends Component {
  render() {
      return (
        <div className="ui container">
          <BrowserRouter>
            <div>
                <Route exact path="/:election_id" component={Home} />
                <Route exact path="/:election_id/listQuestions" component={Questions} /> 
                <Route exact path="/:election_id/createQuestions" component={CreateQuestions} /> 
                <Route exact path="/:election_id/create_districts" component={CreateDistricts} />
                <Route exact path="/:election:id/create_choices" component={CreateChoices} />
                <Route exact path="/:election_id/list_choices" component={ListChoices} />
                <Route exact path="/:election_id/edit_choices" component={EditChoices} />
                <Route exact path="/:election_id/edit_questions" component={EditQuestions} />
                <Route exact path="/:election_id/add_choices" component={AddChoices} />
                <Route exact path="/:election_id/add_district" component={AddDistrict} />
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
