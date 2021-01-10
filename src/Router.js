import React from 'react'
import { Redirect, Route,   BrowserRouter as Router , Switch } from 'react-router-dom';
import AuthPage from './pages/authpage.cpmponent';
import EditNotesPage from './pages/editnotespage.component';
import NotesPage from './pages/notespage.component';

export default function router() {
    return (
        <div>
            

        <Switch>
            <Route exact path="/auth" component={AuthPage} />
            <Route exact path="/notes" component={NotesPage} />
            <Route exact path="/edit-note" component={EditNotesPage} />
            <Route exact path="/noted-edi" component={EditNotesPage} />
            <Redirect to={"/auth"} />
          </Switch>
        </div>
    )
}
