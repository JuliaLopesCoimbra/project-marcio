import { useEffect, useState } from 'react';
import ListaTarefas from './Tarefas';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [user, setUser] = useState(null);
    const [showTasks, setShowTasks] = useState(false);

    useEffect(() => {
        const savedName = localStorage.getItem('nome');
        if (savedName) {
            setNome(savedName);
        }
    }, []);

    function handleRegistro(e) {
        e.preventDefault();
        if (nome) {
            localStorage.setItem('nome', nome); // Salva o nome no localStorage
        }
        setUser({
            nome: nome,
            idade: idade,
            email: email,
        });

        // Limpar os campos após o registro
        setEmail('');
        setIdade('');

        // Mudar para mostrar ListaTarefas
        setShowTasks(true);
    }

    if (showTasks) {
        return <ListaTarefas nome={nome} />;
    }

    const formStyle = {
        padding: '20px',
        background: '#f3f3f3',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '20px auto'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box' // Garante que padding não adicione largura ao elemento
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px 20px',
        background: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
    };

    return (
        <div style={formStyle}>
             <h1 style={{ textAlign: 'center' }}>Entre com os Dados para acessar a lista de Tarefas</h1>
            <form onSubmit={handleRegistro}>
                <label>Nome: </label><br />
                <input 
                    type="text"
                    placeholder="Digite seu Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    style={inputStyle}
                /><br />
                
                <label>Email: </label><br />
                <input 
                    type="email"
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                /><br />
                
                <label>Idade: </label><br />
                <input 
                    type="number"
                    placeholder="Digite sua Idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    style={inputStyle}
                /><br />
                
                <button type="submit" style={buttonStyle}>Registrar</button>
            </form>
        </div>
    );
}

export default Cadastro;
