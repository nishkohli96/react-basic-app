import React from 'react';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react';

import rootStore from '../../mobx';
import { DIV } from '../../styled-components/ThemedComponents';

/* Directly import and call Doubler store like this */
// const DBLR = new Doubler();

const MobXEg = () => {
    /* How to call a computed mobX fn, calling this fn as such didnt update the state */
    // console.log(' rteur  dbl value ',DBLR.double);

    return (
        <DIV>
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
