import React from 'react';
import sosai from '../images/sosai.png';
import shihan from '../images/shihan.png';
import sensei from '../images/sensei.png';

const History = () => {
return (
    <div className='history'>
        <HistoryBox 
            imgSrc={sosai} 
            title={'Sosai Masutatsu Oyama'} 
            subTitle={'Fundador de la Kyokushin-kai'} 
            pContent={'Masutatsu Oyama nació en 1923 el 27 de julio en la provincia Gimje, Corea del sur, con el nombre de Choi Yeong-eui. sus entrenamientos lo convirtieron en uno de los peleadores más fuertes de la historia, las leyendas cuentan cómo les cortaba los cuernos a toros usando el canto de la mano. Le demostró al mundo de las artes marciales que con un entrenamiento duro no solo la parte física sino también el espíritu, la mente y buena técnica se logra llegar a la cumbre de la verdad.'} 
            qContent={'- Mil días de entrenamiento, un principiante, diez mil días de entrenamiento, un maestro'}
            color='rgb(255, 30, 0)'
        />
        <HistoryBox 
            imgSrc={shihan} 
            title={'Shihan Enrique Corredor'} 
            subTitle={'Lider de la unión kyokushin-kai en Venezuela'} 
            pContent={'El Shihan Enrique Corredor nace en Venezuela en la ciudad de Caracas el 11 de Abril de 1957, a la edad de 5 años comienza sus estudios de Artes Marciales, empezando con el Judo, luego un año más tarde el Karate. Destancandose en Judo como campeón nacional durante 10 años consecutivos. En Karate participó en los primeros cinco mundiales del Camponato Abierto Mundial de Kyokushinkai, Copa Emperador, Centro Americano y del Caribe, Europeo, Suramericano, diferentes torneos en norteamerica, etc. Acumulando en general más de 300 trofeos, medallas y reconocimientos.'} 
            color='rgb(226, 166, 2)'
        />
        <HistoryBox 
            imgSrc={sensei} 
            title={'Sensei Carlos Azocar'} 
            subTitle={'Lider de la unión kyokushin-kai en el estado Monagas'} 
            pContent={'El sensei Carlos Azocar, nace en la parroquia Teresen municipio Caripe, estado Monagas Venezuela en el año 1965, su padre fue Luis M Azocar y su madre Luisa Velasquez. El Sensei conocio al Shihan Enrique Corredor a los 18 años de edad y empezo sus estudios de artes marciales de karate bajo la enseñanza de este reconocido maestro y especialista en el sistema de karate Mas Oyama que fue alumno directo del maestro fundador de la organización (Masutatsu Oyama), actualmente el Sensei Carlos Azocar ostenta el grado 2° Dan y pertenece a la unión karate kyokushin-kai Venezuela'} 
            qContent={'- Parate para que pelees'}
            color='rgb(0, 110, 255)'
        />
    </div>
)}

const HistoryBox = ({imgSrc, title, subTitle, pContent, qContent, color}) => {
return (
    <div className='history-box'>
        <div>
            <span style={{backgroundColor:color}}></span>
            <h1 style={{color:color}}>
                {title}
            </h1>
            <h2>
                {subTitle}
            </h2>
            <p>
                {pContent}
            </p>
            <q>
                {qContent}
            </q>   
        </div>
        <img src={imgSrc} alt="titleImg"/>
    </div>
)}

export default History;