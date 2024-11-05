import React, { useState } from 'react' //Gerenciamento de status

function Contato() {
    const [contatos, setContatos] = useState([])
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')

    const adicionarContato = () => {
        if (nome && telefone) {
            setContatos([...contatos, { nome, telefone }])
            setNome('')
            setTelefone('')
        }
    }

    return (
        <div className='pai'>
            <div className='filho'>
        
                <h2>Lista de Contato</h2>
                
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder='Nome'
                    />
                    <input
                        type="text"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        placeholder='Telefone'
                    />
                    <button onClick={adicionarContato}>Adicionar Contato</button>
                
                <ul>
                    {contatos.map((contato, index) => (
                        <li key={index}>
                            <strong>{contato.nome}:</strong> {contato.telefone}
                        </li>
                    ))}
                </ul> 
                
           </div>
        </div> 
    )
}

export default Contato