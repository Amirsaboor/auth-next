'use server'

import { resolve } from "styled-jsx/css"

function handelError(data) {
    const errors = []

    Object.keys(data).map(key => {
        data[key].map(error => {
            errors.push(error)
        })
    })

    return errors.join()
}
async function register(state, formData) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve('ok');
        }, 2000)
    })
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


    const res = await fetch('http://localhost:8000/api/register', {
        cache: 'no-store',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
            c_password: confirmPassword
        })
    })
    const data = await res.json();
    if (res.ok) return { success: 'You Are Registered ' }
    else return { error: handelError(data) }



}
export { register }