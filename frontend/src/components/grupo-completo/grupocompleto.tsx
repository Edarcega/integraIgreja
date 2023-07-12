import axios from "axios";
import Grupoicon from '../../assets/img/grupo_icon.png'
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { Grupo } from "../../models/grupo";
import { useParams } from "react-router-dom";
import { BASE_URL_PAGES } from "../../utils/request";


function GrupoCompleto() {

    const { id } = useParams();

    const [grupo, setGrupo] = useState<Grupo>();

    useEffect(() => {
        axios.get(`${BASE_URL}/grupos/${id}`)
            .then(response => {
                setGrupo(response.data)
                console.log(response.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <section className="container" id="painel-grupo-completo">
                <p>
                    {/* ARRUMAR ISSO AQUI, NAO PODE FICAR ASSIM*/}
                </p>
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h5>Dados do Grupo</h5>
                        </div>
                        <div className="card-body">
                            <img src={Grupoicon} alt="..." className="img-thumbnail card-img-minhas-info" />
                            <h5 className="card-title pt-2">{grupo?.nome}</h5>

                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="geral-tab" data-toggle="tab" href="#geral"
                                        role="tab" aria-controls="geral" aria-selected="true">Geral
                                    </a>
                                    <a className="nav-item nav-link" id="nav-integrantes-tab" data-toggle="tab" href="#nav-integrantes"
                                        role="tab" aria-controls="nav-integrantes" aria-selected="false">Integrantes
                                    </a>
                                    <a className="nav-item nav-link" id="nav-fun-grup-tab" data-toggle="tab" href="#nav-fun-grup"
                                        role="tab" aria-controls="nav-fun-grup" aria-selected="false">Funções do grupo
                                    </a>
                                </div>
                            </nav>


                            <div className="tab-content" id="nav-tabContent">

                                {/* DADOS GERAIS*/}

                                <div className="tab-pane fade show active" id="geral" role="tabpanel" aria-labelledby="geral-tab">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <h5>Id</h5>
                                            <p>{grupo?.id}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Nome</h5>
                                            <p>{grupo?.nome}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Igreja</h5>
                                            <p>{grupo?.igreja.nome}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Tipo do grupo</h5>
                                            <p>{grupo?.tipoGrupo}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Estrutura pai</h5>
                                            <p>{grupo?.ministerio?.nome}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5 className="text-primary">Líder</h5>
                                            <p>{grupo?.lider?.nome}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5 className="text-warning">Vice Líder</h5>
                                            <p>{grupo?.viceLider?.nome}</p>
                                        </li>
                                    </ul>
                                </div>

                                {/* INTEGRANTES */}

                                <div className="tab-pane fade" id="nav-integrantes" role="tabpanel" aria-labelledby="nav-integrantes-tab">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">

                                        </li>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Nome Completo</th>
                                                    <th scope="col">Tipo Membro</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {grupo?.participantes.map(x => {
                                                    return (
                                                        <tr key={x.id}>
                                                            <td>
                                                                <a href={`${BASE_URL_PAGES}/#/paineladmigreja/${x.id}`}>{x.id}</a>
                                                                {/* <a href={`${BASE_URL_PAGES}/paineladmigreja/${x.id}`}>{x.id}</a> */}
                                                            </td>
                                                            <td>{x.nome}</td>
                                                            <td>{x.tipoMembro}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>

                                    </ul>

                                </div>

                                {/* funções */}

                                <div className="tab-pane fade" id="nav-fun-grup" role="tabpanel" aria-labelledby="nav-fun-grup-tab">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Descrição</th>
                                                <th scope="col">Tipo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {grupo?.funcoes.map(x => {
                                                return (
                                                    <tr key={x.id}>
                                                        <td>{x.id}</td>
                                                        <td>{x.descricao}</td>
                                                        <td>{x.tipoFuncao}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GrupoCompleto