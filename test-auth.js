// Teste de autenticação
async function testarAutenticacao() {
  // Testar busca de clientes
  console.log('1. Buscando clientes...');
  const response = await fetch('http://localhost:3000/clients');
  const clients = await response.json();
  console.log('Clientes retornados:', clients);
  
  // Testar busca por email específico
  const email = 'joao@gmail.com';
  const password = 'senha123';
  
  const cliente = clients.find(c => c.email === email && c.password === password);
  console.log(`Cliente encontrado para ${email}:`, cliente);
}

testarAutenticacao();
