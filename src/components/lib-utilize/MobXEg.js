import React from 'react';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';

import rootStore from 'Mobx-Store';
import { DIV } from 'Styled-Comps/ThemedComponents';

/* Directly import and call Doubler store like this */
// const DBLR = new Doubler();

/* In case Strict mode is enabled, observable value would have to been changed by explicitly calling the action, eg -> 

isAdmin : observable 

loginUserService({ email, password }).then(
    action((response) => {  // import { action } from 'mobx'
        this.loggedIn = true;
    })
);
*/

const MobXEg = () => {
    /* How to call a computed mobX fn, calling this fn as such didnt update the state */
    // console.log(' rteur  dbl value ',DBLR.double);
    /*  Required to use toJS(value) to convert obj to a JS object, else wud show it as 
        some proxy object; already done in object.store.js file */
    console.log(rootStore.objvar.objValue);

    return (
        <DIV>
            <p>{rootStore.objvar.obj.name}</p>
            <input
                type="number"
                value={rootStore.doubler.counterValue}
                readOnly
                placeholder="Enter a number"
            />
            <Button
                style={{ backgroundColor: '#21b6ae', color: 'yellow' }}
                variant="contained"
                onClick={() => rootStore.doubler.increment()}
            >
                Increment
            </Button>
            <Button
                style={{ backgroundColor: '#21b6ae', color: 'yellow' }}
                variant="contained"
                onClick={() => rootStore.doubler.doubleNum()}
            >
                Double
            </Button>
        </DIV>
    );
};

export default observer(MobXEg);
