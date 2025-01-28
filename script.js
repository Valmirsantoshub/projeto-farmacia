function addToCart(productName) {
    alert(productName + " foi adicionado ao carrinho!");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por entrar em contato! Responderemos em breve.');
    document.getElementById('contactForm').reset();
}); 