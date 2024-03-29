import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import nav from './nav'
import contactsReducer from '../Contacts/reducers';
import testiReducer from '../Testi/reducers';
import notifReducer from '../Notifications/reducers';
import profileReducer from '../Profile/reducers'

const rootReducers = combineReducers({
  nav: nav,
  contactsReducer,
  testiReducer,
  notifReducer,
  profileReducer,
  form: formReducer
})

export default rootReducers