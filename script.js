const urlPage = window.location.href;

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
            const listItem = document.createElement('div');
            listItem.className = 'list-item';
            listItem.innerHTML = ` 
                ${professor.nome},
             ${professor.descricao} 
             <button>remover</button>
             <button>editar</button>
            `;
            professoresContainer.appendChild(listItem);
        
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
            const listItem = document.createElement('div');
            listItem.className = 'list-item';
            listItem.innerHTML = `
                ${atividade.titulo},
                ${atividade.descricao} 
                <button>remover</button>
                <button>editar</button>
            `;
            atividadesContainer.appendChild(listItem);
        
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

            const listItem = document.createElement('div');
            listItem.className = 'list-item';
            listItem.innerHTML = `
                Nome: ${aluno.nome} //
                Email: ${aluno.email} //
                Nasc: ${aluno.data_nascimento} //
                 ${aluno.descricao}
                 <button>remover</button>
                <button>editar</button> 

               
            `;
            alunosContainer.appendChild(listItem);
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

            const listItem = document.createElement('div');
            listItem.className = 'list-item';
            listItem.innerHTML = `
                Nome:${curso.nome} //
                Períodos:${curso.total_periodos} 
                <button>remover</button>
                <button>editar</button>
            `;
            cursosContainer.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erro ao listar cursos:', error);
    }
}

///////////////////////

function updateForm() {
    var selection = document.getElementById("selection").value;
    var formFields = document.getElementById("formFields");

    formFields.innerHTML = "";

    if (selection === "Curso") {
        formFields.innerHTML = `
            <label for="courseName">Nome do Curso:</label>
            <input type="text" id="courseName" name="courseName" required>
            
            <label for="courseDuration">Duração do Curso:</label>
            <input type="text" id="courseDuration" name="courseDuration" required>
        `;
    } else if (selection === "Professor") {
        formFields.innerHTML = `
            <label for="teacherName">Nome do Professor:</label>
            <input type="text" id="teacherName" name="teacherName" required>
            
            <label for="teacherDesc">Descrição do Professor:</label>
            <input type="text" id="teacherDesc" name="teacherDesc" required>
        `;
    } else if (selection === "Atividade") {
        formFields.innerHTML = `
            <label for="activityTitle">Título:</label>
            <input type="text" id="activityTitle" name="activityTitle" required>
            
            <label for="activityDesc">Descrição da Atividade:</label>
            <input type="text" id="activityDesc" name="activityDesc" required>

            <label for="activityType">Tipo de Atividade:</label>
            <input type="number" id="activityType" name="activityType" required>
        `;
    }
}

if (urlPage.includes("form"))
    document.getElementById("dynamicForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio do formulário padrão

        var inputs = document.querySelectorAll("#formFields input");
        var allFilled = true;

        inputs.forEach(function(input) {
            if (!input.value) {
                allFilled = false;
            }
        });

        if (!allFilled) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        var formData = new FormData(this);
        var object = {};
        formData.forEach((value, key) => object[key] = value);
        object.tipo = document.getElementById("selection").value;
        var json = JSON.stringify(object);

        if (json.length > 2) {
            console.log(json)
            fetch("http://localhost:3000/api/form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: json
            })
            .then(response => response.json())
            .then(data => {
                console.log("Sucesso:", data);
            })
            .catch(error => {
                console.error("Erro:", error);
            });
        }
    });


///////////////////////

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
