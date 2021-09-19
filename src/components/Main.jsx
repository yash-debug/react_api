import axios from 'axios'
import React, {useState, useEffect} from 'react'

function Main(props) {
    const [resourse, setResourse] = useState('users')
    const [item, setItem] = useState([])

    useEffect(() => {
        // fetch(`https://jsonplaceholder.typicode.com/${resourse}`)
        // .then(response => response.json())
        // .then(json => console.log(json))

        axios.get(`https://jsonplaceholder.typicode.com/${resourse}`)
        .then(response => setItem(response.data))
        .catch(error => { console.log(error)})

    }, [resourse])

    return (
        <>
        <br></br>
        <center>
        <div>
            {/* <button onClick={() => setResourse('posts')}>Posts</button>
            <button onClick={() => setResourse('comments')}>Comment</button> */}
            <button onClick={() => setResourse('users')}>User</button>
        </div>
        </center>
        <br/>
        <center>
        <div className="container py-4">
        <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">S.no</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Website</th>
                                        <th scope="col">City</th>
                                    </tr>
                                </thead>
                                <tbody>
            {
                item.map(item => {
                        return <> 

                                    <tr>
                                        <td>{JSON.parse(JSON.stringify(item.id))}</td>
                                        <td>{JSON.parse(JSON.stringify(item.name))}</td>
                                        <td>{JSON.parse(JSON.stringify(item.email))}</td>
                                        <td>{JSON.parse(JSON.stringify(item.phone))}</td>
                                        <td>{JSON.parse(JSON.stringify(item.website))}</td>
                                        <td>{JSON.parse(JSON.stringify(item.address.city))}</td>
                                    </tr>

                        </>
                    }
                )
            }
            
            </tbody>
                            </table>
        </div>
        </center>
        </>
    )
}

export default Main

