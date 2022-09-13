const express = require('express');
const cors = require('cors')
const app = express(); 
app.use(express.json());
app.use(cors());
app.get('/ruta', (req, res)=>{
    try{
        res.status(200).json({
            estado:1,
            mensaje:"Este es un post",
            contenido:[{
                id_person:1,
                nombre:"Edson Vladimir",
                apellido:"Sosa",
                Sexo:"M",
                descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                Pais:"Bolivia",
                edad:32
            }, {
                id_person:2,
                nombre:"Juan",
                apellido:"Perez",
                Sexo:"M",
                descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                Pais:"Bolivia",
                edad:25
            },
            {
                id_person:3,
                nombre:"Sara",
                apellido:"Gallardo",
                Sexo:"F",
                descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                Pais:"Bolivia",
                edad:30
            },
            {
                id_person:3,
                nombre:"Fernando",
                apellido:"Gallardo",
                Sexo:"M",
                descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                Pais:"Bolivia",
                edad:30
            },
            {
                id_person:3,
                nombre:"Margarita",
                apellido:"Gallardo",
                Sexo:"F",
                descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                Pais:"Bolivia",
                edad:30
            }
            ,
            {
                id_person:3,
                nombre:"Maria",
                apellido:"Gallardo",
                Sexo:"F",
                descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                Pais:"Bolivia",
                edad:30
            }
            ,
            {
                id_person:3,
                nombre:"MarLene",
                apellido:"Gallardo",
                Sexo:"F",
                descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                Pais:"Bolivia",
                edad:30
            }]
        })
    }  catch(error){}
})

app.post('/registro', (req, res)=>{
    
    console.log(req.body);
    try {
        res.status(200).json({
            estado:1,
            mensaje:"Este es un post"
        })
    } catch(error){
        res.status(500).json({
            estado:0,
            mensaje:"error en el servidor"
        })
    }
})
 app.put('/cambio', (req, res) => {
    try {

    res.status(200).json({
            estado:1,
            mensaje:"Este es un PUT"
        })
    } catch(error){
        res.status(500).json({
            estado:0,
            mensaje:"error en el servidor"
        })
    }
 })
  app.delete('/borrar/:id/:idAux', (req, res) => {
      console.log(req);
        let id_persona = req.params.id;
        let id_aux = req.params.idAux;
        console.log(id_persona, id_aux);
    try {
        res.status(200).json({
            estado:1,
            mensaje:"Este es un DELETE"
        })
    } catch(error){
        res.status(500).json({
            estado:0,
            mensaje:"error en el servidor"
        })
    }
 })

app.post('/inscripcion',(req, res)=>{
    const {nombre, apellido, Sexo, Pais, edad} = req.body;

    try {
        res.status(200).json({
            estado:true,
            mensaje:"Servicio ejecutado correctamente!!",
            contenido:{nombre,apellido,Sexo, Pais, edad}
        })
    } catch(error) {
        res.status(500).json({
            estado:0,
            mensaje:"Error en el Servidor!!"
        })
    }
})

let port =3000;
console.log('API escuchando en el puerto ' + port)
app.listen(port);
