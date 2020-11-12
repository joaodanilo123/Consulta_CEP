import { useState } from 'react';
import CepDataList from './CepDataList'


export default function HomePage() {

    const [input, setInput] = useState('');
    const [cepData, setCepData] = useState({})

    const loadCepData = async (e) => {
        const cep = input;
        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        if (response.status == 200) {
            const data = await response.json();
            setCepData(data)
        }
    }

    const handleInputChange = e => {
        const value = e.target.value;
        setInput(value);
    }

    let table;

    if (cepData != {}) {
        table = CepDataList(cepData)
    } else {
        table = ''
    }

    return (
        <article className="container">
            <header className="level">
                <div className="level-right">
                    <h4 className="level-item"><a className="button">GitHub</a></h4>
                </div>
                <h1 className="title level-item m-5">Consultar CEP</h1>
                <div className="level-left">
                    <h4 className="level-item"><a className="button" href="https://brasilapi.com.br/">BrasilAPI</a></h4>
                </div>
            </header>
            <section className="section">
                <fieldset className="container">
                    <div className="field is-grouped is-grouped-centered">
                        <div className="control">
                            <input
                                className="input"
                                name="cep"
                                type="text"
                                placeholder="Digite um CEP"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={loadCepData}>
                                Buscar
                            </button>
                        </div>
                    </div>
                </fieldset>
            </section>
            <section className="section level">
                <div className="level-item">{table}</div>
            </section>
        </article>
    )
}