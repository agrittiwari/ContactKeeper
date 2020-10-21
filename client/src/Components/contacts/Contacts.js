import React, { useContext, Fragment} from 'react';
import {CSSTransitiion, TransitionGroup } from 'react-transition-group'
import ContactContext from '../../Context/Contact/contactContext';
import ContactItem from './ContactItem'

 const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered} =contactContext;
if(contacts.length === 0){
    return<h4> Please add a contact</h4>
}
    return (
        <Fragment>
            <TransitionGroup>
            {filtered !== null ? filtered.map(contact  =>( 
            <CSSTransitiion key={contact.id} timeout={500} classNames="item" ><ContactItem 
             contact= {contact}/></CSSTransitiion> )) : contacts.map(contact  => 
             <CSSTransitiion  key={contact.id}  timeout={500} classNames="item" >
                 <ContactItem 
                contact= {contact}/>
             </CSSTransitiion>
             )}
            </TransitionGroup>
            

           
        </Fragment>
    )
}
export default Contacts;