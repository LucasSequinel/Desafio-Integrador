async function listarProfessores() {
    try {
        const response = await fetch('http://localhost:3000/api/professores');
        const professores = await response.json();

        console.log(`
            Professores:\n
            ${professores}
        `)

        const professoresContainer = document.getElementById('professoresContainer');
        professoresContainer.innerHTML = '';

        professores.forEach(professor => {

            // Lucas: fazer o HTML da listagem dos professores.


            /*
            Relacao de dados Professores:
            {
                nome: 'Prof. Ana Costa',
                id: 1,
                descricao: 'Professora de Programação'
            }
            */
        });
    } catch (error) {
        console.error('Erro ao listar professores:', error);
    }
}

async function listarAtividades() {
    try {
        const response = await fetch('http://localhost:3000/api/atividades');
        const atividades = await response.json();

        console.log(`
            Atividades:\n
            ${atividades}
        `)

        const atividadesContainer = document.getElementById('atividadesContainer');
        atividadesContainer.innerHTML = '';

        atividades.forEach(atividade => {

            // Lucas: fazer o HTML da listagem dos alunos.


            /*
            Relacao de dados Alunos:
            {
                id: 1,
                titulo: 'Atividade 1',
                descricao: 'Descrição da atividade 1',
                data: '2024-11-13',
                tipo: 1
            }
            */
        });
    } catch (error) {
        console.error('Erro ao listar atividades:', error);
    }
}

async function listarAlunos() {
    try {
        const response = await fetch('http://localhost:3000/api/alunos');
        const alunos = await response.json();

        console.log(`
            Alunos:\n
            ${alunos}
        `)

        const alunosContainer = document.getElementById('alunosContainer');
        alunosContainer.innerHTML = '';

        alunos.forEach(aluno => {

            // Lucas: fazer o HTML da listagem dos alunos.


            /*
            Relacao de dados Alunos:
            {
            usuario: 'jose.silva',
            senha: 'senha123',
            nome: 'José Silva',
            id: 1,
            email: 'jose@email.com',
            data_nascimento: '1990-03-15',
            descricao: 'Aluno de TI'
            }
            */

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
           
        console.log(`
            Cursos:\n
            ${cursos}
        `)

        const cursosContainer = document.getElementById('cursosContainer');
        cursosContainer.innerHTML = '';

        cursos.forEach(curso => {

            // Lucas: fazer o HTML da listagem dos cursos.


            /*
            Relacao de dados Cursos:
            { 
                id: 1, 
                total_periodos: 8, 
                nome: 'Ciência da Computação'
            }
            */

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
    } else if (url.includes("atividades")) {
        listarAtividades();
    } else if (url.includes("professores")) {
        listarProfessores();
    } else {
        console.log("Nada a listar!");
    }
});
