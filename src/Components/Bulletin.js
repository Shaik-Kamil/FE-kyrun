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
                <h1>{group.message}</h1>
                {group.is_important ? <p>❗</p> : null}
              </div>)}
    </div>
)
}
export default Bulletin;