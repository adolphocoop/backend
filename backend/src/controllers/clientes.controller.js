import  Cliente from '../models/clientes.model.js'


//funcion para obtener clientes
export const getClients = async (req, res) => {
    try{
        const clients = await Cliente.find({user: req.user.id})
                                    .populate('user');

        res.json(clients)
    }catch (error){
        console.log(error)
        res.status(500).json({menssage: "Error al obtener clientes"})

    }
};

//funcion para crear cliente
export const createCliente = async (req, res)=>{
    try{
    const { name, lastname, phone, email, direction} =req.body;
    const newClient = new Cliente({
        name,
        lastname,
        phone,
        email,
        direction,
        user: req.user.id
    });
    const savedClient = await newClient.save();
    res.json(savedClient)
    }catch (error){
        console.log(error)
        res.status(500).json({message: "Error al dar de alta al cliente"})
    }
};

//Funcion para obtener un cliente
export const getCliente = async (req, res) =>{
    try{
        const client = await Cliente.findById(req.params.id)
                                    .populate('user')
        if(!client)
            return res.status(404).json({message: "Cliente no encontrado"})
            res.json(client)
    }catch (error) {
        console.log(error)
        res.status(500).json({message: "Error al obtener el cliente"})
    }

};

//Funcion para eliminar
export const deleteCliente = async (req, res) =>{
    try{
        const client = await Cliente.findByIdAndDelete(req.params.id)
        if(!client)
            return res.status(404).json({message: "Cliente no encontrado"})
            res.json(client)
    } catch (error){
        console.log(error)
        res.status(500).json({message: "Error al eliminar al cliente"})

    }
}

//Funcion para editar cliente
export const editCliente = async (req, res)=>{
    try{
        const client = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!client)
            return res.status(404).json({message: "Cliente no encontrado"})
            res.json(client)
    } catch(error) {
            console.log(error)
            res.status(500).json({message: "Error al actualizar datos del cliente"})

    }

}