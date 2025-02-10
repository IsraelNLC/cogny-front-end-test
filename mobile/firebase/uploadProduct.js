import { db, collection, setDoc, doc } from "./firebaseConfig.js";

const mockProducts = [
    { id: "1", descricao: "Tênis Esportivo Masculino", preco: 299.99, imagemUrl: "https://cdn.shoppub.io/cdn-cgi/image/w=600,h=600,q=80,f=auto/difranca/media/uploads/produtos/foto/b343bdf2bf5cbwhatsapp-image-2022-02-04-at-143247.jpeg" },
    { id: "2", descricao: "Sapato Social de Couro", preco: 399.99, imagemUrl: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/difranca/media/uploads/produtos/foto/zvggjmgd/935-1.jpg" },
    { id: "3", descricao: "Chinelo Slide Unissex", preco: 59.99, imagemUrl: "https://images.tcdn.com.br/img/img_prod/747002/chinelo_slide_hoshwear_degrade_cinza_unissex_633_1_20220718102047.jpg" },
    { id: "4", descricao: "Bota Adventure Impermeável", preco: 499.99, imagemUrl: "https://cdn.awsli.com.br/2500x2500/1041/1041724/produto/222417510/bota-adventure-f-7qtyap9a3c.jpg" },
    { id: "5", descricao: "Tênis Casual Feminino", preco: 199.99, imagemUrl: "https://cdn.sistemawbuy.com.br/arquivos/cd807b26707aff729e16a68e7fd35c27/produtos/64122b483a1aa/1389-101-1-644ad1ec8573b.jpg" },
    { id: "6", descricao: "Sapatilha Conforto", preco: 129.99, imagemUrl: "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/leveeiii/catalog/f10008-preto/f101008-preto-levecomfort-tenis-lev-comfort-lev-confort.jpg" },
    { id: "7", descricao: "Sandália Anabela", preco: 189.99, imagemUrl: "https://cdnv2.moovin.com.br/teffecalcados/imagens/produtos/det/sandalia-anabela-via-marte-11308-103e751ef485161dc76ba51ab2283764.jpg" },
    { id: "8", descricao: "Coturno Militar", preco: 549.99, imagemUrl: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/kallucci/media/uploads/produtos/foto/b9e7ec559965801.JPG" },
    { id: "9", descricao: "Mocassim Casual", preco: 219.99, imagemUrl: "https://dipollini.vtexassets.com/arquivos/ids/176727-800-800?v=638380856092300000&width=800&height=800&aspect=true" },
    { id: "10", descricao: "Pantufa de Lã", preco: 79.99, imagemUrl: "https://cdnv2.moovin.com.br/goldcalcados/imagens/produtos/det/chinelo-pelucia-la-pantufa-kature-423-02ae0f2ff31c7e5d0358cf3d00ecd730.png" },
  ];
  

const uploadProducts = async () => {
  try {
    for (const product of mockProducts) {
      await setDoc(doc(collection(db, "products"), product.id), product);
    }
    console.log("Produtos adicionados ao Firestore!");
  } catch (error) {
    console.error("Erro ao adicionar produtos: ", error);
  }
};

// Função para subir os produtos
uploadProducts();
