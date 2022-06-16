import React from 'react'
import { useEffect } from 'react';
import { useSelector } from "react-redux";

export default function Chart() {

    const { countryData } = useSelector(store => store)

    useEffect(() => {
        if ( countryData && !countryData.message ) {
            let dates = countryData.map((data) => data.Date.slice(0, 10))
            console.log("Hi", dates)
        }
    }, [countryData])

    console.log("hello", countryData)

  return (
    <>
        {countryData === null ? 
        (<div>
            <h1>Search Country</h1>
        </div>) 
        :
         countryData.message === "Not Found" ? 
        (<div>
            <h1>Country Not Found</h1>
        </div>) 
        : 
        (<div>
            <h3>Data Found</h3>
        </div>)}
    </>
  )
}
