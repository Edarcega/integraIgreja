import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, BASE_URL_PAGES } from "../../utils/request";
import { useParams } from "react-router-dom";
import { Igreja } from "../../models/igreja";

function grupos() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [igreja, setIgreja] = useState<Igreja>();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = useParams();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get(`${BASE_URL}/igrejas/${id}`)
            .then(response => {
                setIgreja(response.data)
                console.log(response.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <section className="container" id="tabela-membros-sumarizado">
            <div className="row justify-content-center">
                <div className="container pt-3">
                    <h1 className="text-center fonte-titulo-body pt-3">Painel Grupos</h1>
                </div>
                <div className="table-responsive table-hover table-striped">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">TIPO</th>
                                <th scope="col">DESCRIÇÃO</th>
                                <th scope="col">ESTRUTURA PAI</th>
                                <th scope="col">IGREJA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {igreja?.grupos.map(x => {
                                return (
                                    <tr key={x.id}>
                                        <td>
                                            <a href={`${BASE_URL_PAGES}/#/grupo/${x.id}`}>{x.id}</a>
                                        </td>
                                        <td>{x.tipoGrupo}</td>
                                        <td>{x.nome}</td>
                                        <td>{x.ministerio?.nome}</td>
                                        <td>{x.igreja.nome}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default grupos