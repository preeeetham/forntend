import React, { useState } from 'react';
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import TokenContext from '../../context/TokenContext';
import axios from "../../Axios/axios.js"
import Card from '../Card.jsx';
import "./createTask.css"
function CreateTask() {
    const { dispatch } = useContext(TaskContext)
    const {userToken} = useContext(TokenContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    // const [toast, setToast] = useState();
    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/task/addTask", {title, description},{
              headers: {
                Authorization: `Bearer ${userToken}`
              }
              
            })
          } catch (error) {
            console.log(error);
          }
        dispatch({
            type: "ADD_TASK",
            title,
            description
        })
        setTitle("")
        setDescription("")
    }
    return (
        <div className="addContainer md:w-1/3 md:mx-auto mx-3 mt-3 flex justify-center">
            <div className='w-11/12 mx-auto'>
            <Card>
              <form onSubmit={handleAdd}>
                <div>
                  <label htmlFor="title" className="block text-sm font-bold text-black-700 mb-1">Title :</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder='eg: go to gym'
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  />
                </div>
                <div className='my-3'>
                  <label htmlFor="description" className="block text-sm font-bold text-black-700 mb-1">Description :</label>
                  <textarea
                    rows={5}
                    name="description"
                    id="description"
                    placeholder='eg: from 8-9pm'
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ resize: "none" }}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  />
                </div>
                <div className='flex justify-center'>
                <button
                  type="submit"
                  className="group relative w-fit flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-2md hover:shadow-lg transition-shadow duration-300"
                >
                  Add Task
                </button>
                </div>
              </form>
              </Card>
            </div>
        </div>
      );
}

export default CreateTask;