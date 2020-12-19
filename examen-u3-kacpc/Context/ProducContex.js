import React, {createContext, useState} from 'react';

export const ProducContex = createContext();

const ProductosProvider = (props)=>{
    const [productos, setProductos] = useState([
        {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899},
        {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999},
        {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850},
        {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949},
        {codigo:5,descripcion:"Mochila Xiaomi", precio:699},
        {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999},
        {codigo:7,descripcion:"Xiaomi Redmi Note 8s", precio:4989},
        {codigo:8,descripcion:"Mochila Targus", precio:999},
        {codigo:9,descripcion:"Teclado Logitech", precio:1489},
    ]);
    const [carrito, setCarrito]= useState([]);
    const [total, setTotal]=useState([]);

    const eliminar =(index,precio)=>{
       alert("Eliminado");
        const temporal = carrito.filter((a,i)=>i!==index)
        setCarrito(temporal)
        setTotal(Number(total)-Number(precio))
    }


    const agregar =(productos, precio)=>{
      alert("Agregado");
     const carrito =  {codigo: productos.codigo, descripcion: productos.descripcion,
            precio: productos.precio};
            setCarrito(productos => [...productos, carrito]);
            setTotal(Number(total)+Number(precio))
    }
    return(
        <ProducContex.Provider
            value={{
                productos,
                carrito,
                setProductos,
                setCarrito,
                total,
                setTotal,
                agregar,
                eliminar
            }}
        >
            {props.children}

        </ProducContex.Provider>
    )
}

export default ProductosProvider;