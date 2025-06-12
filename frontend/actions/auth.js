'use server'

function register(state,formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (name == '' || email == '' || password == '' || confirmPassword == '') {
        return {
            error: 'name , email.password is required'
        }
    }
    if (password !== confirmPassword) {
        return {
            error: 'password do not match !'
        }
    }

}
export { register }