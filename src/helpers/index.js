export const formatearPrecio = cantidad => {
    return cantidad.toLocaleString('er-US',{
        style: 'currency',
        currency: 'USD'
    })
}