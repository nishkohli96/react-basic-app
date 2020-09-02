const todoList = (items = [], action) => {
    const newItem = {
        id: action.id,
        text: action.text,
        completed: false,
    };
    /* Dont insert anything if input not entered */
    if (action.text === '') {
        return [...items];
    }

    switch (action.type) {
        case 'ADD_ITEM': {
            return [...items, newItem];
        }
        case 'DELETE_ITEM': {
            return items.filter((item) => item.id !== action.id);
        }
        case 'TOGGLE_ITEM': {
            return items.map((item) => {
                if (item.id !== action.id) {
                    return item;
                }
                return { ...item, completed: !item.completed };
            });
        }
        default: {
            return items;
        }
    }
};

export default todoList;
