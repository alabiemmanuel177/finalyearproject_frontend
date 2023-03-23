import { Send } from '@mui/icons-material';
import { OutlinedInput } from '@mui/material';
import React from 'react';
import { PeopleCardG } from './People';
import { InputAdornment } from '@mui/material';
import EmptyGroup from './EmptyGroup';

function Groups({ group, empty, leader }) {
    return (
        <> {empty ? (
            <div style={{ height: '65vh', overflow: 'hidden auto', display: 'grid', gridTemplateColumns: '63% 37%', padding: '20px' }}>
                <div style={{ marginRight: '25px', border: '1px solid lightgray', borderRadius: '10px' }}>
                    <div style={{ borderBottom: '1px solid lightgray' }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 10px 0px 10px' }}>
                            <div style={{ height: '30px', width: '30px', marginRight: '10px' }}>
                                <img style={{ height: '100%', width: '100%' }} src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="AVATAR" />
                            </div>
                            <div>
                                <h6 style={{ fontSize: '0.85rem', margin: 0, fontWeight: 'bold' }}>Dr Adetofunmi Adetunji</h6>
                                <p style={{ fontSize: '0.75rem', margin: 0, }}>Dec 5 • 8:00 PM</p>
                            </div>
                        </div>
                        <div style={{ padding: '10px 10px 0 10px' }}>
                            <p style={{ fontSize: '0.9rem' }}>Energistically pontificate reliable leadership skills after focused web-readiness. Distinctively revolutionize enterprise customer service after proactive convergence. Assertively restore market positioning bandwidth vis-a-vis long-term high-impact infrastructures.</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '0px 10px 15px 10px', justifyContent: 'space-between' }}>
                            <div style={{ width: '45%', height: '55px', border: '1px solid lightgray', display: 'flex', alignItems: 'center' }}>
                                <div style={{ borderRight: '1px solid lightgray', height: '100%', width: '20%', marginRight: '10px', padding: '5px' }}>
                                    <img
                                        style={{ height: '100%', width: '100%' }}
                                        src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                                        alt="AVATAR"
                                    />
                                </div>
                                <div style={{ padding: '5px' }}>
                                    <h6 style={{ margin: 0, fontSize: '0.9rem' }}>Assignment 1</h6>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>PDF</p>
                                </div>
                            </div>
                            <div style={{ width: '48%', height: '55px', border: '1px solid lightgray', display: 'flex', alignItems: 'center' }}>
                                <div style={{ borderRight: '1px solid lightgray', height: '100%', width: '20%', marginRight: '10px', padding: '5px' }}>
                                    <img
                                        style={{ height: '100%', width: '100%' }}
                                        src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                                        alt="AVATAR"
                                    />
                                </div>
                                <div style={{ padding: '5px' }}>
                                    <h6 style={{ margin: 0, fontSize: '0.9rem' }}>Assignment 1</h6>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>PDF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: '10px 10px 0px 10px' }}>
                            <p style={{ margin: '0px 0 5px 0', fontSize: '0.9rem', fontWeight: 'bold', color: 'gray' }}>Comments</p>
                            <div style={{ display: 'flex', alignItems: 'center', }}>
                                <div style={{ height: '30px', width: '30px', marginRight: '10px' }}>
                                    <img style={{ height: '100%', width: '100%' }} src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="AVATAR" />
                                </div>
                                <div>
                                    <h6 style={{ fontSize: '0.85rem', margin: 0, fontWeight: 'bold' }}>Dr Adetofunmi Adetunji</h6>
                                    <p style={{ fontSize: '0.75rem', margin: 0, }}>Dec 5 • 8:00 PM</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '10px 10px 0px 10px', borderBottom: '1px solid lightgray' }}>
                            <p style={{ fontSize: '0.9rem' }}>Energistically pontificate reliable leadership skills after focused web-readiness. Distinctively revolutionize enterprise customer service after proactive convergence.</p>
                        </div>
                        <div style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                            <div style={{ height: '30px', width: '30px', marginRight: '10px' }}>
                                <img style={{ height: '100%', width: '100%' }} src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="AVATAR" />
                            </div>
                            <OutlinedInput
                                sx={{ height: '35px', outline: 'none', width: '100%' }}
                                id="outlined-adornment-amount"
                                endAdornment={<InputAdornment position="start"><Send /></InputAdornment>}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ marginRight: '25px' }}>
                    <div style={{ borderBottom: '2px solid #0a3697' }}>
                        <h5>Group 1</h5>
                    </div>
                    <div>
                        {group.students.map((p) => (
                            <PeopleCardG key={p._id} name={`${p.lastname} ${p.firstname} ${p.matricno}`} leader={leader} p={p} />
                        ))}
                    </div>
                </div>
            </div>
        ) : (<EmptyGroup />)}
        </>
    )
}

export default Groups