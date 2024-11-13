async function listarAlunos() {
    try {
        const response = await fetch('http://localhost:3000/api/alunos');
        const alunos = await response.json();

        const alunosContainer = document.getElementById('alunosContainer');
        alunosContainer.innerHTML = '';

        alunos.forEach(aluno => {
            const alunoItem = document.createElement('div');
            alunoItem.className = 'aluno-item';
            alunoItem.innerHTML = `
                <strong>Nome:</strong> ${aluno.nome} <br>
                <strong>Email:</strong> ${aluno.email} <br>
                <strong>Data de Nascimento:</strong> ${aluno.data_nascimento} <br>
                <strong>Descrição:</strong> ${aluno.descricao} <br>
                <hr>
            `;
            alunosContainer.appendChild(alunoItem);
        });
    } catch (error) {
        console.error('Erro ao listar alunos:', error);
    }
}

async function listarCursos() {
    try {
        const response = await fetch('http://localhost:3000/api/cursos');
        const cursos = await response.json();
                
        const cursosContainer = document.getElementById('cursosContainer');
        cursosContainer.innerHTML = '';

        cursos.forEach(curso => {
            const cursoItem = document.createElement('div');
            cursoItem.className = 'curso-item';
            cursoItem.innerHTML = `
                <strong>Nome do Curso:</strong> ${curso.nome} <br>
                <strong>Total de Períodos:</strong> ${curso.total_periodos} <br>
                <hr>
            `;
            cursosContainer.appendChild(cursoItem);
        });
    } catch (error) {
        console.error('Erro ao listar cursos:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const url = window.location.href;
    console.log(url)

    if (url.includes("alunos")) {
        listarAlunos();
    } else if (url.includes("cursos")) {
        listarCursos();
    } else {
        console.log("Nada a listar!");
    }
});
