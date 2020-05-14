import React, {useState} from 'react';
import headerImg from '../images/header.png'
import two from '../images/2.png'
import running from '../images/running.png'
import selfdefence from '../images/selfdefence.png'
import schueleImg from '../images/interface.svg'
import moneyImg from '../images/business-and-finance.svg'
import rulesImg from '../images/business.svg'

const FrontPage = () => {
    
    const [{schuele, prices, rules}, setView] = useState({ schuele:true, prices:false, rules:false })

    return (
            <div  className='container'>
                <header>
                    <div>
                        <h1> Sobre Nosotros </h1>
                        <p>
                            Estamos ubicados en el gimnasio cubierto de Caripe, estado Monagas
                            <br/>
                            abrimos los lunes, miercoles y viernes de 3:30pm a 5:30pm             
                        </p>
                        
                    </div>
                    <img src={headerImg} alt="headerImg" className='headerImg'/>
                </header>

                <Section 
                    title='Defensa Personal'
                    pContent='Enseñansas de tecnicas para defensa en situaciones peligrosas, como asaltos con mano armada, 
                    robos y varios tipos de ataque. Se le enseyara al alumno a tener seguridad en si mismo, otorgandole protecíon hacia
                    si y a sus allegados'
                    color={'rgb(0, 110, 255)'}
                    img={selfdefence}
                    spanClass={'moreRight'}
                    imgClass={'blueBorder'}
                />

                <Section 
                    title='Excursiones'
                    pContent='En dias especiales se realizan excursiones a las montañas, donde se entrena fuertemente y se realizan actividades
                    como compartir y el aprecio de la belleza natural que rodea a el municipio Caripe.'
                    color='rgb(19, 160, 0)'
                    img={two}
                    spanClass={'moreLeft'}
                    imgClass={'greenBorder'}
                    divPosition={'absoluteRight'}
                />

                <Section 
                    title='Pruebas de Resistencia y Competencias'
                    pContent='Nuestros entrenamientos se caracterizan por su intensidad física, se realizan todo tipo de ejercicios
                    que fortalezen todas las partes del cuerpo, incluyendo la mente. '
                    color='rgb(255, 0, 34)'
                    img={running}
                    spanClass={'moreRight'}
                    imgClass={'redBorder'}
                />

                <section className='frontPage-infoSection'>
                    <div className='frontPage-buttonWrap'>
                        <Button 
                        imgSrc={schueleImg} 
                        content='Horario' 
                        variable={schuele}
                        funct={()=>setView({ schuele:true, prices:false, rules:false })}/>
                        <Button 
                        imgSrc={moneyImg} 
                        content='Precios' 
                        variable={prices}
                        funct={()=>setView({ schuele:false, prices:true, rules:false })}/>
                        <Button 
                        imgSrc={rulesImg} 
                        content='Reglas' 
                        variable={rules}
                        funct={()=>setView({ schuele:false, prices:false, rules:true })}/>
                    </div>
                    <div>
                        <p className={(schuele||prices)?'opacity':'noOpacity'}>  
                        {schuele?
                        'las clases son los lunes, miercoles y viernes a las 3:30pm a 5:30pm, en ocaciones especiales el horario y lugar de entrenamiento puede variar'
                        :prices?
                        <> si quiere saber nuestros precios contactenos <a href="/contacto"> aqui </a> </>
                        :false
                        }
                        </p>
                        <ul style={rules? {display:'block'} : {display:'none'}}>
                            <li> Los nuevos integrantes tienen que tener mono azul y camisa blanca, despues es nescesario un uniforme de karate </li>
                            <li> Al dirigirse a el Sensei decir 'OS' igual para responder a ordenes se tiene que decir 'OS' </li>
                            <li> Se prohibe el lenguaje vulgar y accesorios como pulseras, anillos y aretes </li>
                            <li> Respetar a todos los integrantes del dojo y la jerarquia que existe en el sistema </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    

}

const Section = ({title, pContent, color, img, spanClass, imgClass, divPosition}) => {
    return (
        <section className='frontPage-section'>
        <div className={divPosition? divPosition : undefined}>
            <h1 style={{color:color}}> {title} </h1>
            <p>
               {pContent}
            </p>
        </div>
        <img src={img} className={`sectionFrontImage ${imgClass}`} alt="class" />
        <span style={ {backgroundColor:color} } className={spanClass}  ></span>
    </section>
    )
}

export const Button = ({imgSrc, content, funct, variable}) => {
return (
<div className={variable? 'second-class' : 'info-button-wrap'} onClick={funct}> 
    <img src={imgSrc} alt="icon"/>
    <button>  
        {content}
    </button>
    <span></span>    
</div>
)}

export default FrontPage;