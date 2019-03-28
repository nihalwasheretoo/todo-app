import gql from "graphql-tag";

const { client } = require("../config");

export function insertUserMutation(email, password = "") {
  client
    .mutate({
      mutation: gql`
         mutation insert_user {
             insert_user(
               objects: [
                 {
                   email: "${email}",
                   password: "${password}"
                 }
               ]
             ) {
               returning {
                 id
                 email                   
               }
             }
           }
          
        `
    })
    .then(data => data)
    .catch(error => error);
}
