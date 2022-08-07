
const Burger = ({ title, ingredients, price, quantity, icon, photo }) => {
    return (
        <div class="item">
            <img className="burgerPhoto grow" src={require(`../assets/${photo? photo:'photo_default.png'}`)} alt="Burger" />
            <div class="details">
                <h3><i><img src={require(`../assets/${icon}`)} alt={title} /></i><b>{title}</b>
                <div class="price">{price}</div>
                </h3>
                <b>Ingredientes : </b>
                {ingredients}
            </div>
        </div>
    );
}

export default Burger;