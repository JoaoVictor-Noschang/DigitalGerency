const cadastros = [];
let cod = cadastros.length > 0 ? cadastros[cadastros.length - 1].id : 0;

const codigoInput = document.querySelector("#codigo");
const loteInput = document.querySelector("#lote");
const produtoInput = document.querySelector("#produto");
const fornecedorInput = document.querySelector("#fornecedor");
const codBarInput = document.querySelector("#cod-bar");
const quantInput = document.querySelector("#quantidade");
const vencInput = document.querySelector("#vencimento");

const actionButton = document.querySelector("#submit-button");

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