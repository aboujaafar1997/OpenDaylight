import React from 'react'
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Host() {
    let history = useHistory();
    const location = useLocation();
    const { nodeId, data } = location.state;
    console.log(data);
    let trs = data?.map(data => {
        return (
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data['address-tracker:addresses'] ? data['address-tracker:addresses'][0]['mac'] : "N/a"}</td>
                <td>{data['address-tracker:addresses'] ? data['address-tracker:addresses'][0].ip : "N/a"}</td>
                <td>{data['flow-node-inventory:name']}</td>
                <td>{data['flow-node-inventory:port-number']}</td>
                <td>{data['flow-node-inventory:state'].blocked ? "oui" : "non"}</td>
                <td>{data['flow-node-inventory:state'].live ? "oui" : "non"}</td>
                <td><button className=" btn btn-warning" onClick={() => {
                    history.push({
                        pathname: '/statistique',
                        search: '?',
                        state: { staistique: data['opendaylight-port-statistics:flow-capable-node-connector-statistics'] }
                    });
                }}>Affiché</button></td>
            </tr>
        );
    });

    return (
        <div className="container">
            <h2 style={{ textAlign: "center", margin: "20px" }}>Information des hosts connecté pour la node <strong>{nodeId}</strong></h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Mac</th>
                        <th scope="col">IP</th>
                        <th scope="col">Port</th>
                        <th scope="col">Nbr de port</th>
                        <th scope="col">Blocked</th>
                        <th scope="col">Live</th>
                        <th scope="col">Statistique</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </div>
    )
}
