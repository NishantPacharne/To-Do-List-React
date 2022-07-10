import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const AddTodo = (props) => {
   
    const [title, settitle] = useState('')

    const submit = (e) => {
        e.preventDefault();
        props.addTodo(title)
        settitle('')
    }

    return (
        <div className="pt-8 px-4 sm:w-1/2 w-full m-auto">
            <form action="" className='flex' onSubmit={submit}>
                <div className="relative w-full">
                <input type="text" id="hero-field" name="hero-field" value={title} onChange={(e) => {settitle(e.target.value)}} placeholder="Add new tasks" className="w-full bg-gray-100  border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
                </div>
                <button type='submit' className="inline-flex text-white bg-gray-800 py-[0.3rem] px-6 focus:outline-none hover:bg-gray-900 text-lg">Add</button>
            </form>
        </div>
    )
}

AddTodo.propTypes = {}

export default AddTodo