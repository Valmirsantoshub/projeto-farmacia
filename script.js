// let carrinho = [];

// function addToCart(produto) {
//     // Adiciona o produto ao carrinho
//     carrinho.push(produto);
//     alert(`${produto} foi adicionado ao carrinho!`);
// }

// function redirecionarParaWhatsApp() {
//     if (carrinho.length === 0) {
//         // alert("Seu carrinho está vazio!");
//         return;
//     }
    
//     let mensagem = "Olá, gostaria de comprar os seguintes produtos:%0A";
//     carrinho.forEach((produto, index) => {
//         mensagem += `%0A${index + 1}. ${produto}`;
//     });
    
//     let numeroWhatsApp = "5515996846660";
//     let linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagem}`;
    
//     window.open(linkWhatsApp, "_blank");
// }

// document.addEventListener("DOMContentLoaded", function () {
//     let botaoWhatsApp = document.querySelector(".whatsapp-button");
//     botaoWhatsApp.addEventListener("click", redirecionarParaWhatsApp);
// });

// Mapeamento dos produtos: chave utilizada no onclick e seus respectivos dados
const products = {
    'anticoncepcionais': { name: "Anticoncepcionais", price: 50.00 },
    'Repelentes': { name: "Repelentes", price: 25.00 },
    'Fraldas Willy': { name: "Fraldas Willy", price: 15.00 },
    'vitaminas': { name: "Vitaminas", price: 50.00 },
    'suplemento': { name: "Suplemento", price: 50.00 },
    'passiflora': { name: "Passiflora", price: 50.00 },
    'Maca Peruana': { name: "Maca Peruana", price: 50.00 },
    'Rinosoro': { name: "Rinosoro", price: 50.00 }
  };
  
  // Array para armazenar os produtos adicionados e variável para o total
  let cart = [];
  let total = 0;
  
  /**
   * Função chamada quando um produto é adicionado.
   * @param {string} productKey - Chave que identifica o produto.
   */
  function addToCart(productKey) {
    // Verifica se o produto existe no objeto products
    if (products[productKey]) {
      const product = products[productKey];
      cart.push(product);
      total += product.price;
      updateWhatsAppLink();
      alert(`${product.name} adicionado ao carrinho!`);
    } else {
      alert("Produto não encontrado!");
    }
  }
  
  /**
   * Atualiza a URL do link do WhatsApp com os itens do carrinho e o valor total.
   */
  function updateWhatsAppLink() {
    let message = "Olá, vim pelo site e tenho interesse em comprar os seguintes produtos:%0A";
    
    // Adiciona cada produto à mensagem
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)}%0A`;
    });
    
    // Adiciona o total
    message += `Total: R$ ${total.toFixed(2)}`;
    
    // Seleciona o botão do WhatsApp e atualiza o atributo href
    const whatsappLink = document.querySelector(".whatsapp-button");
    whatsappLink.href = "https://api.whatsapp.com/send?phone=5515996846660&text=" + message;
  }
  