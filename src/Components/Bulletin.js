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
    <div style={{paddingBottom: '50px'}}>
            <h1>Bulletin for <u>{group.title}</u></h1>
              {bulletin.map(group=><div class="feature bg-primary bg-gradient text-white rounded-3 mb-3" style={{padding: '20px', position: 'relative', left: '30px'}}>
                 {group.title}
                <h2>{group.message}</h2>
                {group.is_important ? <p>❗</p> : null}
              </div>)}
              <br />
              <br />
    </div>
)
}
export default Bulletin;