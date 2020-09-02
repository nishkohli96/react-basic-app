const returnCounter = (counter = 2, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return counter + 1;
        }
        case 'DECREMENT': {
            return counter - 1;
        }
        default:
            return counter;
    }
};

export default returnCounter;
