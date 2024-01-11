/*
    Cache

    Arquivos externos são armazenados na memória cache do navegador, portanto, assim que o arquivo
    for baixado, ele poderá ser utilizado em qualquer página que requisitar esse arquivo.
    Desta maneira, o arquivo não precisará ser baixado a cada vez que uma página requisita-lo o.

    Para apagar a memoria cache dos arquivos da página devido a alteração do conteudo de um arquivo externo
    Tecle ctrl f5 para fazer a memoria cache ser substituida pela nova requisição.

    OBS:

    O "cache de memória" armazena e carrega recursos de e para a memória (RAM). Portanto, isso é muito mais
    rápido, mas não persistente. O conteúdo está disponível até você fechar o navegador.

    "Cache de disco" é persistente. Os recursos em cache são armazenados e carregados para e do disco.

    POST VS GET

    Conhecendo o HTTP
    O HTTP é o protocolo responsável pela comunicação de sites na web. Quando acessamos um site, é esse protocolo
    que utilizamos. Esse protocolo possui alguns métodos, ou, como também são chamados, verbos.
    Os verbos HTTP definem qual ação deve ser realizada e, dependendo do verbo, o servidor pode dar uma resposta
    diferente.


    Conhecendo os verbos
    Um dos verbos mais comuns do HTTP é o GET. Quando utilizamos o GET, os parâmetros são passados no cabeçalho
    da requisição.
    Por isso, podem ser vistos pela URI, como no caso do nosso formulário de login.

    Esse verbo é o padrão para enviar dados quando submetemos um formulário HTTP. Por isso no exemplo acima,
    foi utilizado o GET. Contudo, conseguimos alterar esse comportamento dizendo para o formulário qual do
    método (method) ele deve usar.

    No caso de formulários web, é muito comum que esse método seja o POST:

    <form action="logar()" method="post">
    O POST, ao contrário do GET, envia os parâmetros no corpo da requisição HTTP. Escondendo eles da URL:

    Então isso significa que se utilizarmos o POST protegemos os dados submetidos pelo formulário,
    já que eles não aparecem na URL?

    Não exatamente. A única coisa que o POST faz é enviar os parâmetros no corpo da requisição.
    Se inspecionarmos a requisição, conseguimos acesso a eles.

    Se quisermos proteger, de fato, nossa aplicação, precisamos utilizar a "versão segura" do HTTP,
    o HTTPS. Com ela, conseguimos criptografar os dados enviados.

    Ambos os verbos são muito utilizado em formulários na web e possuem algumas outras diferenças entre si.

    Como o GET envia os dados no cabeçalho da requisição, ele tende a ser, não é uma regra,
    um pouco mais performático que o POST.

    Porém, por enviar os dados no cabeçalho da requisição, o GET tem um tamanho máximo de dados que podem
    ser enviados, que no geral é de 255 caracteres. Com POST, podemos enviar informações um pouco maiores,
    como imagens. Ou seja, se tentarmos passar uma grande quantidade de informações via GET, algumas partes
    podem ser perdidas no caminho.

    Com isso você pode estar pensando que utilizar o POST é o melhor caminho já que ele encapsula os dados
    no corpo da requisição e consegue transportar mais dados que o GET, portanto, vamos utilizar o POST em
    todo lugar.

    Porém, se existem dois verbos diferentes, é porque eles foram feitos para serem utilizados em locais diferentes.

    As requisições do tipo GET são recomendadas para obter dados de um determinado recurso. Como em um formulário
    de busca ou em uma listagem de todos os produtos cadastrados.

    Já as requisições POST são mais utilizadas para para enviar informações para serem processadas,
    como por exemplo, criar algum recurso, como um produto, ou um cliente.
*/


$(() => {

    $.ajax({ // equivalente aos metodos do ajax puro
        type: 'GET',
        url: 'PHP/app.php',
        data: 'data=2018-08',
        dataType: 'json', //Converte uma string json para um json
        //default datatype: html
        success: (dados) => {
            console.log('Requisição realizada com sucesso');
            console.log(dados);
            $('#clientesAtivos').html(dados.clientesAtivos);
            $('#clientesInativos').html(dados.clientesInativos);
            $('#totalReclamacoes').html(dados.totalReclamacoes);
            $('#totalElogios').html(dados.totalElogios);
            $('#totalSugestoes').html(dados.totalSugestoes);
        },
        error: (erro) => {
            console.log('Erro');
            console.log(erro);
        }

    });


    $('.documentacao').on('click', () => {
        console.log('link documentacao clicado');

        //load()

        //$('#pagina').load('HTML/documentacao.html'); // equivalente à document.getElementById('pagina').innerHTML = ajax.responseText;
        //load default = get


        //get()

        //$.get('HTML/documentacao.html', (ajax_responseText) => {  // equivalente à ajax.open('GET', url);
        //      console.log(ajax_responseText);
        //      $('#pagina').html(ajax_responseText);  // equivalente à document.getElementById('pagina').innerHTML = ajax.responseText;
        // });


        // post()

        $.post('HTML/documentacao.html', (ajax_responseText) => {  // equivalente à ajax.open('POST', url);
            console.log(ajax_responseText);
            $('#pagina').html(ajax_responseText);  // equivalente à document.getElementById('pagina').innerHTML = ajax.responseText;
        });

    });

    $('.suporte').on('click', () => {
        console.log('link suporte clicado');
        $('#pagina').load('HTML/suporte.html');
    });

    //ajax
    $('#data').on('change', (e)=>{
        console.log($(e.target).val());
        let data = $(e.target).val();
        $.ajax({ // equivalente aos metodos do ajax puro
            type: 'GET',
            url: 'PHP/app.php',
            data: `data=${data}`, //sintaxe x-ww-form-urlencoded
            dataType: 'json', //Converte uma string json para um json
            //default datatype: html
            success: (dados) => {
                console.log('Requisição realizada com sucesso');
                console.log(dados);
                $('#numeroVendas').html(dados.numeroVendas);
                $('#totalVendas').html(dados.totalVendas);
                $('#numeroDespesas').html(dados.numeroDespesas);
                $('#totalDespesas').html(dados.totalDespesas);
                },
            error: (erro) => {
                console.log('Erro');
                console.log(erro);
            }

        });

    })



});