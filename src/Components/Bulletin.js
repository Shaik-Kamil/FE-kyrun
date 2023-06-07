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
              {bulletin.map(group=><div>
                <h1>{group.title}</h1>
                <h1>{group.message}</h1>
              </div>)}
    </div>
)
}
export default Bulletin;