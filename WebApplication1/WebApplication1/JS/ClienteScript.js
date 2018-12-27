var responseConteudo = new Object();
var CurrentCliente = null;
function CarregarTabelaCliente() {


    $('#tbllocalCliente').puidatatable({
        caption: 'Local Datasource',
        paginator: {
            rows: 10
        },
        columns: [
            { field: 'IdCliente', headerText: 'IdCliente' },
            { field: 'RazaoSocial', headerText: 'RazaoSocial' },
            { field: 'NomeFantasia', headerText: 'NomeFantasia' },
            { field: 'CNPJ', headerText: 'CNPJ' },
            { field: 'Logradouro', headerText: 'Logradouro' },
            { field: 'Numero', headerText: 'Numero' },
            { field: 'Bairro', headerText: 'Bairro' },
            { field: 'Complemento', headerText: 'Complemento' },
            { field: 'Municipio', headerText: 'Municipio' },
            { field: 'Estado', headerText: 'Estado' },
            { field: 'CEP', headerText: 'CEP' }
        ],
        datasource: function (callback) {
            $.ajax({
                type: "GET",
                url: '/Home/ClienteBoardList',
                contentType: 'application/json',
                dataType: "json",
                context: this,
                success: function (response) {

                    callback.call(this, response);
                }
            });
        },
        selectionMode: 'single',
        rowSelect: function (event, data) {

            CurrentCliente = data;

        }
       

    });
    
}




function AddNewwCliente() {

    $('#IdCliente').val("");
    $('#RazaoSocial').val("");
    $('#NomeFantasia').val("");
    $('#CNPJ').val("");
    $('#Logradouro').val("");
    $('#Numero').val("");
    $('#Bairro').val("");
    $('#Complemento').val("");
    $('#Municipio').val("");
    $('#Estado').val("");
    $('#CEP').val("");

    document.getElementById('dlgelementCliente').show();
}


function ClienteEdit() {
    if (CurrentCliente !== null) {

        $("#EditRazaoSocial").val(CurrentCliente.RazaoSocial);
        $("#EditNomeFantasia").val(CurrentCliente.NomeFantasia);
        $("#EditCNPJ").val(CurrentCliente.CNPJ);
        $("#EditLogradouro").val(CurrentCliente.Logradouro);
        $("#EditNumero").val(CurrentCliente.Numero);
        $("#EditBairro").val(CurrentCliente.Bairro);
        $("#EditComplemento").val(CurrentCliente.Complemento);
        $("#EditMunicipio").val(CurrentCliente.Municipio);
        $("#EditEstado").val(CurrentCliente.Estado);
        $("#EditCEP").val(CurrentCliente.CEP);

        document.getElementById('dlgelementClienteEdit').show();

    } else {
        $('#puigrowlSelectRow').puigrowl();
        $('#puigrowlSelectRow').puigrowl('show', [{ severity: 'info', summary: 'ATENÇÃO!', detail: 'Selecione algum Registro da tabela!' }]);
    }

}

function ConfirmEditarCliente() {

    if (CurrentCliente !== null) {
        var newObject = new Object();


        newObject.IdCliente = CurrentCliente.IdCliente;
        newObject.RazaoSocial = $("#EditRazaoSocial").val();
        newObject.NomeFantasia = $("#EditNomeFantasia").val();
        newObject.CNPJ = $("#EditCNPJ").val();
        newObject.Logradouro = $("#EditLogradouro").val();
        newObject.Numero = $("#EditNumero").val();
        newObject.Bairro = $("#EditBairro").val();
        newObject.Complemento = $("#EditComplemento").val();
        newObject.Municipio = $("#EditMunicipio").val();
        newObject.Estado = $("#EditEstado").val();
        newObject.CEP = $("#EditCEP").val();

        $.ajax({
            url: '/Home/AdicionarCliente',
            type: 'POST',
            data: newObject,
            success: function (data) {

                CurrentCliente = data;
                $('#puigrowSucesso').puigrowl();
                $('#puigrowSucesso').puigrowl('show', [{ severity: 'info', summary: 'ATENÇÃO!', detail: 'Operação Realizada com Sucesso!' }]);
                CarregarTabelaCliente();
            }
        });

        document.getElementById('dlgelementClienteEdit').hide();
        CarregarTabelaCliente();


    } else {
        $('#puigrowlSelectRow').puigrowl();
        $('#puigrowlSelectRow').puigrowl('show', [{ severity: 'info', summary: 'ATENÇÃO!', detail: 'Selecione algum Registro da tabela!' }]);
    }


}

function executarPesqCliente() {

    var conteudo = $("#ProcurarCliente").val();

    var intPesq = parseInt(conteudo);

    $('#tbllocalCliente').puidatatable({
        caption: 'Local Datasource',
        paginator: {
            rows: 10
        },
        columns: [
            { field: 'IdCliente', headerText: 'IdCliente' },
            { field: 'RazaoSocial', headerText: 'RazaoSocial' },
            { field: 'NomeFantasia', headerText: 'NomeFantasia' },
            { field: 'CNPJ', headerText: 'CNPJ' },
            { field: 'Logradouro', headerText: 'Logradouro' },
            { field: 'Numero', headerText: 'Numero' },
            { field: 'Bairro', headerText: 'Bairro' },
            { field: 'Complemento', headerText: 'Complemento' },
            { field: 'Municipio', headerText: 'Municipio' },
            { field: 'Estado', headerText: 'Estado' },
            { field: 'CEP', headerText: 'CEP' }
        ],
        datasource: function (callback) {
            $.ajax({
                type: "GET",
                url: '/Home/PesquisaClienteByID',
                contentType: 'application/json',
                dataType: "json",
                data: { id: intPesq },
                context: this,
                success: function (response) {

                    callback.call(this, [response]);
                }
            });
        },
        selectionMode: 'single',
        rowSelect: function (event, data) {

            CurrentCliente = data;

        }


    });

    CurrentCliente = null;
}


function validarDeleteCliente() {
    if (CurrentCliente !== null) {

        document.getElementById('dlgelement_Delete').show();
    }
    else {
        $('#puigrowlSelectRow').puigrowl();
        $('#puigrowlSelectRow').puigrowl('show', [{ severity: 'info', summary: 'ATENÇÃO!', detail: 'Selecione algum Registro da tabela!' }]);
    }

}
function DeletarRegistroCliente() {
    if (CurrentCliente !== null) {

        $.ajax({
            url: '/Home/DeletarCliente',
            type: 'POST',
            data: CurrentCliente,
            success: function (data) {

                document.getElementById('dlgelement_Delete').hide();
                $('#puigrowSucesso').puigrowl();
                $('#puigrowSucesso').puigrowl('show', [{ severity: 'info', summary: 'ATENÇÃO!', detail: 'Operação Realizada com Sucesso!' }]);
                CarregarTabelaCliente();
            }
        });
        CurrentCliente = null;
    }
    else {
        document.getElementById('dlgelement_Delete').hide();
        $('#puigrowlSelectRow').puigrowl();
        $('#puigrowlSelectRow').puigrowl('show', [{ severity: 'info', summary: 'ATENÇÃO!', detail: 'Selecione algum linha da tabela!' }]);
    }



}