import React from 'react'
import { Bar } from 'react-chartjs-2';
import { useLocation } from "react-router-dom";

export default function Statistique() {
    const location = useLocation();
    let { staistique } = location.state
    let color = 'red,green';
    let color2 = 'yellow,blue'
    console.log(staistique);

    const state = {
        labels: ['Bytes receiver', 'Bytes transmitted'],
        datasets: [
            {
                label: ['Bytes receiver'],
                backgroundColor: color.split(','),
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [staistique.bytes.received, staistique.bytes.transmitted]
            },

        ]
    }
    const state2 = {
        labels: ['packets receiver', 'packets transmitted'],
        datasets: [
            {
                label: ['packets receiver'],
                backgroundColor: color2.split(','),
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [staistique.packets.received, staistique.packets.transmitted]
            },

        ]
    }
    return (
        <div className="container">
            <div className="row">
                <div className='col-6'>
                    <Bar
                        data={state}
                        options={{
                            title: {
                                display: true,
                                text: 'Statistique des bytes node',
                                fontSize: 20
                            },
                        }}
                    />
                </div>
                <div className="col-6">
                    <Bar
                        data={state2}
                        options={{
                            title: {
                                display: true,
                                text: 'Statistique des packets node',
                                fontSize: 20
                            },
                        }}
                    />
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12">
                    <table className="table table-hover">
                        <tr><td>Collision-count</td><td>{staistique['collision-count']}</td></tr>
                        <tr><td>Transmit-errors</td><td>{staistique['transmit-errors']}</td></tr>
                        <tr><td>Transmit-drops</td><td>{staistique['transmit-drops']}</td></tr>
                        <tr><td>Receive-crc-error</td><td>{staistique['receive-crc-error']}</td></tr>

                    </table>
                </div>
            </div>
        </div>
    )
}
