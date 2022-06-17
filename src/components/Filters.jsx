import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from "../styles/Filters.module.css"
import { useDispatch, useSelector } from "react-redux";
import { setCountryData, setFromDate, setFromIndex, setToDate, setToIndex } from '../store/action';


export default function Filters() {

    const dispatch = useDispatch()
    const { countryData, fromDateIndex, toDateIndex, fromDate, toDate } = useSelector(store => store)

    const [country, setCountry] = useState("")
    
    // Fetching Data...

    const handleEnterKeyPress = (e) => {
        let countryLowerCase = country.toLowerCase()
        if(e.key === "Enter") {
            fetch(`https://api.covid19api.com/country/${countryLowerCase}`)
            .then(res => res.json())
            .then(data => dispatch(setCountryData(data)))
            setCountry("")
        }
    }

    // Setting current date to toDate

    useEffect(() => {
        if ( countryData && !countryData.message ) {
    
            let fullDate = new Date()
    
            let cDate = fullDate.getDate() - 2
            if ( cDate < 10 ) {
                cDate = `0${cDate}`
            }
    
            let cMonth = fullDate.getMonth() + 1
            if ( cMonth < 10 ) {
                cMonth = `0${cMonth}`
            }
    
            let cYear = fullDate.getFullYear()
            dispatch(setToDate(`${cYear}-${cMonth}-${cDate}`))
        }
    }, [countryData])

    // Setting toDate and fromDate index...

    useEffect(() => {
        if ( countryData && !countryData.message ) {
            let toDateIndexFound = countryData.findIndex(item => item.Date.slice(0, 10) === toDate)
            let fromDateIndexFound = toDateIndexFound - 9
            
            dispatch(setToIndex(toDateIndexFound))
            dispatch(setFromIndex(fromDateIndexFound))
        }
    }, [countryData, toDate])
    
    // Setting date to fromDate...

    useEffect(() => {
        if ( countryData && !countryData.message && fromDateIndex > 0 ) {
            let fromDateFound = countryData[fromDateIndex].Date.slice(0, 10)
            dispatch(setFromDate(fromDateFound))
            console.log(fromDateFound, fromDateIndex)
        }
    }, [toDateIndex])


  return (
    <div className={styles.filters} >
        <div>
            <p>Country</p>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} onKeyDown={handleEnterKeyPress} placeholder="search country" />
        </div>
        <div>
            <p>From</p>
        <input type="date" value={fromDate} readOnly />
        </div>
        <div>
            <p>To</p>
        <input type="date" value={toDate} onChange={(e)=> dispatch(setToDate(e.target.value))} />
        </div>
    </div>
  )
}
