var responseConteudo = new Object();
var CurrentSelecionado = null;
$("#senha").attr("type","password");

function CarregarTabelaMatriz() {


    $('#tbllocal').puidatatable({
        caption: 'Local Datasource',
        paginator: {
            rows: 10
        },
        columns: [
            { field: 'IdUser', headerText: 'IdUser' },
            { field: 'NomeCompleto', headerText: 'NomeCompleto' },
            { field: 'Apelido', headerText: 'Apelido' },
            { field: 'Email', headerText: 'Email' },
            { field: 'Telefone', headerText: 'Telefone' }
        ],
        datasource: function (callback) {
            $.ajax({
                type: "GET",
                url: '/Home/IndexPost',
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

            CurrentSelecionado = data;

        }


    });
 
}

function Edit(){
    if (CurrentSelecionado !== null) {
        
        $("#idUsu2").val(CurrentSelecionado.IdUser);
            $("#idUsuLabel2").show();
        $("#nome2").val(CurrentSelecionado.NomeCompleto);
        $("#apelido2").val(CurrentSelecionado.Apelido);
        $("#email2").val(CurrentSelecionado.Email);
        $("#telefone2").val(CurrentSelecionado.Telefone);
        $("#senha2").val(CurrentSelecionado.Senha);
        
        document.getElementById('dlgelement2').show();
        
    } else {
        $('#puigrowlSelectRow').puigrowl();
        $('#puigrowlSelectRow').puigrowl('show', [{ severity: 'info', summary: 'ATENÇÃO!', detail: 'Selecione algum Registro da tabela!' }]);
    }
    
}

function AddNeww() {

    $("#idUsu").val("");
        $("#idUsuLabel").hide();
    $("#nome").val("");
    $("#apelido").val("");
    $("#email").val("");
    $("#telefone").val("");
    $("#senha").val("");

    document.getElementById('dlgelement').show();
}

function ConfirmEditar() {

    if (CurrentSelecionado !== null) {
        var newObject = new Object();

        newObject.IdUser = CurrentSelecionado.IdUser;
        newObject.NomeCompleto =  $("#nome2").val();
        newObject.Apelido = $("#apelido2").val();
        newObject.Email = $("#email2").val();
        newObject.Telefone = $("#telefone2").val();
        newObject.Senha = $("#senha2").val();

        $.ajax({
            url: '/Home/AdicionarUser',
            type: 'POST',
            data: newObject,
            success: function (data) {
                
                CurrentUsuario = data;
                $('#puigrowSucesso').puigrowl();
                $('#puigrowSucesso').puigrowl('show', [{ severity: 'info', summary: 'ATENÇÃO!', detail: 'Operação Realizada com Sucesso!' }]);
                CarregarTabelaMatriz();
            }
        });

        document.getElementById('dlgelement2').hide();
        CarregarTabelaMatriz();
        

    } else {
        $('#puigrowlSelectRow').puigrowl();
        $('#puigrowlSelectRow').puigrowl('show', [{ severity: 'info', summary: 'ATENÇÃO!', detail: 'Selecione algum Registro da tabela!' }]);
    }
       

}
function executarPesq() {

    var conteudo = $("#Procurar").val();

    var intPesq = parseInt(conteudo);

    $('#tbllocal').puidatatable({

        caption: 'Local Datasource',
        paginator: {
            rows: 10
        },
        columns: [
            { field: 'IdUser', headerText: 'IdUser' },
            { field: 'NomeCompleto', headerText: 'NomeCompleto' },
            { field: 'Apelido', headerText: 'Apelido' },
            { field: 'Email', headerText: 'Email' },
            { field: 'Telefone', headerText: 'Telefone' }
        ],
        datasource: function (callback) {
            $.ajax({
                type: "GET",
                url: '/Home/PesquisaByID/',
                data: { id: intPesq},
                contentType: 'application/json',
                dataType: "json",
                context: this,
                success: function (response) {
                        callback.call(this, [response]);
                    
                }
            });
        },
        selectionMode: 'single',
        rowSelect: function (event, data) {

            CurrentSelecionado = data;
        }
    });
    CurrentSelecionado = null;
}
function validarDelete() {
    if (CurrentSelecionado !== null) {

        document.getElementById('dlgelement_Delete').show();
    }
    else {
        $('#puigrowlSelectRow').puigrowl();
        $('#puigrowlSelectRow').puigrowl('show', [{ severity: 'info', summary: 'ATENÇÃO!', detail: 'Selecione algum Registro da tabela!' }]);
    }

}
function DeletarRegistro() {
    if (CurrentSelecionado !== null) {

        $.ajax({
            url: '/Home/DeletarUsuario',
            type: 'POST',
            data: CurrentSelecionado,
            success: function (data) {
                
                document.getElementById('dlgelement_Delete').hide();
                $('#puigrowSucesso').puigrowl();
                $('#puigrowSucesso').puigrowl('show', [{ severity: 'info', summary: 'ATENÇÃO!', detail: 'Operação Realizada com Sucesso!' }]);
                CarregarTabelaMatriz();
            }
        });
        CurrentSelecionado = null;
    }
    else {
        document.getElementById('dlgelement_Delete').hide();
        $('#puigrowlSelectRow').puigrowl();
        $('#puigrowlSelectRow').puigrowl('show', [{ severity: 'info', summary: 'ATENÇÃO!', detail: 'Selecione algum linha da tabela!' }]);
    }



}

//function Login() {
//    var newObject = new Object();
//    newObject.Email = $("#email2").val();
//    newObject.Senha = $("#senha2").val();

//    $.ajax({
//        url: '/Home/ValidLogin',
//        type: 'POST',
//        data: newObject,
//        success: function (data) {

//            CurrentUsuario = data;
//            $('#puigrowSucesso').puigrowl();
//            $('#puigrowSucesso').puigrowl('show', [{ severity: 'info', summary: 'ATENÇÃO!', detail: 'Operação Realizada com Sucesso!' }]);
            
//        }
//    });

//    document.getElementById('dlgelement2').hide();
//}