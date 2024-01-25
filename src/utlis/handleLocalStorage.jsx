export const getUserListFromLocal = () => {
    
    let usersList = localStorage.getItem('usersList');
    usersList = JSON.parse(usersList);

    return usersList;
}

export const getUserFromLocal = () => {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    return user;
}

export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}