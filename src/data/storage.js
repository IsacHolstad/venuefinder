import React from 'react';
import {useState} from "react";

const tokenKey = "token";
const userKey = "user";

function saveToken(token) {
    console.log("token", token);
    console.log("tokenKey:", tokenKey);
    console.log("userKey:", userKey)
    saveToStorage(tokenKey,token)
}

function getToken() {
    const value = localStorage.getItem(tokenKey);
    if (value) {
        return JSON.parse(value);
    }else {
        return null
    }
}
function saveUser(user){
    saveToStorage(userKey, user);
}

function getUserName() {
    const user = getFromStorage(userKey);
}

