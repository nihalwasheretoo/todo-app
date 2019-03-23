import { FETCH_TODOS, ADD_TODO, DELETE_TODO, CHECK_IF_USER_IS_LOGGED_IN, ADD_USER, DELETE_USER, ALREADY_REGISTERED, NOT_REGISTERED, FETCH_USER } from "./types";
import axios from 'axios';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
const { fetchToDos } = require('../graphql/queries/todoQueries');
const { addToDoMutation, deleteToDoMutation } = require('../graphql/mutations/todoMutations');
const { insertUserMutation, deleteUserMutation } = require('../graphql/mutations/userMutations');
const { loginUser } = require('../graphql/queries/userQueries');
const client = new ApolloClient({
    uri: 'https://todo-hasura-backend.herokuapp.com/v1alpha1/graphql'
});

export const  getToDos = (email) => async(dispatch) => {    
    // const todos = await fetchToDos(email);    
    // console.log("TODOS : ",todos);    
    
    const todos = [
        {
            title: "E",
            todo_description: "todo E",
            todo_date: "now"
        },
        {
            title: "F",
            todo_description: "todo F",
            todo_date: "now"
        },
        {
            title: "G",
            todo_description: "todo G",
            todo_date: "now"
        },
        {
            title: "H",
            todo_description: "todo H",
            todo_date: "now"
        }
    ];

    dispatch({
        type: FETCH_TODOS,
        payload: { todos }
    });
}

export const  addToDo = (newToDo) => dispatch => {    
    addToDoMutation(newToDo);    
    dispatch({
        type: ADD_TODO,
        payload: { newToDo }
    });
    // this.getToDos("abc");
}

export const  deleteSingleToDo = (title) => dispatch => {    
    // deleteToDoMutation(id);
    dispatch({
        type: DELETE_TODO,
        payload: { title }
    });
}

export const  checkIfUserIsLoggedIn = () => dispatch => {    
    dispatch({
        type: CHECK_IF_USER_IS_LOGGED_IN,
        payload: { }
    });
}

export const addUser = (email, password) => dispatch => {    
    insertUserMutation(email, password);
    dispatch({
        type: ADD_USER,
        payload: { email }
    });
}

export const  deleteUser = (email) => dispatch => {    
    deleteUserMutation(email);
    dispatch({
        type: DELETE_USER,
        payload: { }
    });
}

export const  alreadyRegistered = () => dispatch => {    
    dispatch({
        type: ALREADY_REGISTERED,
        payload: { }
    });
}

export const  fetchUser = (email, password) => dispatch => {    
    loginUser(email, password);
    dispatch({
        type: FETCH_USER,
        payload: { email }
    });
}

export const  notRegistered = () => dispatch => {        
    dispatch({
        type: NOT_REGISTERED,
        payload: { }
    });
}