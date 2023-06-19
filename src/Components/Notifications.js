import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import '../CSS/Notifications.css';

const Notifications = ({ group, userId }) => {
    return (
        <div class="row" style={{paddingLeft: '150px', width: '950px'}}>
            <div class="row-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    {group.is_important ? <h2>❗{group.message} </h2> : null}
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">
                                    <p><i>{group.date}</i> From <u> {group.groups}</u></p>
                                </div>
                            </div>
                        <div class="row-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <br />
        </div>
    );
};

export default Notifications;