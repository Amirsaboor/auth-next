'use server'

import { resolve } from "styled-jsx/css"
import { cookies } from 'next/headers'
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
    if (res.ok) {
        cookies().set({
            name: 'token',
            value: `${data.token}`,
            httpOnly: true
        })
        return {
            success: 'You Are Registered ',
            user: data.user
        }
    }
    else return { error: handelError(data) }



}


async function login(state, formData) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve('ok');
        }, 2000)
    })
    const email = formData.get('email')
    const password = formData.get('password')

    if (email == '' || password == '') {
        return {
            error: 'email , password is required'
        }
    }


    const res = await fetch('http://localhost:8000/api/login', {
        cache: 'no-store',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
        })
    })
    const data = await res.json();
    if (res.ok) {
        cookies().set({
            name: 'token',
            value: `${data.token}`,
            httpOnly: true
        })
        return {
            success: 'You Are Loged in ',
            user: data.user
        }
    }
    else return { error: handelError(data) }



}


async function me() {
    const token = cookies().get('token')
    if (!token) {
        return { error: 'Not Authorized' }
    }
    const res = await fetch(`http://localhost:8000/api/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })
    const data = await res.json();
    if (res.ok) {
        return { user: data.user }
    } else {
        return { user: 'User Forbidden' }
    }

}

async function logout() {
    const token = cookies().get('token')

    const res = await fetch(`http://localhost:8000/api/logout`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token.value}`,
            'Accept': 'application/json'
        }
    })
    const data = await res.json();
    if (res.ok) {
        cookies().delete('token')

        return {
            success: 'You Are LogOout'
        }
    } else {
        return { error: handelError(data) }
    }

}



export { register, login, me, logout }