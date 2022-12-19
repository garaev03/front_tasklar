import React from 'react'
import {datas} from './data'

var data=datas

function titleDiv(data){
    let div = document.createElement("div")
    return (
        <div>{data}</div>
    )
}

function cards(name){   
        return(
            <div className="card">
            <img className="card-img-top" src="..." alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">age</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
)} 
var name=data[0].Name

var names=titleDiv(name)
console.log(names);
cards(names)

export default cards