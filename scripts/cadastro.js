const cadastros = [];
let controleID = cadastros.length > 0 ? cadastros[cadastros.length - 1].id : 0;


const codInput = document.querySelector("#codigo");
const loteInput = document.querySelector("#lote");
const prodInput = document.querySelector("#produto");
const fornInput = document.querySelector("#fornecedor");
const codBarrInput = document.querySelector("#cod-bar");
const quantInput = document.querySelector("#quantidade");
const vencInput = document.querySelector("#vencimento");

const actionButton = document.querySelector("#action-button");


class Lote {

    #id;
    #lote;
    #produto;
    #fornecedor;
    #codBarr;
    #quantidade;
    #vencimento;

    constructor(lote, prod, forn, codBarr, quant, venc) {
        this.#id = ++cod;
        this.#lote = lote;
        this.#produto = prod;
        this.#fornecedor = forn;
        this.#codBarr = codBarr;
        this.#quantidade = quant;
        this.#vencimento = venc;
    }

    get id() {
        return this.#id;
    }

    get lote() {
        return this.#lote;
    }

    get produto() {
        return this.#produto;
    }

    get fornecedor() {
        return this.#fornecedor;
    }

    get codBarr() {
        return this.#codBarr;
    }

    get quantidade() {
        return this.#quantidade;
    }

    get vencimento() {
        return this.#vencimento;
    }
}

let prod01 = new Lote("11-11-111-1111", "café", "tão bom", "789456123456123", 200, "2024-12-31");

console.log(cadastros);