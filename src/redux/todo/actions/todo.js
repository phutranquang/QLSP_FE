export const ADD_TODO = 'ADD_TODO';
export const addTodoByName = (nameTodo) => ({
    type: ADD_TODO,
    nameTodo
});

export const CHANGE_NAME_TODO = 'CHANGE_NAME_TODO';
export const changeNameTodo = (keyword) => ({
    type: CHANGE_NAME_TODO,
    keyword
});

export const REMOVE_ITEM_TODO = 'REMOVE_ITEM_TODO';
export const removeItemTodoById = (id) => ({
    type: REMOVE_ITEM_TODO,
    id
});

export const FINISH_ITEM_TODO = 'FINISH_ITEM_TODO';
export const finishItemTodoById = id => ({
    type: FINISH_ITEM_TODO,
    id
})