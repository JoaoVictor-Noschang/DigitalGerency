const cadastros = [];
let cod = cadastros.length > 0 ? cadastros[cadastros.length - 1].id : 0;

const codigoInput = document.querySelector("#codigo");
const loteInput = document.querySelector("#lote");
const produtoInput = document.querySelector("#produto");
const fornecedorInput = document.querySelector("#fornecedor");
const codBarInput = document.querySelector("#cod-bar");
const quantInput = document.querySelector("#quantidade");
const vencInput = document.querySelector("#vencimento");

const actionButton = document.querySelector("#btn-cadastrar");

class Lote {
    constructor(lote, produto, fornecedor, codBarr, quantidade, vencimento) {
        this.id = ++cod;
        this.lote = lote;
        this.produto = produto;
        this.fornecedor = fornecedor;
        this.codBarr = codBarr;
        this.quantidade = quantidade;
        this.vencimento = vencimento;
    }
}

let lote01 = new Lote("315-215-415-aaaa", "Amendoim japonês - Dori", "Salgadinhos Beabá", "789456123456123", 500, "2024-12-31");
cadastros.push(lote01);
console.log(cadastros);

exibirDados();
verificarAcao();


function verificarAcao() {
    actionButton.textContent = codigoInput.value ? "Atualizar" : "Cadastrar";

    actionButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (codigoInput.value) {
            atualizarLote();

        } else {
            const newRegistro = cadastrarLote();

            if (newRegistro) {
                cadastros.push(newRegistro);
                exibirDados();
                clear();
                

            } else {
                alert("Todos os dados devem ser informados!");
            }
        }
        verificarAcao();
    }, { once: true });
}


function cadastrarLote() {

    const newLote = loteInput.value;
    const newProduto = produtoInput.value;
    const newFornecedor = fornecedorInput.value;
    const newCodBarr = codBarInput.value;
    const newQuant = quantInput.value;
    const newVenc = vencInput.value;

    if (newLote && newProduto && newFornecedor && newCodBarr && newQuant && newVenc) {
        return new Lote (newLote, newProduto, newFornecedor, newCodBarr, newQuant, newVenc);
    } else {
        return false;
    }
}


function getDadosInInput(loteId) {
    for (let i in cadastros) {
        if (cadastros[i].id == loteId) {
            codigoInput.value = cadastros[i].id;
            loteInput.value = cadastros[i].lote;
            produtoInput.value = cadastros[i].produto;
            fornecedorInput.value = cadastros[i].fornecedor;
            codBarInput.value = cadastros[i].codBarr;
            quantInput.value = cadastros[i].quantidade;
            vencInput.value = cadastros[i].vencimento;
            break;
        }
    }
    verificarAcao();
}


function atualizarLote() {
    const loteId = parseInt(codigoInput.value);
    const lote = cadastros.find(l => l.id === loteId);

    if (lote) {
        lote.lote = loteInput.value;
        lote.produto = produtoInput.value;
        lote.fornecedor = fornecedorInput.value;
        lote.codBarr = codBarInput.value;
        lote.quantidade = quantInput.value;
        lote.vencimento = vencInput.value;
        exibirDados();
        clear();
    } else {
        alert("Lote não encontrado!");
    }
}


function excluirCadastro(produtoId) {
    for (let i in cadastros) {
        if (cadastros[i].id == produtoId) {
            cadastros.splice(i, 1);
            alert("Registro Deletado!");
        }
        exibirDados();
        clear();
    }
}


function exibirDados() {
    let row = '<table><thead><tr>' +
        '<th>Excluir</th>' +
        '<th>Editar</th>' +
        '<th>Código</th>' +
        '<th>Produto</th>' +
        '<th>Fornecedor</th>' +
        '<th>Lote</th>' +
        '<th>Cod. de Barras</th>' +
        '<th>Quantidade</th>' +
        '<th>Vencimento</th>'+
        '</tr></thead><tbody>';

    for (let i in cadastros) {

        row += `<tr><td id="btn-delete" onclick='excluirCadastro(${cadastros[i].id})'>
                        <img  src='../assets/vec/delete.svg' alt='Delete'>
                    </td>` +
                `<td id="btn-edit" onclick='getDadosInInput(${cadastros[i].id})'>  
                    <img  src='../assets/vec/edit.svg' alt='Edit' >
                </td>` +
                `<td>${cadastros[i].id}</td>` +
                `<td>${cadastros[i].produto}</td>` +
                `<td>${cadastros[i].fornecedor}</td>` +
                `<td>${cadastros[i].lote}</td>` +
                `<td>${cadastros[i].codBarr}</td>` +
                `<td>${cadastros[i].quantidade}</td>` +
                `<td>${cadastros[i].vencimento}</td></tr>`;

    }

    row += '</tbody></table>';

    document.getElementById('res').innerHTML = row;
}


function clear() {
    codigoInput.value = '';
    loteInput.value = '';
    produtoInput.value = '';
    fornecedorInput.value = '';
    quantInput.value = '';
    vencInput.value = '';
}