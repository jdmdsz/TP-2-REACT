export default function App() {
    return (
        <div>
            <form className="product-form">
            <div className="form-group">
                <label htmlFor="productName">Nome do Produto</label>
                <input type="text" id="productName" placeholder="Informe o nome do produto" />
            </div>
            
            <div className="form-group">
                <label htmlFor="salePrice">Preço de venda</label>
                <input type="text" id="salePrice" placeholder="Informe o preço de venda" />
            </div>
            
            <div className="form-group">
                <label htmlFor="costPrice">Preço de custo</label>
                <input type="text" id="costPrice" placeholder="Informe o preço de custo" />
            </div>

            <div className="form-group">
                <label htmlFor="supplier">Fornecedor</label>
                <select id="supplier">
                    <option>Selecione um fornecedor</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="category">Categoria</label>
                <select id="category">
                    <option>Selecione uma categoria</option>
                </select>
            </div>

            <div className="form-group full-width">
                <label htmlFor="description">Descrição do Produto</label>
                <textarea id="description" placeholder="Informe a descrição do produto"></textarea>
            </div>

            <button type="submit" className="submit-btn">Salvar</button>
        </form>
        </div>
    )
}