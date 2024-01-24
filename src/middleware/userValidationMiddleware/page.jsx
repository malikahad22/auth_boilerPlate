export const checkDataFormat = (email, password) => {

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (emailRegex.test(email) && password.length > 8) {
        return true;
    }

}

export const checkUserExist = (email, password) => {

    let userDataList = localStorage.getItem('usersList');
    userDataList = JSON.parse(userDataList);

    const filteredUsers = userDataList.find((user) => user.email === email && user.password === password);
    return filteredUsers;


}