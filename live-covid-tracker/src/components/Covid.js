import React, { useState, useEffect } from 'react'
import './Covid.css'


const Covid = () => {
    const[data, setData] = useState([]);

     const getCovidData = async() => {
        try {
            const response = await fetch('https://data.covid19india.org/data.json');
            const ActualData = await response.json();
            console.log(ActualData.statewise[0]);
            setData(ActualData.statewise[0])
        }catch(Error){
            console.log(Error)
        }
     };

    useEffect(() => {
       getCovidData();
    }, []);

  return (
    <>
        <section>
            <h1 className='head'>Live</h1>
            <h2 className='head'>COVID-19 CORONAVIRUS TRACKER</h2>
            <ul>
                <div className="row">
                    <div className="col-md-4">
                        <li className='card '>
                            <div className="cardMain">
                                <div className="cardInner">
                                    <p className="cardName">
                                        <span>OUR</span>
                                        COUNTRY
                                    </p>
                                    <p className="cardTotal cardSmall">
                                        INDIA
                                    </p>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="col-md-4">
                        <li className='card'>
                            <div className="cardMain">
                                <div className="cardInner">
                                    <p className="cardName">
                                        <span>TOTAL</span>
                                        RECOVERED
                                    </p>
                                    <p className="cardTotal cardSmall">
                                        {data.recovered}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="col-md-4">
                        <li className='card'>
                            <div className="cardMain">
                                <div className="cardInner">
                                    <p className="cardName">
                                        <span>TOTAL</span>
                                        CONFIRMED
                                    </p>
                                    <p className="cardTotal cardSmall">
                                        {data.confirmed}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="col-md-4">
                        <li className='card'>
                            <div className="cardMain">
                                <div className="cardInner">
                                    <p className="cardName">
                                        <span>TOTAL</span>
                                        DEATH
                                    </p>
                                    <p className="cardTotal cardSmall">
                                        {data.deaths}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="col-md-4">
                        <li className='card'>
                            <div className="cardMain">
                                <div className="cardInner">
                                    <p className="cardName">
                                        <span>TOTAL</span>
                                        ACTIVE
                                    </p>
                                    <p className="cardTotal cardSmall">
                                        {data.active}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="col-md-4">
                        <li className='card'>
                            <div className="cardMain">
                                <div className="cardInner">
                                    <p className="cardName"> <span> LAST </span> UPDATED </p>
                                    <p className="cardTotal cardSmall">
                                        {data.lastupdatedtime}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </ul>
        </section>
    </>
  )
}

export default Covid
