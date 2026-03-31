let faturas = [];

function importarPDF(){
  alert("Em breve: leitura automática do PDF. (estrutura já pronta)");

  // DEMO fake (simula leitura)
  faturas = [
    {cliente:"Gabriel", valor:5000, vencimento:"2026-04-10", status:"Pendente"}
  ];
  render();
}

function render(){
  let html = "";
  faturas.forEach((f,i)=>{
    html += `
    <div class="card">
      <b>${f.cliente}</b><br/>
      R$ ${f.valor}<br/>
      Vencimento: ${f.vencimento}<br/>
      Status: ${f.status}<br/>
      <button onclick="cobrar(${i})">Cobrar</button>
      <button onclick="pagar(${i})">Marcar Pago</button>
    </div>`;
  });
  document.getElementById("lista").innerHTML = html;
}

function cobrar(i){
  let f = faturas[i];
  let msg = `Olá, ${f.cliente}!\n\nValor: R$ ${f.valor}\n\nMagic Trips`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`);
}

function pagar(i){
  faturas[i].status = "Pago";
  render();
}
