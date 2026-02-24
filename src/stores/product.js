// Utilities
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    cilios: [
      {
        nome: "Volume Luxo",
        foto: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/luxo_glamour.jpeg",
        nota: "5.0",
        valor: "140.00",
        descricao:
          "Esse método proporciona um volume médio a intenso, criando um olhar marcante e glamoroso.",
        manutencao: "90.00",
        maisVendido: true,
        story: "",
      },
      {
        nome: "Volume Egípcio",
        foto: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/egip.jpeg",
        nota: "5.0",
        valor: "125.00",
        descricao:
          "Um efeito natural e delicado. São ideais para quem busca um olhar marcante e suave.",
        manutencao: "85.00",
        maisVendido: true,
        story: "",
      },
      {
        nome: "Volume Brasileiro",
        valor: "110.00",
        foto: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/gisele.jpeg",
        nota: "5.0",
        descricao:
          "Cilíos um volume suave e natural, ideal para quem busca um olhar mais cheio, porém sem exageros.",
        manutencao: "80.00",
        maisVendido: true,
        story: "",
      },
      {
        nome: "Lash Lifting",
        foto: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/l_lifting.jpeg",
        nota: "4.0",
        valor: "80.00",
        descricao:
          "Cílios de volume natural e curvado, alongando e dando volume de forma sutil.",
        manutencao: "",
        maisVendido: false,
        story: "",
      },
            {
        nome: "Volume Fox",
        foto: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/fox.jpeg",
        nota: "4.0",
        valor: "150.00",
        descricao: "Cílios com volume marcante, alongando o olhar e proporcionando destaque de forma natural.",
        manutencao: "80.00",
        maisVendido: false,
        story: "",
      },
      {
        nome: "Micropigamentação Labial",
        foto: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/1e.jpg",
        nota: "5.0",
        valor: "165.00",
        descricao:
          "Realce seus lábios com a Micropigmentação Labial, deixando seus lábios mais iluminados.",
        maisVendido: false,
        story: "",
      },
      {
        nome: "Hydra Gloss",
        foto: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/GLOOSS_.jpg",
        nota: "4.0",
        valor: "49.00",
        descricao:
          "Fique com os lábios mais jovens além efeito glossy, que deixa os lábios iluminados.",
        manutencao: "",
        maisVendido: false,
        story: "",
      },
      {
        nome: "Curso de Lash iniciante",
        foto: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/curso.jpeg",
        nota: "5.0",
        valor: "620.00",
        descricao: "Curso iniciante de lash designer",
        manutencao: "",
        maisVendido: false,
        story: "",
      },
    ],

    imagens: [
      {
        src: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/new_cal.jpeg",
        mensagem: "A extensão de cílios renova toda a sua beleza.",
      },
      {
        src: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/new_cal1.jpeg",
        mensagem: "Fio a fio a beleza se transforma.",
      },
      {
        src: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/new_cal2.jpeg",
        mensagem: "Os seus olhos merecem cílios marcantes.",
      },
      {
        src: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/new_cal3.jpeg",
        mensagem:
          "O seu olhar merece o cuidado de uma especialista em cílios. Renove o seu poder.",
      },
      {
        src: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/BACK03.jpg",
        mensagem:
          "Charme e estética perfeita que só lindos cílios conseguem expressar.",
      },
      {
        src: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/new_cal4.jpeg",
        mensagem: "Cílios poderosos iluminam qualquer olhar.",
      },
      {
        src: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/new_cal5.jpeg",
        mensagem:
          "Os cílios são a extensão do poder feminino. Cuide bem deles!",
      },
      {
        src: "https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/refs/heads/main/new_cal6.jpeg",
        mensagem: "Agende seu horário!",
      },
    ],

    phoneNumber: "5512996141491",
  }),

  actions: {},
});
