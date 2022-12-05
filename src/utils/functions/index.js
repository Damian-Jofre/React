export const totalCart = (carrito) => {
    return carrito?.reduce((acc, item) => acc + item.precio * item.quantity, 0);
}