// Utilities
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    cilios: [
      {
        nome: 'Volume 8D',
        foto: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/02.jpg',
        nota: '5.0',
        valor: '145.00',
        descricao: 'Um efeito de volume intenso e cheio. São ideais para quem busca um olhar marcante e dramático.',
        manutencao: '85.00',
        maisVendido: true,
        story: ''
      },
      {
        nome: 'Volume Egípcio',
        foto: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/8D.jpg',
        nota: '5.0',
        valor: '135.00',
        descricao: 'Esse método proporciona um volume médio a intenso, criando um olhar marcante e glamoroso.',
        manutencao: '75.00',
        maisVendido: true,
        story: ''
      },
      {
        nome: 'Volume Brasileiro',
        valor: '98.00',
        foto: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/BRASILzzzzz.jpg',
        nota: '5.0',
        descricao: 'Cilíos um volume suave e natural, ideal para quem busca um olhar mais cheio, porém sem exageros.',
        manutencao: '65.00',
        maisVendido: true,
        story: ''
      },
      {
        nome: 'Lash Lifting',
        foto: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/lifting.jpg',
        nota: '4.0',
        valor: '70.00',
        descricao: 'Cílios de volume natural e curvado, alongando e dando volume de forma sutil.',
        manutencao: '',
        maisVendido: false,
        story: ''
      },
      {
        nome: 'Hydra Lips',
        foto: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/LIPS_.jpg',
        nota: '4.0',
        valor: '69.00',
        descricao: 'Traga mais saúde para os seus lábios, revitalizando e hidratando de forma profunda.',
        manutencao: '',
        maisVendido: false,
        story: ''
      },
      {
        nome: 'Hydra Gloss',
        foto: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/GLOOSS_.jpg',
        nota: '4.0',
        valor: '49.00',
        descricao: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/03.jpg',
        manutencao: '',
        maisVendido: false,
        story: ''
      },
    ],

    imagens: [
      {
        src: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/01.PNG',
        mensagem: 'A extensão de cílios renova toda a sua beleza.'
      },
      {
        src: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/02.jpg',
        mensagem: 'Fio a fio a beleza se transforma.'
      },
      {
        src: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/03.jpg',
        mensagem: 'Os seus olhos merecem cílios marcantes.'
      },
      {
        src: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/BACK02.jpg',
        mensagem: 'O seu olhar merece o cuidado de uma especialista em cílios. Renove o seu poder.'
      },
      {
        src: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/BACK03.jpg',
        mensagem: 'O seu olhar merece o cuidado de uma especialista em cílios. Renove o seu poder.'
      },
      {
        src: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/BACK04.jpg',
        mensagem: 'Cílios poderosos iluminam qualquer olhar.'
      },
      {
        src: 'https://raw.githubusercontent.com/WallaceHS20/IMAGE-REPOSITORY/main/BACK05.jpg',
        mensagem: 'Os cílios são a extensão do poder feminino. Cuide bem deles!'
      },
    ],
    phoneNumber: '5512996141491',
  }),

  actions: {
    
  }
})
