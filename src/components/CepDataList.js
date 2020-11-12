export default function CepDataList(props) {
    const { cep, state, city, neighborhood, street } = props;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>CEP</th>
                    <th>Estado</th>
                    <th>Cidade</th>
                    <th>Bairro</th>
                    <th>Rua</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{cep || "Não definido"}</td>
                    <td>{state || "Não definido"}</td>
                    <td>{city || "Não definido"}</td>
                    <td>{neighborhood || "Não definido"}</td>
                    <td>{street || "Não definido"}</td>
                </tr>
            </tbody>

        </table>
    )
}

