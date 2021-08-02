import React from 'react'
import { useState, useEffect } from 'react';
import { ENDPOINT } from '../StaticData';
import { useHistory } from "react-router-dom";
export default function Home() {
    const [dataOdl, setdataOdl] = useState([]);
    let history = useHistory();
    useEffect(() => {
        (async function () {
            let options = { method: "GET", headers: { "charset": "utf-8", 'Content-Type': 'application/json', 'Authorization': 'Basic YWRtaW46YWRtaW4=' } };
            let response = await fetch(ENDPOINT, options);
            let resultat = await response.json();
            console.log(resultat.nodes.node[2]);
            setdataOdl(resultat.nodes.node);
        })();
    }, []);


    let trs = dataOdl?.map(data => {
        return (
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data['node-connector'].length}</td>
                <td>{data['flow-node-inventory:software']}</td>
                <td>{data['flow-node-inventory:hardware']}</td>
                <td>{data['flow-node-inventory:ip-address']}</td>
                <td>{data['node-connector'][0]['flow-node-inventory:hardware-address']}</td>
                <td>{data['flow-node-inventory:manufacturer']}</td>
                <td>{data['flow-node-inventory:description']}</td>
                <td>{data['flow-node-inventory:port-number']}</td>
                <td><button className="btn btn-success ">Plus</button></td>
                <td><button className=" btn btn-warning" onClick={() => {
                    history.push({
                        pathname: '/hosts',
                        search: '?',
                        state: { nodeId: data.id, data: data['node-connector'] }
                    });
                }}>Affiché</button></td>
            </tr>
        );
    });


    return (
        <div className="container">
            <h2 style={{ textAlign: "center", margin: "25px" }}>Les switches</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Nbr des node conécté</th>
                        <th scope="col">version de software</th>
                        <th scope="col">Hardware</th>
                        <th scope="col">IP</th>
                        <th scope="col">Mac</th>
                        <th scope="col">Constructeur</th>
                        <th scope="col">Discription</th>
                        <th scope="col">Nembre de ports</th>
                        <th scope="col">Afficher plus</th>
                        <th scope="col">Afficher les node connécté</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </div>
    )
}
