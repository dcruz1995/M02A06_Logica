let pessoa = {
  nome: "Fernando",
  idade: 26,
  estado: "Paranaa"
};

pessoa.cidade = "Foz do Iguacu";
delete pessoa.estado;
console.log(pessoa);

let cadastro = [
  {
    nome: "Fernando",
    idade: 26,
    cidade: "curitiba",
    amigos: ["camila", "carlos", "gabriel"]
  },
  {
    nome: "carlos",
    idade: 18,
    cidade: "curitiba",
    amigos: ["Fernando", "leandro", "gabriel"]
  },
  {
    nome: "camila",
    idade: 21,
    cidade: "curitiba",
    amigos: ["leandro", "carlos", "Fernando"]
  },
  {
    nome: "Fernando",
    idade: 29,
    cidade: "curitiba",
    amigos: ["camila", "Fernando", "carlos"]
  },
  {
    nome: "Fernando",
    idade: 24,
    cidade: "curitiba",
    amigos: ["camila", "carlos", "Fernando"]
  }
];
console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);
console.log(cadastro[2].amigos[2]);
console.log(cadastro[3].amigos[0]);
console.log(cadastro[4].amigos[1]);
