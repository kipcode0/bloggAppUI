export function getAuthToken(){
    return localStorage.getItem("Token");
}
export function getUserFirstName(){
    return localStorage.getItem("firstName");
}
export function getUserLastName(){
    return localStorage.getItem("LastName");
}
export function tokenLoader(){
    return getAuthToken();
}