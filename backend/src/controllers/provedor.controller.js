import Provedor from '../models/provedor.models.js'


//Funcion para obtener todos los provedores

export const getProves = async (req, res)=>{
    try{
        const proves = await Provedor.find({user: req.user.id})
                                        .populate('user');
        res.json(proves);
    } catch (error){
        console.log(error)
        res.status(500).json({message: 'Error al obtener proveedores'})
    }



}


//Funcion para crear Proveedor
export const createProve = async (req, res)=>{
    try{
        const {name, email, phone, direction} = req.body;
        const newProve = new Provedor({
            name,
            email,
            phone,
            direction,
            user: req.user.id

           // user: req.user.id
        });
        const saveProve = await newProve.save();
        res.json(saveProve)
    } catch (error){
        console.log(error);
        res.status(500).json({message: 'Error al crear al proveedor'})
    }

}

//Funcion para obtener un Proveedor
export const getProve = async (req, res)=>{
    try{
        const prove = await Provedor.findById(req.params.id)
                                    .populate('user')

        if(!prove)
            return res.status(404).json({error: 'Proveedor no encontrado'});
            res.json(prove)
    }catch (error){
        console.log(error);
        res.status(500).json({message: 'Error al obtener el proveedor'})
    }
}


//Funcion para eliminar Proveedor

export const deleteProve = async (req, res)=>{
    try{
        const prove = await Provedor.findByIdAndDelete(req.params.id);
        if(!prove)
            return res.status(404).json({error: 'Proveedor no encontrado'})
            res.json(prove);
    }catch (error){
        console.log(error);
        res.status(500).json({message: 'Error al eliminar el proveedor'})
    }
}

//Funcion para editar
export const editProve = async (req, res)=>{
    try{
        const prove = await Provedor.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!prove)
            return res.status(404).json({error: 'Provedor no encontrado'});
        res.json(prove);
    }catch (error){
        console.log(error)
        res.status(500).json({message: 'Error al actualizar dastos del proveedor'})
    }
}
