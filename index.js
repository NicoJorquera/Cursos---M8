const express = require("express");
const app = express();
//const bodyParser = require("body-parser");
const {ingresarCurso, verCurso, editarCurso, eliminarCurso} = require("./consulta")

//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

app.listen(3000, () =>{console.log("Puerto concetado")});

app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/index.html")
});

//es "/curso" al ingresar por el localhost:3000/curso
app.post("/curso", async(req, res) =>{
  const nuevo_curso = req.body;
  const ingresar = await ingresarCurso(nuevo_curso)
  res.send(ingresar);
});

app.get("/cursos", async(req, res) =>{
  const ingresar = await verCurso()
  res.send(ingresar);
});

app.put("/curso/:id", async(req, res) =>{
  const {id} = req.params;
  const {curso} = req.body;
  const editar = await editarCurso(id, curso)
  res.send(editar)
});

app.delete("/curso/:id", async(req, res) =>{
  const {id} = req.params;
  const borrar = await eliminarCurso(id)
  res.send(borrar)
})