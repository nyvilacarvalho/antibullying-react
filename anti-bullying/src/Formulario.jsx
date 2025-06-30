import { useState } from 'react'
import { useEffect, useRef } from 'react';


function Formulario() {
  const [count, setCount] = useState(0)

  const boll1Ref = useRef(null);
const boll2Ref = useRef(null);
const triangleRef = useRef(null);

useEffect(() => {
  setTimeout(() => {
    if (boll1Ref.current) {
      boll1Ref.current.style.transform = 'translate(0, 0)';
      boll1Ref.current.style.opacity = '1';
    }
    if (boll2Ref.current) {
      boll2Ref.current.style.transform = 'translate(0, 0)';
      boll2Ref.current.style.opacity = '1';
    }
    if (triangleRef.current) {
      triangleRef.current.style.transform = 'translate(0, 0)';
      triangleRef.current.style.opacity = '1';
    }
  }, 100);
}, []);


  return (
    <>

    <div className="container">

<div className="boll-1 start-left" ref={boll1Ref}></div>
<div className="boll-2 start-left" ref={boll2Ref}></div>
<div className="triangle start-right" ref={triangleRef}></div>


      <div className="header">
        <h1>Denuncie casos de bullying de forma anônima e segura.</h1>
        <h2>Sua voz <span className="color">importa!</span></h2>
      </div>
         

<div className="identification">
    <div className="box-1">
      <label htmlFor="nome">Nome</label><br/>
      <input type="text" name="text"  placeholder="Nome completo"/>
    </div>

    <div className="box-2">
      <label htmlForfor="nome">Email</label><br/>
      <input type="email" name="email" placeholder="ava.wright@gmail.com"/>
    </div>
  </div>
  
  <div className="box-3">
    <p>Deseja fazer a denúncia de forma anônima?</p>
    <label htmlfor="anonimo-sim">Sim</label>
    <input type="radio" className="custom-radio" name="anonimo"/>
    
    <label htmlForfor="anonimo-nao">Não</label>
    <input type="radio" className="custom-radio" name="anonimo"/>
  </div>

<div className="infos">
 <h3>informações sobre o Bullying</h3>
<p>Descrição do ocorrido</p>
<textarea rows="5"  placeholder="Descrição do fato..."></textarea>
</div>
              
            <div className="infos">
                  <h3>Tipo de bullying:</h3>
                   <input type="radio" className="custom-radio" /> 
                   <label for="type">Físico (agressão, empurroções, etc.)</label><br/>
                
                  <input type="radio" className="custom-radio" /> 
                  <label for="type">Verbal (xingamentos, insultodos, etc.)</label><br/>
                  
                  <input type="radio" className="custom-radio"/> 
                  <label for="type">Cyberbullying (mensagens ofensivas, exposição, etc.)</label><br/>
                
                  <input type="radio" class="custom-radio"/>
                  <label for="type">Exclusão social (exclusão de grupos, isolamento, etc.)</label>
                </div>

      <div className="infos">
     <h3>Informações sobre o(s) Envolvido(s)</h3>

     <p>Quem praticou o bullying?</p>
     <input type="text" name="" />
</div>

<div className="infos">
     <p>Acontece com frequência?</p>
     <label htmlfor="">Sim</label>
      <input type="radio" name="select-1" className="custom-radio"/>
      <label htmlfor="">Não</label>
     <input type="radio" name="select-1" className="custom-radio"/>

    </div>
    
    <div className="infos">
     <p>Já denunciou antes?</p>
     <label>Sim</label>
     <input type="radio" className="custom-radio" name="select-2"/>

      <label>Não</label>
      <input type="radio" class="custom-radio" name="select-2"/>
    </div>


    <div className="infos">
     <p>Local onde aconteceu?</p>
     <input type="text" name="" />
    </div>

    <div className="infos">
      <label for="fileUpload">Evidencias</label>
      <input type="file" id="fileUpload" name="arquivo"/>
    </div>

    <div className="infos">
     <button type="submit">Enviar denúncia</button>    
</div>

</div>
    
    </>
  )
}

export default Formulario
