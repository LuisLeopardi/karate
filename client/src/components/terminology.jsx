import React, {useState} from 'react';
import {Button} from './frontPage.jsx';
import fist from '../images/gesture.svg'
import hand from '../images/hands-and-gestures.svg'
import position from '../images/karate-master.svg'
import ten from '../images/ten.svg'
import book from '../images/symbol.svg'
const Terminology = () => {

const [{common, numbers, positions, body, tecniques}, setView] = useState
({ common:false, numbers:false, positions:false, body:false, tecniques:false })
return (
    <>
    <div className='terminology'>
        <div className='frontPage-infoSection'>
            <div className='frontPage-buttonWrap'>
                <Button
                    imgSrc={book} 
                    content='Palabras Comunes' 
                    variable={common}
                    funct={()=>setView({ common:true, numbers:false, positions:false, body:false, tecniques:false })}
                />
                <Button
                    imgSrc={ten} 
                    content='Números' 
                    variable={numbers}
                    funct={()=>setView({ common:false, numbers:true, positions:false, body:false, tecniques:false })}
                />
                <Button
                    imgSrc={fist} 
                    content='Tecnicas' 
                    variable={tecniques}
                    funct={()=>setView({ common:false, numbers:false, positions:false, body:false, tecniques:true })}
                />
                <Button
                    imgSrc={hand} 
                    content='Partes del Cuerpo' 
                    variable={body}
                    funct={()=>setView({ common:false, numbers:false, positions:false, body:true, tecniques:false })}
                />
                <Button
                    imgSrc={position} 
                    content='Posiciones' 
                    variable={positions}
                    funct={()=>setView({ common:false, numbers:false, positions:true, body:false, tecniques:false })}
                />
                </div>
            </div>
        </div>  
    
        <Words 
            common={common}
            numbers={numbers}
            positions={positions}
            body={body}
            tecniques={tecniques}
        />
</>
)}
   

const Words = ({common, numbers, positions, body, tecniques}) => {
const generalWords = [
    {jap: 'karate', esp: 'mano vacia'},
    {jap: 'kara', esp: 'vacio'},
    {jap: 'te', esp: 'mano'},
    {jap: 'karate ka', esp: 'persona entrenada en karate'},
    {jap: 'sensei', esp: 'profesor'},
    {jap: 'shihan', esp: 'maestro'},
    {jap: 'sosai', esp: 'lider'},
    {jap: 'Masutatsu oyama', esp: 'montaña magnifica'},
    {jap: 'kyokushin-kai', esp: 'la cumbre de la verdad'},
    {jap: 'dojo kun', esp: 'fundamentos espirituales'},
    {jap: 'Mawatte', esp: 'dar la vuelta'},
    {jap: 'seiza', esp: 'arrodillarse'},
    {jap: 'kiritsu', esp: 'levantarse'},
    {jap: 'rei', esp: 'saludo'},
    {jap: 'os', esp: 'saludo'},
    {jap: 'kia', esp: 'grito'},
    {jap: 'otagai', esp: 'alumnos'},
    {jap: 'dojosei', esp: 'alumno'},
    {jap: 'sempai', esp: 'alumno mas avanzado'},
    {jap: 'kata', esp: 'forma'},
    {jap: 'chudan', esp: 'medio'},
    {jap: 'jodan', esp: 'alto'},
    {jap: 'gedan', esp: 'bajo'},
    {jap: 'tobi', esp: 'salto'},
    {jap: 'dogui', esp: 'chaqueta'},
    {jap: 'obi', esp: 'cinturon'},
    {jap: 'joe', esp: 'prestar atencion'},
    {jap: 'naore', esp: 'retornar a la posicion anterior'},
    {jap: 'hajime', esp: 'empezar'},
    {jap: 'yame', esp: 'parar'},
    {jap: 'Mokusō', esp: 'cerrar los ojos'},
    {jap: 'dashi', esp: 'posicion'},
    {jap: 'kyu', esp: 'grado'},
    {jap: 'tsuki', esp: 'golpe'},
    {jap: 'geri', esp: 'patada'},
    {jap: 'ura', esp: 'reverso'},
    {jap: 'soto', esp: 'afuera'},
    {jap: 'uchi', esp: 'dentro'},
    {jap: 'waza', esp: 'tecnica'},
    {jap: 'shidoi', esp: 'instructor'},
    {jap: 'Soshi Shihan', esp: 'maestro de maestro'},
    {jap: 'kancho', esp: 'maestro fundador'},
    {jap: 'aka', esp: 'rojo'},
    {jap: 'aka no kachi', esp: 'rojo gana'},
    {jap: 'shiro', esp: 'blanco'},
    {jap: 'shomen', esp: 'frente'},
    {jap: 'Shomen ni rei', esp: 'saludar hacia el frente'},
    {jap: 'do', esp: 'camino'},
    {jap: 'budo', esp:'camino del guerrero'},
    {jap: 'bushido', esp: 'codigo de honor'},
    {jap: 'hara', esp: 'abdomen'},
    {jap: 'hizo', esp: 'costado'},
    {jap: 'ibuki', esp: 'tecnica de respiracion'},
    {jap: 'renraku', esp: 'tecnica de encadenamiento'},
    {jap: 'kumite', esp: 'combate'},
    {jap: 'idogeiko', esp: 'tecnica basica con desplazamiento'},
    {jap: 'kihon', esp: 'tecnica basica sin desplazamiento'},
    {jap: 'kake', esp: 'gancho'},
    {jap: 'juji', esp: 'cruzar'},
    {jap: 'morote', esp: 'ambos'},
    {jap: 'kansetsu', esp: 'articulacion'},
    {jap: 'kamaette', esp: 'ejecutar la tecnica'},
    {jap: 'mate', esp: 'culminacion'},
    {jap: 'guam', esp: 'antebrazo'},
    {jap: 'kote', esp:' parte superior del antebrazo'},
    {jap: 'arigato', esp: 'gracias'},
    {jap: 'arigato gozaimasu' , esp:' muchas gracias'},
    {jap: 'sayonara' , esp: 'adios'},
    {jap: 'Kohai' , esp: 'alumno menor'},
    {jap: 'Kyoku' , esp: 'lo ultimo-supremo'},
    {jap: 'shin' , esp: 'verdad corazón espiritual'},
    {jap: 'ashi dori' , esp: 'avanzar'},
    {jap: 'atomo dori' , esp: 'retroceder'},
    {jap: 'migui' , esp: 'derecha'},
    {jap: 'hidari' , esp: 'izquierda'},
    {jap: 'naka', esp: 'centro'},
    {jap: 'sayu', esp: 'derecha e izquierda'},
    {jap: 'gammen', esp: 'cara'},
    {jap: 'nyumon', esp: 'unirse al dojo'},
    {jap: 'hamon', esp: 'excomunicado'},
    {jap: 'shonen bu', esp: 'clase de niños'},
    {jap: 'jyoshi bu', esp: 'clase de mujeres'},
    {jap: 'ippan bu', esp: 'clase regular de adultos'},
    {jap: 'sonen bu', esp: 'clase avanzada'},
    {jap: 'kosa', esp: 'alternar posicion'},
    {jap: 'kotai', esp: 'cambio de pareja'},
    {jap: 'kokusai' , esp: 'internacional'},
    {jap: 'zanshin' , esp: 'estado de alerta'},
    {jap: 'mushin' , esp: 'estado de ralajacion'},
    {jap: 'nogare' , esp: 'repiracion relajada'},
    {jap: 'renmei' , esp: 'federacion'},
    {jap: 'renma' , esp: 'practica de perfeccionamiento'},
    {jap: 'seishin' , esp: 'espiriu'},
    {jap: 'hantai' , esp: 'opuesto'},
    {jap: 'yasume' , esp: 'descanzo'},
    {jap: 'ryu' , esp: 'sistema'},
    {jap: 'Tameshiwari' , esp: 'ejercicio de rompimiento'},
    {jap: 'shodan shinsa', esp: 'examen de cinturon negro'},
    {jap: 'shokyu shinsa', esp: 'examen de cinturones de color'},
    {jap: 'goshin jutsu', esp: 'defensa personal'},
    {jap: 'ki', esp: 'energia interna'},
    {jap: 'yudansha', esp: 'cinturon negro'},
    {jap: 'kuroi obi', esp: 'cinturon negro'},
    {jap: 'kuro', esp: 'negro'},
    {jap: 'kiiro', esp: 'amarillo'},
    {jap: 'ao', esp: 'azul'},
    {jap: 'cha', esp: 'marron'},
    {jap: 'midori', esp: 'verde'},
    {jap: 'hanshi', esp: 'miembro honorable'},
    {jap: 'yakusoku kumite', esp: 'combate arreglado'},
    {jap: 'ippon kumite', esp:' combate a un paso'},
    {jap: 'sanbon kumite', esp: 'combate a tres pasos'},
    {jap: 'jiyu kumite', esp: 'combate libre'},
    {jap: 'jissen kumite', esp: 'combate de contacto completo'},
    {jap: 'keiko hajime masu', esp: 'la capacitacion a comenzado'},
    {jap: 'keiko wari masu', esp: 'la capacitacion a terminado'},
    {jap: 'keiko yasime masu', esp: 'descanzo durante el entrenamiento'},
    {jap: 'kizami', esp: 'pinchazo, punzada'},
    {jap: 'kime', esp:'enfocar el poder la fuerza'},
    {jap: 'koshi', esp: 'cintura'},
    {jap: 'maai', esp: 'intervalo entre oponentes'},
    {jap: 'makiwara', esp: 'poste para golpear'},
    {jap: 'mugorei', esp: 'sin conteo'},
    {jap: 'happo' , esp: 'ocho direcciones'},
    {jap: 'naname' , esp: 'diagonal, 45 grados'},
    {jap: 'oroshi' , esp: 'descendiente'},
]
const japNumbers = [
    {jap: 'ichi' , esp: 'uno' },
    {jap: 'ni' , esp: 'dos' },
    {jap: 'san' , esp: 'tres' },
    {jap: 'shi/yon' , esp: 'cuatro' },
    {jap: 'go' , esp: 'cinco' },
    {jap: 'roku' , esp: 'seis' },
    {jap: 'sichi/nana' , esp: 'siete' },
    {jap: 'hachi' , esp: 'ocho' },
    {jap: 'ku' , esp: 'nueve' },
    {jap: 'yu' , esp: 'diez' },
    {jap: 'ju ichi' , esp: 'once' },
    {jap: 'ju ni ', esp: 'doce' },
    {jap: 'ju san' , esp: 'trece' },
    {jap: 'ju chi' , esp: 'catorce' },
    {jap: 'ju go' , esp: 'quince' },
    {jap: 'ju roku' , esp: 'dieciseis' },
    {jap: 'ju sichi' , esp: 'diecisiete' },
    {jap: 'ju hachi' , esp: 'dieciocho' },
    {jap: 'ju ku' , esp: 'diecinueve' },
    {jap: 'ni ju' , esp: 'veinte' },
    {jap: 'san ju' , esp: 'treinta' },
    {jap: 'yon ju ', esp: 'cuarenta' },
    {jap: 'go ju' , esp: 'cincuenta' },
    {jap: 'roku ju' , esp: 'sesenta' },
    {jap: 'nana ju' , esp: 'setenta' },
    {jap: 'hachi ju' , esp: 'ochenta' },
    {jap: 'kyu ju' , esp: 'noventa' },
    {jap: 'hyaku' , esp: 'cien' },
    {jap: 'nihyaku' , esp: 'docientos' },
    {jap: 'sanbyaku' , esp: 'trecientos' },
    {jap: 'yonhyaku' , esp: 'cuatrocientos' },
    {jap: 'gohyaku' , esp: 'quinientos' },
    {jap: 'roppyaku' , esp: 'seiscientos' },
    {jap: 'nanahyaku' , esp: 'setecientos' },
    {jap: 'happyaku' , esp: 'ochocientos' },
    {jap: 'kyūhyaku' , esp: 'novecientos' },
    {jap: 'sen' , esp: 'mil' },
]
const tecnq = [
    {jap: 'oitsuki' , esp: 'golpe fundamental' },
	{jap: 'gyaku tsuki' , esp: 'golpe contrario' },
	{jap: 'chudan tsuki' , esp: 'golpe medio' },
	{jap: 'mawashi geri' , esp: 'patada en boleo' },
	{jap: 'mae geri' , esp: 'patada de frente '},
	{jap: 'kin geri' , esp: 'patada a los testiculos' },
	{jap: 'ushiro geri' , esp: 'patada hacia atras' },
	{jap: 'uchi mawashi geri' , esp: 'patada hacia afuera' },
	{jap: 'soto mawashi geri' , esp: 'patada hacia adentro' },
	{jap: 'gedan barae'  , esp: 'defensa baja' },
	{jap: 'jodan age uke' , esp: 'defensa alta' },
	{jap: 'yoko geri' , esp: 'patada lateral' },
	{jap: 'hiza geri' , esp: 'rodillazo' },
	{jap: 'tobi mae geri' , esp: 'patada en salto al frente' },
	{jap: 'tobi mawashi geri' , esp: 'patada en salto en boleo' },
	{jap: 'shita tsuki' , esp: 'puño bajo invertido' },
	{jap: 'morote tsuki' , esp: 'doble puño' },
	{jap: 'jun tsuki' , esp: 'puño lanza' },
	{jap: 'ashi barai' , esp: 'barrido de pies' },
	{jap: 'uraken gammen uchi' , esp: 'puño reverso a la cara' },
	{jap: 'uraken hizo uchi'  , esp: 'puño reverso al costado' },
	{jap: 'uraken sayu uchi'  , esp: 'puño reverso a los lados' },
	{jap: 'seiken ago uchi' , esp: 'golpe a la mandibula' },
	{jap: 'uchi uke' , esp: 'defensa hacia afuera' },
	{jap: 'soto uke' , esp: 'defensa hacia adentro' },
	{jap: 'shuto uke'  , esp: 'golpe con mano de cuchillo' },
	{jap: 'shuto uchi uchi'  , esp: 'circular exterior a la cien o cuello' },
	{jap: 'shuto hizo uchi' , esp: 'circular al costado y costillas' },
	{jap: 'nidan geri' , esp: 'patada en salto descendiente' },
	{jap: 'kakato otoshi' , esp: 'patada de hacha' },
	{jap: 'do mawashi kaiten geri' , esp: 'patada de rueda/suicida' },
	{jap: 'kansetsu geri' , esp: 'patada a la articulacion' },
	{jap: 'taiatari' , esp: 'tacleada' },
	{jap: 'okuri ashi' , esp: 'barajando pasos' },
	{jap: 'mae geri kekomi' , esp: 'patada de frente con penetracion' },
]
const bodyParts = [
    {jap: 'ago' , esp: 'quijada' },
	{jap:  'seiken' , esp: 'parte frontal del puño' },
	{jap:  'haisoku' , esp: 'empeine' },
	{jap:  'chutsoku' , esp: 'parte carnosa del pie' },
	{jap:  'hiji/empi' , esp: 'codo' },
	{jap:  'sune' , esp: 'espinilla' }		,	
	{jap:  'shuto' , esp: 'kanto de la mano' },
	{jap:  'giraken' , esp: 'mano de oso' },
	{jap:  'Tetsui' , esp: 'golpe martillo' },
	{jap:  'hiza' , esp: 'rodilla' },
	{jap:  'teisoku' , esp: 'borde interno del pie' },
	{jap:  'sokuto' , esp: 'kanto de la mano' },
	{jap:  'kakato' , esp: 'talon' },
	{jap:  'nukite' , esp: 'punta de los dedos' },
	{jap:  'oyayubi' , esp: 'pulgar' },
	{jap:  'hitosashiyubi' , esp: 'indice' },
	{jap:  'nakayubi' , esp: 'dedo medio' },
	{jap:  'kusuriyubi' , esp: 'dedo anular' },
	{jap:  'koyubi' , esp: 'meñique' },
	{jap:  'mimi' , esp: 'orejas' },
	{jap:  'kushi' , esp: 'boca' },
	{jap:  'rokkotsu' , esp: 'costilla' },
	{jap:  'nodo' , esp: 'garganta' },
	{jap:  'kento' , esp:'nudillos principales' },
	{jap:  'hana' , esp: 'nariz' },
	{jap:  'mune' , esp: 'pecho' },
	{jap:  'me' , esp: 'ojos' },
	{jap:  'kinteki' , esp: 'testiculos' },
	{jap:  'toho' , esp: 'mano en forma de herradura' },
	{jap:  'shotei' , esp: 'base de la mano' },
	{jap:  'ryutoken' , esp: 'puño de dragon' },
	{jap:  'hiraken' , esp: 'puño plano/mano de oso' },
	{jap:  'haisho' , esp: 'reverso de la mano' },
	{jap:  'koken' , esp: 'muñeca' },
	{jap:  'atama' , esp: 'cabeza' },
    {jap:  'tsumasaki' , esp: 'dedo del pie' }
]
const pos = [
    {jap: 'sencutsu dachi' , esp: 'posicion de avance' },
    {jap: 'sanchin dachi' , esp: 'posicion reloj' },
    {jap: 'geiko dachi' , esp: 'posicion de pies paralelos separados' },
    {jap: 'haisoku dachi' , esp: 'posicion de pies paralelos juntos' },
    {jap: 'kiba dachi' , esp: 'posicion jinete' },
    {jap: 'kokutsu dachi' , esp: 'posicion de impulso' },
    {jap: 'musumi dachi' , esp: 'posicion firme' },
    {jap: 'tsuru dachi' , esp: 'posicion grulla' },
    {jap: 'kake dashi' , esp: 'posicion gancho' },
    {jap: 'moro ashi dashi' , esp: 'posicion de ambos pies' },
]
return (
<ul className='word-list'>
{
    common?
    generalWords.map( (e,i) =>
        <li className={i%2?'lightBlue':'lightGray'} key={e.jap}> 
            <p className='first-p'>{ e.jap }</p>    
            <p className='second-p'>{ e.esp }</p>
        </li>  
    )
    :
    numbers?
    japNumbers.map( (e,i) =>
        <li className={i%2?'lightBlue':'lightGray'} key={e.jap}> { e.jap } <span></span> { e.esp } </li>  
    )
    :
    tecniques?
    tecnq.map( (e,i) =>
        <li className={i%2?'lightBlue':'lightGray'} key={e.jap}> { e.jap } <span></span> { e.esp } </li>  
    )
    :
    body?
    bodyParts.map( (e,i) =>
        <li className={i%2?'lightBlue':'lightGray'} key={e.jap}> { e.jap } <span></span> { e.esp } </li>  
    )
    :
    positions?
    pos.map( (e,i) =>
        <li className={i%2?'lightBlue':'lightGray'} key={e.jap}> { e.jap } <span></span> { e.esp } </li>  
    )
    :
    false
}
</ul>
)}
export default Terminology