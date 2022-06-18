import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Table.module.css"

export default function Table() {

  const { countryDataToShow } = useSelector(store => store)

  return (
    <>
      {
      countryDataToShow &&
      <div className={styles.table}>
        <table>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
          {
            countryDataToShow.map(data => (
              <tr key={data.Date}>
                <td>{data.Date.slice(0, 10)}</td>
                <td>{data.Confirmed}</td>
                <td>{data.Active}</td>
                <td>{data.Recovered}</td>
                <td>{data.Deaths}</td>
              </tr>
            ))
          }
        </table>
    </div>
    }
    </>
  );
}
