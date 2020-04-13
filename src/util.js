export const addUser = newUser => {

const jsonUsers = localStorage.getItem('users');
const users = jsonUsers ? JSON.parse(jsonUsers) : [];
users.push(newUser);
localStorage.setItem('users',JSON.stringify(users));

}

export const addToken = login => {
    localStorage.setItem('token', login);

}


export const getUser = () => {
    let jsonToken = localStorage.getItem('token')
    let token =  jsonToken || '';
    let users = JSON.parse(localStorage.getItem('users'))
    let person = users.find(user => user.login === token)
    return person;
}