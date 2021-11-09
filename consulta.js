const {Pool} = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "",
  database: "cursos",
  port: 5432,
});

async function ingresarCurso(curso){
  try{
    //const asignatura = Object.values(curso)
    const result = await pool.query(`INSERT INTO cursos(nombre, nivel, fecha, duracion) VALUES($1, $2, $3, $4) RETURNING *`/*, asignatura*/)
  }catch(e){
    console.log(e);
    return e;
  }
};

async function verCurso(){
  try{
    const result = await pool.query(`SELECT * from cursos`);
  }catch(e){
    return e;
  }
};

async function editarCurso(id, curso){
  try{
    curso.id = id
    //const asignatura = Object.values(curso)
    const result = await pool.query(`UPDATE cursos SET nombre = $1, nivel = $2, fecha = $3, duracion = $4 WHERE id = $5 RETURNING *`/*, asignatura*/)
  }catch(e){
    console.log(e);
    return e;
  }
};

async function eliminarCurso(id){
  try{
    const result = await pool.query(`DELETE FROM cursos WHERE id='${id}' RETURNING *`);
  }catch(e){
    console.log(e);
    return e;
  }
};

module.exports = {ingresarCurso, verCurso, editarCurso, eliminarCurso}