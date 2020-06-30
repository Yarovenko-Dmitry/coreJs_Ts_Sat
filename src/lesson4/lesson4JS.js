console.log('lesson4JS works')

//1* spread and rest: what forgot at last time
//2* associative array
//3* practice

const defaultTodoLists = [
    {id: todoListId1, title: 'What to lear', filter: FILTER_TYPE.ACTIVE},
];

const defaultTasksLists = {
    [todoListId1]: [
        {id: 0, title: 'HTML&CSS', isDone: true},
        {id: 1, title: 'JS', isDone: true},
        {id: 2, title: 'ReactJS', isDone: false},
        {id: 3, title: 'Rest API', isDone: true},
        {id: 4, title: 'GraphQL', isDone: false}
    ],
};

const FILTER_TYPE = {
    ALL: 'ALL',
    COMPLETED: 'COMPLETED',
    ACTIVE: 'ACTIVE'
};

const RETURN_VALUE_BY_FILER_TYPE = {
    [FILTER_TYPE.ALL]: (task) => task,
    [FILTER_TYPE.COMPLETED]: (task) => task.isDone,
    [FILTER_TYPE.ACTIVE]: (task) => !task.isDone,
}

const getRandomID = () => Math.round(Math.random() * 1000);

const todoListId1 = getRandomID();

const App = (todoList, taskList) => {
    let todoLists = todoList
    let tasksList = taskList;

    const setTodoLists = (newTodoList) =>  todoLists = newTodoList;
    const setTasks = (newTasksList) =>  tasksList = newTasksList;

    const addTodoLis = (title) => {
    };
    const deleteTodoListByID = (id) => {

    };

    const changeTodoListFilterByID = (todoListId, filterType) => {
    };

    const changeTaskStatusByID = (todoListId, taskId) => {
    };

    const addNewTask = (listId, title) => {
    }

    const deleteTaskByID = (todoListId, taskId) => {
    };

    return {
        render: () => [
            AddItemForm({
                addItem: addTodoLis
            }),
            ...todoLists.map(list => TodoList({
            })),
        ]
    }
};

const TodoList = (props) => {
    const tasks = props.tasks
        .filter(task => RETURN_VALUE_BY_FILER_TYPE[props.filterType](task));

    const addNewTask = (title) => {
        props.addNewTask(props.todoListId, title)
    }

    const addTaskComponent = AddItemForm({addItem: addNewTask});

    return {
        get tasks() {
            return `<ul>\n<h3>${props.title}</h3>\n${tasks.map(task => `<li>title: ${task.title} id: ${task.id} isDone: ${task.isDone}</li>\n`).join('')}</ul>`;
        },
        setFilterButton: (filterType) => {
            props.changeTodoListFilterByID(props.todoListId, filterType);
        },
        changeTaskStatus: (taskId) => {
            props.changeTaskStatusByID(props.todoListId, taskId)
        },
        confirmButton: () => {
            addTaskComponent.confirmButton()
        },
        onChangeHandler: (value) => {
            addTaskComponent.onChangeHandler(value);
        }
    }
}

const AddItemForm = (props) => {
    let inputValue = '';
    return {
        confirmButton: () => {
            const title = inputValue.trim();
            title ? props.addItem(title) : console.log('invalid value');
            inputValue = '';
        },
        onChangeHandler: (value) => {
            inputValue += value;
            console.log(inputValue);
        }
    }
}

const AppComponent = App(defaultTodoLists, defaultTasksLists);

let [addNewTodoList,todoList1, todoList2] = AppComponent.render();

// console.log(todoList1.tasks);


