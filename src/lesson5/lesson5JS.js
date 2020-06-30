console.log('lesson5 works');

const FILTER_TYPE = {
    ALL: 'ALL',
    DONE: 'DONE',
    IN_PROGRESS: 'IN_PROGRESS'
};

const todoList0 = {
    id: 'TodoList0',
    filter: FILTER_TYPE.ALL,
    title: 'Lear CoreJs'
};
const todoList1 = {
    id: 'TodoList1',
    filter: FILTER_TYPE.ALL,
    title: 'Learn React'
};
const todoList2 = {
    id: 'TodoList2',
    filter: FILTER_TYPE.ALL,
    title: 'Learn Angular'
};

const todoLists = [ todoList0, todoList1, todoList2];
const tasksList ={
    [todoList0.id]: [
        {}
    ],
    [todoList1.id]: [],
    [todoList2.id]: [],
}

const ADD_TODO_LIST = 'ADD_TODO_LIST';

const defaultState = { todoLists, tasksList };

const updateImmutableState = ( action ) => ( prevState ) => {
    switch (action.type) {
        case ADD_TODO_LIST: {
            const id = `TodoList${prevState.todoLists.length}`;
            return {
                ...prevState,
                todoLists: [ ... prevState.todoLists, {id, ...action.payload}],
                tasksList: {
                    ...prevState.tasksList,
                    [id]: [],
                }
            }
        }
        default: return prevState;
    }
}
const createAction = (type, payload) => ({type, payload});

const addTodoListActionCreator = (title) => createAction(ADD_TODO_LIST, {title, filter: FILTER_TYPE.ALL});

const updateState = defaultState => (...actions) => actions.reduce((prevState, action) => {
    const currentState = action(prevState);

    console.log(prevState === currentState);

    return currentState;
}, defaultState);

const newState = updateState(defaultState)(
    updateImmutableState(addTodoListActionCreator('go to shop after work')),
    updateImmutableState(addTodoListActionCreator('go to shop2 after work')),
);


console.log(newState);
