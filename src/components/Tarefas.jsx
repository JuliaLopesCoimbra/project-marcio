import React, { useState, useEffect } from 'react';

function ListaTarefas() {
    const [tarefas, setTarefas] = useState([
        { id: 1, texto: 'Pagar Conta' },
        { id: 2, texto: 'Estudar Math' },
        { id: 3, texto: 'Enviar tarefa do Marcio' }
    ]);
    const [backgroundColor, setBackgroundColor] = useState('white'); // Estado para a cor de fundo
    const [novaTarefa, setNovaTarefa] = useState('');

    // Carrega o nome do localStorage
    const [nome, setNome] = useState('');
    useEffect(() => {
        const nomeSalvo = localStorage.getItem('nome');
        setNome(nomeSalvo);
    }, []);

    const handleAddTarefa = (e) => {
        e.preventDefault();
        if (!novaTarefa) return; // Não adiciona tarefas vazias
        const tarefaId = tarefas.length + 1;
        const novaTarefaObj = { id: tarefaId, texto: novaTarefa };
        setTarefas([...tarefas, novaTarefaObj]);
        setNovaTarefa(''); // Limpa o campo após adicionar
    };

    // Estilos inline para simplificação
    const styles = {
        container: {
            backgroundColor: backgroundColor,
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px',
            margin: '20px auto',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
        },
        button: {
            padding: '10px 20px',
            margin: '5px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            fontWeight: 'bold'
        },
        input: {
            padding: '10px',
            marginBottom: '10px',
            border: '2px solid #ccc',
            borderRadius: '4px',
            width: 'calc(100% - 22px)' // adjusts for padding and border
        },
        form: {
            marginBottom: '20px'
        }
    };

    // Dynamic styles for buttons
    const getColorButtonStyle = (color) => ({
        ...styles.button,
        backgroundColor: color,
        borderColor: color === backgroundColor ? 'yellow' : color // Highlight if selected
    });

    return (
        <div style={styles.container}>
            <h1>Lista de Tarefas de {nome}</h1>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa.id}>{tarefa.texto}</li>
                ))}
            </ul>
            <form onSubmit={handleAddTarefa} style={styles.form}>
                <input
                    type="text"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    placeholder="Adicionar nova tarefa"
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Adicionar Tarefa</button>
            </form>
            <div>
                <button style={getColorButtonStyle('black')} onClick={() => setBackgroundColor('black')}>Preto</button>
                <button style={getColorButtonStyle('purple')} onClick={() => setBackgroundColor('purple')}>Roxo</button>
                <button style={getColorButtonStyle('pink')} onClick={() => setBackgroundColor('pink')}>Rosa</button>
            </div>
        </div>
    );
}

export default ListaTarefas;
