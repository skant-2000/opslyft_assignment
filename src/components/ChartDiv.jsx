import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setCountryDataToShow } from '../store/action';
import { Chart } from "react-google-charts"
import styles from "../styles/ChartDiv.module.css"

export default function ChartDiv() {

    const dispatch = useDispatch()

    const { countryData, fromDateIndex, toDateIndex, countryDataToShow } = useSelector(store => store)

    // Setting country data to show in the chart and table...

    useEffect(() => {
        if ( countryData && !countryData.message && fromDateIndex > 0 && toDateIndex > 0 ) {
            let data = []
            for ( let i = fromDateIndex; i <= toDateIndex; i++) {
                data.push(countryData[i])
            }
            dispatch(setCountryDataToShow(data))
        }
        else if (  fromDateIndex < 0 && toDateIndex < 0 ) {
            dispatch(setCountryDataToShow(null))
        }
    }, [countryData, toDateIndex])

    // Setting chart data...

    let data = useRef([])

    if ( countryDataToShow ) {
        data.current = []
        data.current.push(["Dates", "Confirmed", "Active", "Recovered", "Deaths"])
        for ( let i = 0; i <= countryDataToShow.length-1; i++ ) {
            let arr = []
            arr.push(countryDataToShow[i].Date.slice(0, 10))
            arr.push(countryDataToShow[i].Confirmed)
            arr.push(countryDataToShow[i].Active)
            arr.push(countryDataToShow[i].Recovered)
            arr.push(countryDataToShow[i].Deaths)
            data.current.push(arr)
            console.log("in")
        }
    }

    console.log("LKJH")

  return (
    <>
        {countryDataToShow === null ? 
        (<div>
            <h1>search country or set date before today</h1>
        </div>) 
        :
        countryDataToShow === [] ? 
        (<div>
            <h1>Country Not Found</h1>
        </div>) 
        : 
        (<div className={styles.chart}>
            <h3>{countryData[0].Country}</h3>
            {
                data.current !== [] && 
                <Chart
                    chartType="Bar"
                    data={data.current}
                    width="100%"
                    height="300px"
                    margin="auto"
                />
            }
        </div>
        )}
    </>
  )
}
