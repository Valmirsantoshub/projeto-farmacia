let carrinho = [];

function addToCart(produto) {
    // Adiciona o produto ao carrinho
    carrinho.push(produto);
    alert(`${produto} foi adicionado ao carrinho!`);
}

function redirecionarParaWhatsApp() {
    if (carrinho.length === 0) {
        // alert("Seu carrinho está vazio!");
        return;
    }
    
    let mensagem = "Olá, gostaria de comprar os seguintes produtos:%0A";
    carrinho.forEach((produto, index) => {
        mensagem += `%0A${index + 1}. ${produto}`;
    });
    
    let numeroWhatsApp = "5515996846660";
    let linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagem}`;
    
    window.open(linkWhatsApp, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
    let botaoWhatsApp = document.querySelector(".whatsapp-button");
    botaoWhatsApp.addEventListener("click", redirecionarParaWhatsApp);
});
