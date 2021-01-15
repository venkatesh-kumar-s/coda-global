import React from 'react'
import {FcSalesPerformance, FcCurrencyExchange, FcRating} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { generate } from 'shortid';

function SelectedList() {

    const select = useSelector(state=>state.selectedReducer);
   
   console.log(select);
    return (
        <div className="col-3 text-left jumbotron">
            <div className="m-auto text-center pb-3">
                <img style={{objectFit:'contain',width:200}} src="https://www.freeiconspng.com/uploads/dice-png-25.png" alt='dice'/>
            </div>
            <hr/>
            <p>Playing 9</p>
            
            
           {select.map((res)=>(
                <div key={generate()} className="d-flex mb-4">
                <div className="col-3 m-auto">
                    <img style={{objectFit:'contain',width:50,borderRadius:10}} src={res['Profile Image']} alt={res.Name}/>
                </div>
                <div className="col-6 m-auto">
                    <p className="m-auto">{res.Name}</p>
                    <div className="row m-auto justify-content-between">
                    <div className="row m-auto">
                    <FcRating className="m-auto"/>&nbsp;
                    <p className='m-auto text-left'>{res.Bet}</p>
                  </div>
                  <div className="row m-auto">
                    <FcCurrencyExchange className="m-auto"/>&nbsp;
                    <p className='m-auto text-left'>{res.Bet}</p>
                  </div>
                    </div>
                </div>
                <div className="col-3 m-auto">
                  <div className="row">
                    <FcSalesPerformance className="m-auto"/>
                    <p className='m-auto text-left'>{res.Price}</p>
                  </div>
                </div>
            </div>
           ))}

            <Link to="/results" className="btn btn-block btn-sm btn-primary shadow">S T A R T </Link>
        </div>
    )
}

export default SelectedList;
