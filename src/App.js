import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

import Contacts from './components/Contacts'
import Contact from './components/Contact'
import { ALL_COUNTRY,US_COUNTRY } from './redux/constants'

import './App.css';

const App = () => {
  const [showContacts, setShowContacts] = useState(true)
  const [showContactDetail, setShowContactDetail] = useState(false)
  const [activeContact, setActiveContact] = useState(null)
  
  const onSelectedActiveContact = (contact) => {
    setShowContacts(false)
    setActiveContact(contact)
    setShowContactDetail(true)
  }

  const onCloseDetail = () => {
    setShowContactDetail(false)
    setShowContacts(true)
  }

  return (
    <BrowserRouter>
      <Container className="text-center">
        <Link to="/all-contacts">
          <Button variant="primary" className="buttonA">
            All Contacts
          </Button>
        </Link>
        <Link to="/us-contacts">
          <Button variant="primary" className="buttonB">
            US Contacts
          </Button>
        </Link>

        {(activeContact !== null) && ( <Contact contact={activeContact} showContactDetail={showContactDetail} onCloseContact={onCloseDetail} /> )}

        <Switch>
          <Route exact path="/all-contacts">
            <Contacts title="All Contacts" countryId={ALL_COUNTRY} showContacts={showContacts} selectActiveContact={onSelectedActiveContact} />
          </Route>
          <Route exact path="/us-contacts">
            <Contacts title="US Contacts" countryId={US_COUNTRY}  showContacts={showContacts} selectActiveContact={onSelectedActiveContact} />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
