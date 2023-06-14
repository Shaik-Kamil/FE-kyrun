import React from 'react';
import { useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function Bulletin ({ group }){
const [bulletin, setBulletin] = useState([]);
const {id} = useParams()

useEffect(() => {
    axios
    .get(`${API}/bulletin/${id}`)
    .then((res) => setBulletin(res.data))
    .catch((c) => console.warn("catch", c));
}, [id])


return(
    <div>

        <h1>Bulletin for <u>{group.title}</u></h1>
            {bulletin.map(group=><div>
             {group.title}
            {group.is_important ? <h2>❗{group.message} </h2>: null}
            </div>)}
    </div>
)
}
export default Bulletin;