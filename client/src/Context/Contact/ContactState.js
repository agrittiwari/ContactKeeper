import React, {useReducer } from 'react';
import uuid from 'uuid';
import ContactContext  from'./contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../Types';

const ContactState = props => {
    const initialState = {
      contacts: [
          {
              id:1,
              name: 'Jake Johnson',
              email: 'Jake@gmail.com',
              phone: '11111-11111',
              type : 'personal'
          },
          {
            id:2,
            name: 'Jimmy Johnson',
            email: 'Jimmy@gmail.com',
            phone: '22222-22222',
            type : 'professional'
        },
        {
            id:3,
            name: 'Jude Johnson',
            email: 'Jude@gmail.com',
            phone: '33333-33333',
            type : 'personal'
        },
        {
            id:4,
            name: 'Jerry Johnson',
            email: 'Jerry@gmail.com',
            phone: '44444-44444',
            type : 'personal'
        }
      ]  
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //aDD cONTACT


    //Delete Contact


    //SetCurrent Contact



    //Clear Current Contact



    //Update Contact



    //Filter Contact



    //Clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}>
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;