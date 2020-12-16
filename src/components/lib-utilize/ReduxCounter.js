import React, { useState } from 'react';
// import ReduxStore from '../redux/redux-store';
import { store } from '../../redux/redux-persist';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import MobXEg from './MobXEg';

/*  If we use normal ReduxStore, then we loose the changes of counter & to-do list,
    whenever the component is re-rendered, using redux-persist solves this issue.  */
const ReduxCounter = () => {
    let inputVal;

    const [count, setValue] = useState(store.getState().returnCounter);
    const [todoItems, setItemList] = useState(store.getState().todoList);
    const [filter, setFilter] = useState('SHOW_ALL');
    const [itemID, setitemID] = useState(0);

    /* To make sure that we get latest values of counter & todoList */
    store.subscribe(() => setValue(store.getState().returnCounter));
    store.subscribe(() => setItemList(store.getState().todoList));

    const ToDoItem = ({ item }) => {
        return (
            <div className="listitem">
                <div
                    className="itemText"
                    onClick={() =>
                        store.dispatch({
                            type: 'TOGGLE_ITEM',
                            id: item.id,
                        })
                    }
                >
                    {item.completed ? underlineText(item.text) : item.text}
                </div>
                <div className="itemRemove">
                    <CloseIcon
                        onClick={() =>
                            store.dispatch({
                                type: 'DELETE_ITEM',
                                id: item.id,
                            })
                        }
                    />
                </div>
            </div>
        );
    };

    const FilterItem = ({ title, filterName }) => {
        if (filterName === filter) {
            return <span> {title} </span>;
        }
        return (
            <div className="activeFilter" onClick={() => setFilter(filterName)}>
                {title}
            </div>
        );
    };

    const RenderList = () => {
        let result = todoItems;

        /* Get list based on the current filter, print a msg if no item present */
        switch (filter) {
            case 'SHOW_ALL': {
                if (result.length > 0) {
                    return <ItemList list={result} />;
                }
                return 'No Tasks Noted Down';
            }
            case 'ITEMS_COMPLETED': {
                result = result.filter((item) => item.completed);
                if (result.length > 0) {
                    return <ItemList list={result} />;
                }
                return 'No Completed Tasks';
            }
            case 'ITEMS_PENDING': {
                result = result.filter((item) => !item.completed);
                if (result.length > 0) {
                    return <ItemList list={result} />;
                }
                return 'No Pending Tasks';
            }
            default:
                return 'No Tasks Noted Down';
        }
    };

    const ItemList = ({ list }) => {
        return (
            <div>
                <ul type="square">
                    {list.map((item) => (
                        <li key={item.id}>
                            <ToDoItem item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const underlineText = (text) => {
        return <div className="text-striked"> {text} </div>;
    };

    return (
        <div style={{ padding: '20px' }}>
            <p> Redux Counter and To-Do List Example </p>
            <p> Counter Value : {count} </p>
            <Button
                style={{ backgroundColor: '#21b6ae', color: 'yellow' }}
                variant="contained"
                onClick={() => store.dispatch({ type: 'INCREMENT' })}
            >
                Inc counter
            </Button>
            <Button
                style={{ backgroundColor: '#21b6ae', color: 'yellow' }}
                variant="contained"
                onClick={() => store.dispatch({ type: 'DECREMENT' })}
            >
                Dec counter
            </Button>
            <div className="div_list">
                <p> To-Do List </p> <br />
                <input
                    ref={(node) => {
                        inputVal = node;
                    }}
                    style={{ width: '200px', height: '25px' }}
                ></input>
                <Button
                    onClick={() => {
                        store.dispatch({
                            type: 'ADD_ITEM',
                            text: inputVal.value,
                            id: itemID,
                        });
                        setitemID(itemID + 1);
                        inputVal.value = '';
                    }}
                    style={{
                        backgroundColor: '#21b6ae',
                        marginLeft: '10px',
                        color: 'yellow',
                    }}
                >
                    Add Item
                </Button>
                <div className="listOptions">
                    <div>
                        <FilterItem filterName="SHOW_ALL" title="All Items" />
                    </div>
                    <div>
                        <FilterItem
                            filterName="ITEMS_PENDING"
                            title="Pending"
                        />
                    </div>
                    <div>
                        <FilterItem
                            filterName="ITEMS_COMPLETED"
                            title="Completed"
                        />
                    </div>
                </div>
                <RenderList />
            </div>

            <p> A simple Counter using MobX </p>
            <MobXEg />
        </div>
    );
};

export default ReduxCounter;
