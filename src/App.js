

import React,{useState}from 'react'

// criar elemento tabela

const tabelaIMC=()=>{
  return(
    <table border='1' style={{borderCollapse:'collapse'}}>
      <thead>
        <tr>
          <th>Classificação</th>
        </tr>
        <tr>
          <th>IMC</th>
        </tr>

      </thead>
      <tbody>
        <tr>
          <td>Abaixo do Peso</td>
          <td>Abaixo de 18,5</td>
        </tr>
        <tr>
          <td>Peso Normal</td>
          <td>Entre 18,5 e 24,9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 e 29,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau I</td>
          <td>Entre 30 e 34,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau II</td>
          <td>Entre 35 e 39,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau III ou Mórbida</td>
          <td>Maior que 40</td>
        </tr>
        
      </tbody>

    </table>

  )
}

// componente  peso

const fpeso=(p, sp)=>{
  //p=state , sp set altura
  return(
    <div>
      <label>
        Peso
        <input type="text" value={p} onChange={(e)=>{sp(e.target.value)}}/>
      </label>
    </div>
  )

}

//componente Altura
const faltura=(a, sa)=>{
  //a= state e o sa=set altura
  return(
    <div>
      <label>
   Altura
        <input type="text" value={a} onChange={(e)=>{sa(e.target.value)}}/>
      </label>
    </div>
  )

}

//criar a função do botão calcular
const fcalcular=(p,a,sr)=>{
  //p=peso,a=altura,sr=setar o resulto
  const calc=()=>{
   sr(p/(a*a))
    //sr=set resultado
  }
  return(
    <div>
      <button onClick={calc}>calcular</button>
    </div>
  )

}
//criar a função do resultado
const fresultado=(r)=>{
  //r=resultado
  return(
    <div>
      <p>resultado:{r.toFixed(2)}</p>

    </div>
  )

}


export default function App(){
  //criar state peso , altura e resultado
  const[peso,setPeso]=useState(0)
  const[altura,setAltura]=useState(0)
  const[resultado,setResultado]=useState(0)

  return(
    <>
    <h1>calculadora IMC</h1>
    {/* chamar os cmponentes para ser visto na página */}
    {fpeso(peso,setPeso)}
    {faltura(altura,setAltura)}
    {fcalcular(peso,altura,setResultado)}
    {fresultado(resultado)}
    {tabelaIMC()}
    </>
  );
}