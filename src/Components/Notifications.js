import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import '../CSS/Groups.css';

const Notifications = ({ group, userId }) => {
    return (
        <div>


                 {group.is_important ? <h2>❗{group.message} </h2> : null}
                 <p><i>{group.date}</i> From <u> {group.groups}</u></p>

                 <br></br>



        </div>
    );
};

export default Notifications;