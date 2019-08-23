import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';


const style = {
  height: '450px',
  width: '400px',
  marginTop: '12%',
  textAlign: 'center',
  display: 'inline-block',
};

// VARIABLE QUE NOS AYUDARA A GUARDAR EL SETTIMEOUT PARA EN SU MOMENTO LIMPIARLO
let setTime;



class CodeChallenge extends Component {
  
  state={
    arrImages:[
      {
        image:"https://alfaromeo.mx/download.aspx?strDownloadKey=eL2ltZy9hdXRvcy9naXVsaWEtcXVhZHJpZm9nbGlvL2dhbGVyaWEvZ2l1bGlhLXF1YWRyaWZvZ2xpby1nYWxlcmlhLWV4dC02LmpwZw==",
        name:"Alfa Romeo Giulia / Giulia Quadrifoglio",
        description:"La evolución de un auto clásico no puede ser más poderosa que ésta, con un “mínimo” cambio representado por un nuevo motor Ferrari 505-hp twin-turbo V-6 en su mejor versión. Por cierto, a sacar los ahorros porque las diferentes variantes van de los 38 a los 75 mil dólares"
      },
      {
        image:"https://img.automexico.com/2019/06/14/jHHvkzUg/2018-audi-rs3-second-drive-c0a7.jpg",
        name:"Audi RS3",
        description:"Manejar un sueño, así se define esta belleza de 400 hp capaz de acelerar de 0 a 60 en 3.5 segundos gracias a su motor de cinco en línea de 2.0. Para ponerlo en tu garage tendrás que depositar la módica suma de 56  mil dólares."
      },
      {
        image:"https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2019/performance/camaro/colorizer/01-images/2019-camaro-coupe-2ss-gaz-colorizer.jpg?imwidth=1200",
        name:"Chevrolet Camaro V-6 / SS / ZL1 Coupes",
        description:"Tres variantes de un clásico americano que esta vez llega con una primera variable “menos potente” DOHC 24-valvulas de 3.6-litros V-6, 335 hp, hasta la súper poderosa súper cargada, intercooled pushrod 16-válvulas de 6.2-liter V-8, 650 hp. Con precios que van de los 28 mil a 71 mil dólares."
      },
      {
        image:"https://cdn.motor1.com/images/mgl/BBJzj/s1/2017-chevy-corvette-grand-sport-first-drive.jpg",
        name:"Chevrolet Corvette Grand Sport",
        description:"Otra belleza americana que llega a la lista, gracias a su motor pushrod de 16-válvulas de 6.2-litros V-8, con 460 hp, que sin embargo es tan manejable y seguro que es capaz de una velocidad de 70 millas a detenerse en seco en solo 120 pies. Su costo va de 66 mil a 70,600 dólares."
      },
      {
        image:"https://www.louisvillehondaworld.com/static/dealer-12017/2019-accord-1.jpg",
        name:"Honda Accord",
        description:"Esta lista necesitaba un sedán y evidentemente tenía que ser japonés. Belleza estética, versatilidad y relación precio-calidad. Este angelito tiene un motor turbo de 16 válvulas capaz de generar 195 hp. Sus costos van de los 25 mil a los 37 mil dólares."
      },
      {
        image:"https://www.tflcar.com/wp-content/uploads/2017/03/2018-Civic-Type-R-655.jpeg",
        name:"Honda Civic Sport / Si / Type R",
        description:"Tras años en los que el Civic se fue hundiendo poco a poco en sus propios defectos, esta nueva evolución lo lleva de nuevo a la gloria con una máquina turbocargada de 2.0, 16 válvulas, 4 cilindros en línea que da 306 hp en su mejor versión. Sus costos van de los 22 mil a los 35 mil dólares."
      },
      {
        image:"https://the-drive.imgix.net/https%3A%2F%2Fapi.thedrive.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fmiata-rf-hero.jpg%3Fquality%3D85?w=1440&auto=compress%2Cformat&ixlib=js-1.4.1&s=8e0a334007f09ebdbe149a0e6d1a7c70",
        name:"Mazda MX-5 Miata / RF",
        description:"Este pequeño Mazda sin duda es el símbolo del famoso “zoom-zoom”, con una máquina que desarrolla 155 hp, pero tan ligero que resulta divertido manejarlo. Puede ser tuyo si desembolsas entre 26 y 33 mil dólares."
      },
      {
        image:"https://di-uploads-development.s3.amazonaws.com/mercedesbenzofsugarland/uploads/2017/07/2018-E-SEDAN-AMG-CAROUSEL-TOP-2-3-DR.jpg",
        name:"Mercedes-Benz E400 / Mercedes-AMG E43",
        description:"La modernidad tiene sus clásicos y así este monstruo alemán a todo lujo. Dos versiones de máquinas, ambas turbocargadas de 24 válvulas y 3.0, salvo que una va a 329 y la otra a 396 hp. El precio de este lujo con ruedas va de los 60 mil a los 72 mil."
      },
      {
        image:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/12/19/15452533993510.jpg",
        name:"Porsche 718 Boxster / Cayman",
        description:"Uno de los mejores autos de la historia está de vuelta, con toda la finura y la sangre pura de su nombre. Un motor turbocargado de 16 válvulas con 350 hp y un costo que va de los 56 mil a los 71 mil dólares."
      },
      {
        image:"https://st.motortrend.com/uploads/sites/10/2016/10/2016-volkswagen-golf-r-4-door-hatchback-angular-front.png",
        name:"Volkswagen Golf",
        description:"El primer gran amor de muchos no estaba en la secundaria sino en la Volkswagen. El legendario Golf está en nuestra lista con sus diferentes variantes que llegan a la poderosa máquina de 2.0 que puede desarrollar hasta 292 hp. Esta belleza tiene costos que van de los 21 mil a los 40,600 dólares."
      }
    ],
    buttonStartScrollDisabled:false
  }

  // FUNCION QUE INICIALIZA EL MOVIMIENTO DE SCROLL Y LE DA UN INTERVALO DE TIEMPO A CADA MOVIMIENTO  
  startScroll(element) {
    // VARIABLE QUE NOS PERMITIRA GUARDAR EL NUMERO DEL SCROLL EN EL QUE VA EL ELEMENTO Y COMPARARLO 
    // CON EL OBJETIVO DE VER SI YA LLEGO A SU MAXIMO REINICIALIZAR EL SCROLL DEL ELEMENTO A 0 PARA HACER UNA ANIMACION 
    // INFINITA
    let maxScroll = 0;
      var animateScroll = function(){  
        // SE AUMENTA 1 CADA VEZ QUE SE EJECUTA ESTA FUNCION AL SCROLLLEFT DEL ELEMENTO
        element.scrollLeft += 1;
        // ESTE COMPARATIVO REVISA SI EL SCROLL DEL ELEMENTO HA LLEGADO A SU MAXIMO DEBE REINICIALIZAR EL SCROLL A 0, 
        // ES DECIR QUE EL ELEMENTO QUE SE MUESTRE SEA EL PRIMERO
        if(maxScroll === element.scrollLeft && element.scrollLeft !== 0){
          element.scrollLeft = 0
        }
        // SI EL SCROLL TODAVIA NO LLEGA A SU MAXIMO QUE SE GUARDE EL VALOR DEL SCROLLLEFT DEL ELEMENTO EN LA VARIABLE MAXSCROLL EL CUAL 
        // EN UN FUTURO NOS AYUDARA A COMPARARLO 
        else{
          maxScroll = element.scrollLeft;
        }
        // INTERVALO DE TIEMPO QUE EJECUTARA LA FUNCION HASTA QUE LE DIGAMOS QUE PARE
        setTime = setTimeout(animateScroll);
      };
      // EJECUTAMOS EL CALLBACK DE ESTA FUNCION
    animateScroll();
  }

  // DETENEMOS EL SCROLL QUE SE EJECUTA EN LA FUNCION STARTSCROLL
  // Y LIMPIAMOS EL INTERVALO DE TIEMPO 
  stopScroll(element) {
   clearTimeout(setTime)
   element.scrollLeft = 0;
  }
  // EVENTO QUE ACTIVA LA FUNCION STARTSCROLL CUANDO EL MOUSE ESTA SOBRE EL ELEMENTO QUE ATRAPAMOS DENTRO DEL REF SCROLLER
  onMouseOver = e => {
    let {buttonStartScrollDisabled} = this.state;
    if(!buttonStartScrollDisabled) this.startScroll(this.refs.scroller)
    this.setState({buttonStartScrollDisabled:true})
  }
  // FUNCION QUE FINALIZA EL SCROLL Y ESTA SE EJECUTA CUANDO EL MOUSE DEJA DE ESTAR SOBRE EL ELEMENTO QUE ATRAPAMOS DENTRO DEL REF 
  // SCROLLER
  onMouseOut = e => {
    this.stopScroll(this.refs.scroller)
    this.setState({buttonStartScrollDisabled:false})
  };
  
  render() {
    let {arrImages,buttonStartScrollDisabled} = this.state;
    return (
      <div>
        <div  style={{textAlign:'center'}}>
          <Paper onMouseOver={e=>this.onMouseOver(e)} onMouseOut={e=>this.onMouseOut(e)} style={style} zDepth={5} rounded={false} >
                <div ref='scroller' className="center" >
                  {arrImages.map((element,index)=>(
                    <div className='internal'>
                      <div>
                        <figure>
                          <img id='sweetlandia' className="pulse " width='200px' height='100px'  src={element.image} alt={'foto del elemento ' + index} /> 
                        </figure>
                      </div>
                      <br/>
                      <b>{element.name}</b>
                      <p style={{whiteSpace:'pre-wrap',padding:'20px'}}>{element.description}</p>
                    </div>
                  ))}
                </div>
          </Paper>
        </div>
        <div style={{textAlign:'center',marginTop:'20px'}}>
          <FlatButton disabled={buttonStartScrollDisabled} label="START SCROLL" primary={true} onClick={this.onMouseOver} />
          <FlatButton  label="STOP SCROLL" primary={true} onClick={this.onMouseOut} />
        </div>
      </div> 
    );
  }
}

export default CodeChallenge;