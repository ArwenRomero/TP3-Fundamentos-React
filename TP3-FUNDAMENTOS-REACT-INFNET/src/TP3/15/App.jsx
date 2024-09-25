import Product from './Product';

function App() {
  return (
    <div>
      <Product nome="Mesa de Ébano Puro" preco={4499.99} descricao="Mesa de madeira pura Ébano, importada diretametne da Europa." />
      <Product nome="Corda de Escalada" preco={79.99} />
    </div>
  );
}

export default App;