
import React from 'react'
import { Link } from 'react-router-dom'
import {FcSalesPerformance, FcCurrencyExchange, FcRating, FcInternal} from 'react-icons/fc'
import './ResultBoard.css'
import { useSelector } from 'react-redux'

function ResultBoard() {
    
    const select = useSelector(state => state.selectedReducer);

    const finallist = select.slice(0,9);
   
    const base = Math.floor(Math.random()*9)+1;

    return (
        <div>
            <img src="https://barbarashdwallpapers.com/wp-content/uploads/2015/01/White-wallpaper-with-dots-1.jpg" alt="banner" style={{objectFit:'cover',width:'100vw',height:'100vh'}}/>
           <div className='container'>
           <div className="card-deck text-center" style={{position:'absolute',top:40,left:'30%',transform:'translateX(-15%)'}}>
               {finallist.slice(0,5).map((res,index)=>(
                    <div key={index} className={`card ${base===index+1 ? 'border-success won':'border-danger loose'} shadow px-2 pt-2`}>
                       
                       <span className="badge badge-pill" style={{position:'absolute',right:'-10%',top:'-10%'}}>
                            {base===index+1 ?  <FcRating size={25}/> : ''}
                        </span>

                       <div className='d-flex'>
                           <div className='col-3'>
                                <img
                                className="m-auto shadow-sm m-2" 
                                src={res['Profile Image']} 
                                alt={res.Name} 
                                style={{objectFit:'contain',width:40,position:'absolute',left:0,borderRadius:10}}/>
                           </div>

                           <div className="col-9 text-left ml-3">
                              <div className='row'>
                                   <p className='col-12 p-0 m-auto' style={{fontSize:15}}>{res.Name}</p>
                                   <small className='col-12 m-auto p-0'>Level {index+1}</small>
                              </div>
                           </div>    
                       </div>

                       
                            <div className='m-auto row text-left'>
                                    <small className='col-7 p-2'><FcSalesPerformance/> {base === index + 1 ? res.Price*2 :res.Price}</small>
                                    <small className='col-5 p-2'><FcCurrencyExchange/> {res.Bet}</small>
                                    <small className='col-12 p-2'>{base === index+1 ? <FcRating/> : <FcInternal/>} 1</small>
                            </div>
                         

                            <div className={`${base === index+1 ? 'bg-success' : 'bg-danger'} px-2`} style={{borderRadius:'10px 10px 0 0',position:'absolute',bottom:0,left:'50%',transform:'translate(-50%)'}}>
                                <small className='text-light'>{base === index+1 ? 'Won' : 'Lost'}</small>
                            </div>
                    </div>
               ))}

              
            </div>



            <div className="bg-danger p-0 m-auto shadow" style={{width:122,height:122,borderRadius:100,position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
                <div className="bg-dark p-0 m-auto shadow" style={{width:120,height:120,borderRadius:100,position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
                    <div className="p-0 m-auto shadow" style={{background:'#654062',width:80,height:80,borderRadius:100,position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
                        <p className="m-auto text-warning" style={{fontWeight:700,fontSize:60,position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>{base}</p>
                    </div>
                </div>
            </div>



            <div className="card-deck" style={{position:'absolute',bottom:40,left:'50%',transform:'translateX(-50%)'}}>
            {finallist.slice(5).map((res, index)=>(
                    <div key={index} className={`card ${base===index+6 ? 'border-success won':'border-danger loose'} shadow px-2 pt-2`}>
                    
                    <span className="badge badge-pill" style={{position:'absolute',right:'-10%',top:'-10%'}}>
                       {base===index+6 ?  <FcRating size={25}/> : ''}
                    </span>

                       <div className='d-flex'>
                           <div className='col-3'>
                                <img
                                className="m-auto shadow-sm m-2" 
                                src={res['Profile Image']} 
                                alt={res.Name} 
                                style={{objectFit:'contain',width:40,position:'absolute',left:0,borderRadius:10}}/>
                           </div>

                           <div className="col-9 text-left ml-3">
                              <div className='row'>
                                   <p className='col-12 p-0  pr-1 m-auto' style={{fontSize:15}}>{res.Name.slice(0,8)}</p>
                                   <small className='col-12 m-auto p-0'>Level {index+6}</small>
                              </div>
                           </div>    
                       </div>

                       
                            <div className='m-auto row text-left'>
                                    <small className='col-7 p-2'><FcSalesPerformance/> {base === index + 6 ? res.Price*2 : res.Price}</small>
                                    <small className='col-5 p-2'><FcCurrencyExchange/> {res.Bet}</small>
                                    <small className='col-12 p-2'>{base === index+6 ? <FcRating/> : <FcInternal/>} 1</small>
                            </div>
                         

                        <div className={`${base === index+6 ? 'bg-success' : 'bg-danger'} px-2`} style={{borderRadius:'10px 10px 0 0',position:'absolute',bottom:0,left:'50%',transform:'translate(-50%)'}}>
                                <small className='text-light'>{base === index+6 ? 'Won' : 'Lost'}</small>
                        </div>
                    </div>
               ))}

            </div>



            <Link to="/" className="btn btn-danger shadow" style={{position:'absolute',bottom:30,left:50}}>Back</Link>
           </div>
        </div>
    )
}

export default ResultBoard;
