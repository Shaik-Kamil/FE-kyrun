import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
const API = process.env.REACT_APP_API_URL

function OneGroup () {
    const [group, setGroup] = useState({})
    const { id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        axios
        .get(`${API}/groups/${id}`)
        .then((res) => {
            console.log(res.data)
            setGroup(res.data)
        })
        .catch((c) => {
            console.warn("catch", c)
        })
    }, [id])

    return (
        <article>
            <div>
                <h1 className='group-name'>{group.title}</h1>
                <h3 className='group-description'>{group.about}</h3>

                <img className='group-img' src={group.img} alt='group'></img>

                <div className='navi'>
                    <div className='back'>
                        <Link to={`/groups`}>
                            <button>Back</button>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default OneGroup;