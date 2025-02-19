import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getDocsFromCache,
  limit,
  orderBy,
  query,
  where,
  updateDoc
} from "firebase/firestore";
import { database } from "../database/firebase/firebase"
import produtos from "../database/catalogo/Catalogo.js"
//   import { produtosRapidos } from '../util/cadastroRapdio.js'
//   import { produtos } from '../util/catalogo.js'

export default function ProdutosRepositorio() {

  const db = database;


  async function processarCatalogo() {
    let doc = 1
    const arrayProdutos = produtos;

    arrayProdutos.forEach(async (p) => {
      let docRef = await addDoc(collection(db, "produtos"), p);
      console.log(doc)
      console.log("Produto adicionado com o id: ", docRef.id);
      doc++;
    })

  }

  //Metodo para criar novo produto
  async function cadastrarProduto(produtoOBJ) {
    try {
      const docRef = await addDoc(collection(db, "produtos"), produtoOBJ);
      console.log("Produto adicionado com o id: ", docRef.id);
    } catch (error) {
      console.log('erro ao cadastrar novo produto no firebase: ', error);
    }
  }
  //Recuperar produtos
  async function recuperarProdutos() {
    let produtosList = new Map();
    const querySnapshot = await getDocs(collection(db, "produtos"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.data())
      produtosList.set(doc.id, doc.data())
    });

    return produtosList;
  }

  // recuperando produtos do cache local (vai ser util para otimizar leituras excessivas)
  // mas ainda não sei se o getDocsFromCache atualiza automaticamente quando é feita alguma alteração no firestore ou adicionado um novo documento
  // async function recuperarProdutosDoCache() {
  //   try {
  //     let produtosList = new Map();
  //     const querySnapshot = await getDocsFromCache(collection(db, "produtos"));

  //     if (querySnapshot.size == 0) {
  //       return recuperarFuncionarios();
  //     } else {
  //       querySnapshot.forEach((doc) => {
  //         // console.log(doc.id, doc.data())
  //         produtosList.set(doc.id, doc.data())
  //       })
  //       return produtosList;
  //     }
  //   } catch (error) {
  //     console.log('deu erro ', error);
  //   }
  // }

  // 
  async function recuperarProdutosLimitadosParaTabela() {
    try {
      let produtosList = new Map();
      const produtosRef = collection(db, "produtos");
      const q = query(produtosRef, orderBy("nome", "asc"), limit(8)); // Ordenando por nome em ordem crescente (A-Z)

      let querySnapshot;
      querySnapshot = await getDocsFromCache(q);

      if (querySnapshot.empty) {
        console.log('pegando do firebase');
        querySnapshot = await getDocs(q);
      } else {
        console.log('pegando do cache');
      }

      querySnapshot.forEach((doc) => {
        console.log("carregando produtos do firebase")
        produtosList.set(doc.id, doc.data());
        
      });

      return produtosList;

    } catch (error) {
      console.log('deu erro ', error);
    }
  }



  async function procurarProdutoPorNome(prefix) {
    try {
      let produtosList = new Map();
      const prefixo = prefix[0].toUpperCase() + prefix.substring(1);
      const produtosRef = collection(db, "produtos");

      // Consulta baseada no prefixo
      const produtosQuery = query(
        produtosRef,
        where("nome", ">=", prefixo),
        where("nome", "<=", prefixo + "\uf8ff") // Limite para incluir palavras com o prefixo
      );

      const querySnapshot = await getDocs(produtosQuery);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data().nome);
        produtosList.set(doc.id, doc.data())
      });

      return produtosList;
    } catch (error) {
      console.log('erro ao buscar produtos ', error);
    }

  }

  // metodo para excluir um produto
  async function excluirProdutoPeloIdDoDocumento(idDocProduto) { // é necessário passar o id do documento para fazer a identificação e exclusão
    try {
      const produtoRef = doc(db, "produtos", idDocProduto);
      await deleteDoc(produtoRef);
      console.log("Documento de produto deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar o documento do produto:", error);
    }
  }


  // metodo para atualizar um produto
  async function atualizarProduto(id, novosDados) {
    try {
    const docRef = doc(db, "produtos", id);
      await updateDoc(docRef, novosDados);
      console.log("Documento atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar documento:", error);
    }
  }



  return {
    cadastrarProduto,
    recuperarProdutos,
    processarCatalogo,
    recuperarProdutosLimitadosParaTabela,
    procurarProdutoPorNome,
    excluirProdutoPeloIdDoDocumento,
    atualizarProduto,
    
  }
}