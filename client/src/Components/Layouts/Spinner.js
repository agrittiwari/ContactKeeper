import React, { Fragment} from 'react';
import spinner from './Spinner.gif';

export default () => {
    <Fragment>
        <img 
        src = {spinner}
        style = {{width: '200px', margin:'auto', diaplay: 'block'}}
        alt='Loading...'
        />
    </Fragment>
}