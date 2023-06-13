import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { IgrejaDto } from "../../models/igrejasdto";


function Igasum() {

    /* useEffect (() => {}, []) */
    /*     useEffect (() => {
            console.log("Teste");
        }, []); */

    const [igrejasDto, setIgrejasDto] = useState<IgrejaDto[]>([]);


    useEffect(() => {
        axios.get(`${BASE_URL}/igrejas/igrejasdto`)
            .then(response => {
                setIgrejasDto(response.data)
            })
    }, []);


    function meuEvento(_idIgreja: any){
        console.log(_idIgreja)
    }



    return (
        <section className="container" id="tabela-igrejas-sumarizado">
            <div className="row justify-content-center">
                <div className="container pt-3">
                    <h1 className="text-center fonte-titulo-body pt-3">Painel cadastro de igrejas</h1>
                </div>
                <div className="table-responsive table-hover table-striped">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome da Igreja</th>
                            </tr>
                        </thead>
                        <tbody>
                            {igrejasDto.map(x => {
                                return (
                                    <tr key={x.id}>
                                        {/* <a href="http://localhost:5173/#/paineladmigreja"><td scope="row">{x.id}</td></a> */}
                                        {/* <td scope="row" id={`${x.id}`}><a href="#" className="teste" >{x.id}</a></td> */}
                                        <td scope="row"><a href="#" className="teste" onClick={meuEvento}>{x.id}</a></td>
                                        <td>{x.nome}</td>
                                    </tr>
                                )
                            })}
                            {/* <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                            </tr> */}


                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )

}

export default Igasum