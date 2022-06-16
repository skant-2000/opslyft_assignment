import React from 'react'
import { useState } from 'react'
import styles from "../styles/Filters.module.css"
import { useDispatch } from "react-redux";
import { setCountryData } from '../store/action';


export default function Filters() {

    const dispatch = useDispatch()

    const [country, setCountry] = useState("")

    const handleEnterKeyPress = (e) => {
        let countryLowerCase = country.toLowerCase()
        if(e.key === "Enter") {
            fetch(`https://api.covid19api.com/country/${countryLowerCase}`)
            .then(res => res.json())
            .then(data => dispatch(setCountryData(data)))
        }
    }

  return (
    <div className={styles.filters} >
        <div>
            <p>Country</p>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} onKeyDown={handleEnterKeyPress} placeholder="search country" />
        </div>
        <div>
            <p>From</p>
            {/* <select name="" id="">
            <option value=""></option>
        </select> */}
        <input type="date" onChange={(e)=> console.log(e.target.value)} />
        </div>
        <div>
            <p>To</p>
            {/* <select name="" id="">
            <option value=""></option>
        </select> */}
        <input type="date" onChange={(e)=> console.log(e.target.value)} />
        </div>
    </div>
  )
}
