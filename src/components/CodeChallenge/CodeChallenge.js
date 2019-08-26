import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const style = {
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
        image:"https://cdn.drivek.it/configurator-imgs/cars/es/800/VOLKSWAGEN/GOLF-GT/30842_BERLINA-5-PUERTAS/dscf1052.jpg"
      },
      {
        image:"https://cdn.drivek.it/configurator-imgs/cars/es/800/VOLKSWAGEN/GOLF-GT/30842_BERLINA-5-PUERTAS/dscf1053.jpg"
      },
      {
        image:"https://cdn.drivek.it/configurator-imgs/cars/es/800/VOLKSWAGEN/GOLF-GT/30842_BERLINA-5-PUERTAS/dscf1070.jpg"
      },
      {
        image:"https://cdn.drivek.it/configurator-imgs/cars/es/800/VOLKSWAGEN/GOLF-GT/30842_BERLINA-5-PUERTAS/dscf1056.jpg"
      },
      {
        image:"https://cdn.drivek.it/configurator-imgs/cars/es/800/VOLKSWAGEN/GOLF-GT/30842_BERLINA-5-PUERTAS/dscf1037.jpg"
      },
      {
        image:"https://cdn.drivek.it/configurator-imgs/cars/es/800/VOLKSWAGEN/GOLF-GT/30842_BERLINA-5-PUERTAS/dscf1061.jpg"
      },
      {
        image:"https://cdn.drivek.it/configurator-imgs/cars/es/800/VOLKSWAGEN/GOLF-GT/30842_BERLINA-5-PUERTAS/dscf1067.jpg"
      },
      {
        image:"https://cdn.drivek.it/configurator-imgs/cars/es/800/VOLKSWAGEN/GOLF-GT/30842_BERLINA-5-PUERTAS/dscf1038.jpg"
      },
      {
        image:"https://cdn.drivek.it/configurator-imgs/cars/es/800/VOLKSWAGEN/GOLF-GT/30842_BERLINA-5-PUERTAS/dscf1047.jpg"
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
    this.startScroll(this.refs.scroller)
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
          <Paper 
            onMouseOver={e=>this.onMouseOver(e)} 
            onMouseOut={e=>this.onMouseOut(e)} 
            style={style} 
            zDepth={5} 
            rounded={false} 
          >  
            <Card  
              style={{pointerEvents:'none'}}
            >
              <CardMedia>
                <div className="center" ref="scroller"> 
                  {arrImages.map((element,index)=>(
                    <img className='internal' src={element.image} alt={"Imagen de elemento numero " + index +1} />
                  ))}
                </div>
              </CardMedia>
              <CardTitle 
                title="Volkswagen Golf" 
              />
              <CardText>
                El primer gran amor de muchos no estaba en la secundaria sino en la Volkswagen. 
                El legendario Golf está en nuestra lista con sus diferentes variantes que llegan 
                a la poderosa máquina de 2.0 que puede desarrollar hasta 292 hp. Esta belleza tiene 
                costos que van de los 21 mil a los 40,600 dólares.
              </CardText>
            </Card>      
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