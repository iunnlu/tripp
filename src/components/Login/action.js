export const LoginAction = (googleId) => {
    return({
        type: "LOGIN",
        payload: googleId
    })
}
