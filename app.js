function pesquisar() {
    // 1. **Obter a seção onde os resultados serão exibidos:**
    // - Busca o elemento HTML com o ID "resultados-pesquisa".
    // - Armazena a referência a esse elemento na variável `section`.
    let section=document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Pressionar enter para pesquisar


    function pesquisar() {
        // Aqui você coloca o código da sua função de pesquisa
        const termoPesquisa = campoPesquisa.value;
        console.log('Você pesquisou por:', resultados);
    }

    // Ajustar area da pagina
    function pesquisar() {
        // Lógica da pesquisa (buscar nos dados.js)
    
        // Mostra os resultados (simulando aqui)
        const resultados = document.getElementById('resultados-pesquisa');
        resultados.innerHTML = '<h2>Resultados da Pesquisa</h2><p>Aqui vão aparecer os resultados da sua pesquisa.</p>';
    
        // Altera o layout para mostrar os resultados
        resultados.style.justifyContent = 'flex-start';
    }

    //Não executar nada caso Pesquisa esteja vazia
    if (campoPesquisa == "") {
        section.innerHTML = "<p class='nenhum-resultado'>Nenhum guia encontrado.</p>"
        return
    };

    //Tudo que for digitado será transformado em letras minusculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // 2. **Inicializar a string que conterá os resultados:**
    // - Cria uma string vazia para armazenar o HTML que será gerado.
    let resultados = "";

    let classe = "";
    let descricao = "";
    let tags = "";
    
    // 3. **Iterar sobre os dados e construir o HTML:**
    // - Para cada item `dado` na lista de dados:
    // - Cria uma nova string de HTML para um item de resultado.
    // - Adiciona essa string à variável `resultados`.
    for (let dado of dados) {
        classe = dado.classe.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Se no dado classe inclui campoPesquisa
        // então faça...
        if(classe.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //Cria um novo elemento
            resultados +=` <div class="item-resultado">
                            <!-- Imagem -->
                            <img src="${dado.imagem}" alt="Imagem Classe">
                        <!-- Conteudo de texto -->
                        <div class="texto">
                            <h2>
                            <a href="${dado.link}" target="_blank">${dado.classe}</a>
                            </h2>
                            <p class="descricao-meta">${dado.descricao}</p>
                        </div>
                    </div>
`
        };
        
};
    // 4. **Injetar o HTML gerado na página:**
    // - Substitui o conteúdo HTML da seção "resultados-pesquisa"
    // pelo HTML gerado.
    section.innerHTML = resultados;
}

