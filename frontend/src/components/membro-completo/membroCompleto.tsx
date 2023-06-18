import axios from "axios";
import Membroicon from '../../assets/img/membro_icon.png'
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { Membro } from "../../models/membro";
import { useParams } from "react-router-dom";
import { BASE_URL_PAGES } from "../../utils/request";


function Mombrocompleto() {

    const { id } = useParams();

    const [membro, setMembro] = useState<Membro>();

    useEffect(() => {
        axios.get(`${BASE_URL}/membros/${id}`)
            .then(response => {
                setMembro(response.data)
                console.log(response.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            <section className="container" id="painel-membro-completo">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <h5>Dados do Membro</h5>
                        </div>
                        <div className="card-body">
                            <img src={Membroicon} alt="..." className="img-thumbnail card-img-minhas-info" />
                            <h5 className="card-title pt-2">{membro?.nome}</h5>

                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="geral-tab" data-toggle="tab" href="#geral"
                                        role="tab" aria-controls="geral" aria-selected="true">Geral</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                                        role="tab" aria-controls="nav-profile" aria-selected="false">Endereço</a>
                                    <a className="nav-item nav-link" id="nav-filhos-tab" data-toggle="tab" href="#nav-filhos"
                                        role="tab" aria-controls="nav-filhos" aria-selected="false">Filhos</a>
                                    <a className="nav-item nav-link" id="nav-grupo-tab" data-toggle="tab" href="#nav-grupo"
                                        role="tab" aria-controls="nav-grupo" aria-selected="false">Grupo</a>
                                    <a className="nav-item nav-link" id="nav-classe-tab" data-toggle="tab" href="#nav-grupo"
                                        role="tab" aria-controls="nav-grupo" aria-selected="false">Classe</a>
                                    <a className="nav-item nav-link" id="nav-func-tab" data-toggle="tab" href="#nav-func"
                                        role="tab" aria-controls="nav-func" aria-selected="false">Funções</a>
                                    <a className="nav-item nav-link" id="nav-iga-tab" data-toggle="tab" href="#nav-iga"
                                        role="tab" aria-controls="nav-iga" aria-selected="false">Igreja</a>
                                </div>
                            </nav>



                            <div className="tab-content" id="nav-tabContent">
                                {/* DADOS GERAIS*/}

                                <div className="tab-pane fade show active" id="geral" role="tabpanel" aria-labelledby="geral-tab">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <h5>Id</h5>
                                            <p>{membro?.id}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Nome Completo</h5>
                                            <p>{membro?.nome}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>CPF</h5>
                                            <p>{membro?.cpf}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Identidade</h5>
                                            <p>{membro?.identidade}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Sexo</h5>
                                            <p>{membro?.sexo}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Data de Nascimento</h5>
                                            <p>{membro?.dataDeNascimento}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Data da Inscrição </h5>
                                            <p>{membro?.dataDaInscricao}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Batizado?</h5>
                                            <p>{membro?.batizado}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Nascionalidade </h5>
                                            <p>{membro?.nascionalidade}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Nome do Pai</h5>
                                            <p>{membro?.nomeDoPai}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Nome da Mãe</h5>
                                            <p>{membro?.nomeDaMae}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Profissão</h5>
                                            <p>{membro?.profissao}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Estado Civil </h5>
                                            <p>{membro?.estadoCivil}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Possui Filhos? (Menores) </h5>
                                            <p>{membro?.possuiFilhos}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>PNE</h5>
                                            <p>{membro?.portadorDeNecessidadesEspeciais}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Qual?</h5>
                                            <p>{membro?.detalhamentoPne}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Nome do Conjuge </h5>
                                            <p>{membro?.conjuge}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Data do Casamento </h5>
                                            <p>{membro?.dataDoCasamento}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Tipo </h5>
                                            <p>{membro?.tipoMembro}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Data Cadastro </h5>
                                            <p>{membro?.dataCadastro}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Data de Filiação </h5>
                                            <p>{membro?.dataDaInscricao}</p>
                                        </li>
                                    </ul>
                                </div>

                                {/* ENDERECO */}

                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <h5>Logradouro</h5>
                                            <p>{membro?.endereco.logradouro}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Numero </h5>
                                            <p>{membro?.numero}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Complemento</h5>
                                            <p>{membro?.complemento}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>CEP</h5>
                                            <p>{membro?.endereco.cep}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>Localidade</h5>
                                            <p>{membro?.endereco.localidade} / {membro?.endereco.uf}</p>
                                        </li>
                                    </ul>

                                </div>

                                {/* FILHOS */}

                                <div className="tab-pane fade" id="nav-filhos" role="tabpanel" aria-labelledby="nav-filhos-tab">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Nome Completo</th>
                                                <th scope="col">Pai</th>
                                                <th scope="col">Mãe</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {membro?.filhos.map(x => {
                                                return (
                                                    <tr key={x.id}>
                                                        <td>
                                                            <a href={`${BASE_URL_PAGES}/#/paineladmigreja/${x.id}`}>{x.id}</a>
                                                            {/* <a href={`${BASE_URL_PAGES}/paineladmigreja/${x.id}`}>{x.id}</a> */}
                                                        </td>
                                                        <td>{x.nome}</td>
                                                        <td>{x.pai.nome}</td>
                                                        <td>{x.mae.nome}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                {/* GRUPO */}

                                <div className="tab-pane fade" id="nav-grupo" role="tabpanel" aria-labelledby="nav-grupo-tab">
                                    Grupo
                                </div>

                                {/* CLASSE */}

                                <div className="tab-pane fade" id="nav-classe" role="tabpanel" aria-labelledby="nav-classe-tab">
                                    Classe
                                </div>

                                {/* funções */}

                                <div className="tab-pane fade" id="nav-func" role="tabpanel" aria-labelledby="nav-func-tab">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Função</th>
                                                <th scope="col">Tipo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {membro?.funcoes.map(x => {
                                                return (
                                                    <tr key={x.id}>
                                                        <td>
                                                            <a href={`${BASE_URL_PAGES}/#/paineladmigreja/${x.id}`}>{x.descricao}</a>
                                                            {/* <a href={`${BASE_URL_PAGES}/paineladmigreja/${x.id}`}>{x.id}</a> */}
                                                        </td>
                                                        <td>{x.tipoFuncao}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                                {/* funções */}

                                <div className="tab-pane fade" id="nav-iga" role="tabpanel" aria-labelledby="nav-iga-tab">
                                    <li className="list-group-item">
                                        <h5>Igreja Anterior </h5>
                                        <p>{membro?.igrejaAnterior}</p>
                                    </li>
                                    <li className="list-group-item">
                                        <h5>Igreja </h5>
                                        <p>{membro?.igreja.nome}</p>
                                    </li>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mombrocompleto