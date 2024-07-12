const cadastros = [];
let controleID = 0;


const codInput = document.querySelector("#codigo");
const loteInput = document.querySelector("#lote");
const prodInput = document.querySelector("#produto");
const fornInput = document.querySelector("#fornecedor");
const codBarrInput = document.querySelector("#cod-bar");
const quantInput = document.querySelector("#quantidade");
const vencInput = document.querySelector("#vencimento");

const actionButton = document.querySelector("#action-button");


class Lote {

    constructor(lote, prod, forn, codBarr, quant, venc) {
        this.id = ++controleID;
        this.lote = lote;
        this.produto = prod;
        this.fornecedor = forn;
        this.codBarr = codBarr;
        this.quantidade = quant;
        this.vencimento = venc;
    }

    static clear() {
        codInput.value = '';
        loteInput.value = '';
        prodInput.value = '';
        fornInput.value = '';
        codBarrInput.value = "";
        quantInput.value = '';
        vencInput.value = '';
    }

    
    static cadastrarNovoLote() {

        let loteValue = loteInput.value;
        let prodValue = prodInput.value;
        let fornValue = fornInput.value;
        let codBarrValue = codBarrInput.value;
        let quantValue = quantInput.value;
        let vencValue = vencInput.value;

        if (loteValue && prodValue && fornValue && codBarrValue && quantValue && vencValue) {
            const newLote = new Lote(loteValue, prodValue, fornValue, codBarrValue, quantValue, vencValue);
            cadastros.push(newLote);
            console.log(cadastros);
            Lote.clear();
        } else {
            alert("Todos os campos devem ser preenchidos!");
        }


    }

}

actionButton.addEventListener("click", () => {
    Lote.cadastrarNovoLote();
});

/*
let lot01 = new Lote("11-11-111-1111", "café", "tão bom", "789456123456123", 200, "2024-12-31");
let lot02 = new Lote("22-22-222-2222", "chá", "Leão", "789456555555555", 130, "2024-11-25");
cadastros.push(lot01, lot02);
*/

console.log(cadastros);