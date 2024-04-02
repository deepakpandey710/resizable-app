import React, { useState } from "react"
import '../App.css';
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../store/index";

export default function Add() {
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();

    const add = async () => {
        try {
            dispatch(addUser({ email, number }));
        } catch (err) {
            console.error('err');
        }
    }
    const update = async () => {
        try {
            dispatch(updateUser({ email, number }));
        } catch (err) {
            console.error('err');
        }
    }
    return (
        <div>
            <div className="add-component">
                <input className="input-box" type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                <input className="input-box" type="Number" placeholder="Enter Number" onChange={(e) => setNumber(e.target.value)} />
            </div>
            <button className="button" onClick={add}>Add</button>
            <button className="button" onClick={update}>Update</button>
        </div>
    )
};

