import React from "react";
import mlgcl from './image/mlg-logo.png';
import fun from './image/more-fun.png';
import piodox from './image/piodoxweb.png';
import doh from './image/doh-logo.png';
import leyte from './image/leyte-logo.png';
import hilongos from './image/hilongos-logo.png';

function Footer()
{
    return(
        <div className="container-fluid p-4 mt-5 d-flex" style={{position:"relative",bottom:"0px",paddingTop:"100px"}}>

          
            <div className="d-flex align-items-center col-8">
                <div className="ms-5">
                    <img style={{width:45, marginLeft:20}}src={mlgcl} />
                    <img style={{width:140, marginLeft:20}}src={fun} />
                </div>
            </div>


            <div className="d-flex">
                <div className="me-4">
                    <p style={{fontSize:11}}>powered by</p>
                    <img style={{width:160, position:"relative",left:"0px",paddingTop:0}}src={piodox} />
                </div>

                <div className="ms-5">
                    <p style={{fontSize:11}}>in partnership with</p>
                    <div className="">
                    <img style={{width:60}}src={hilongos} />
                    <img style={{width:60, marginLeft:30}}src={doh} />
                    <img style={{width:60, marginLeft:30}}src={leyte} />
                    </div>
                </div>

            </div>
         
        </div>
    )
}

export default Footer;

