import React, { useState, useEffect} from 'react'
import axios from 'axios'
import {FcSalesPerformance, FcCurrencyExchange, FcRating, FcInternal} from 'react-icons/fc'
import { IoIosArrowDropdownCircle,IoIosArrowDropupCircle } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { sortPrice, sortBet, sortName} from './actions/sortAction'
import { generate } from 'shortid'

function MainList() {
const [player, setPlayer] = useState([]);
const [search,setSearch] = useState('');

const Price = useSelector(state => state.priceReducer);
const Bet = useSelector(state => state.betReducer);
const Name = useSelector(state => state.nameReducer);

const dispatch = useDispatch();

    useEffect(() => {
            axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json')
            .then((res)=>{
                setPlayer(res.data)
            })
    }, [])

    const filteredResult=player.filter(res=>
        res.Name.toLowerCase().indexOf(search)!==-1
   )


    { Name ? filteredResult.sort((a,b)=>b.Name-a.Name) : filteredResult.sort((a,b)=>b.Name-a.Name) && Price ? filteredResult.sort((a,b)=>b.Price-a.Price) : filteredResult.sort((a,b)=>a.Price-b.Price) && Bet ? filteredResult.sort((a,b)=>b.Bet-a.Bet) : filteredResult.sort((a,b)=>a.Bet-b.Bet)}
     
    
    return (
        <div className="col-8 mx-auto pt-5">
            <p className="text-left text-primary h3">Select Playing 9</p>
           

            <input 
            type="search"
            className="w-50 my-5 shadow-sm form-control" 
            placeholder="Search for players here..." 
            onInput={(e)=>setSearch(e.target.value.toLowerCase())}
            />
            
            
            <table className="table table-striped table-hover shadow" style={{borderRadius:10,overflow:'hidden'}}>
               <thead className="thead-light">
               <tr>
                    <th>Select</th>
                    <th className='btn btn-block'  onClick={()=>dispatch(sortName())}>Player Name {Name ? <IoIosArrowDropdownCircle/> : <IoIosArrowDropupCircle/>}</th>
                    <th>Level</th>
                    <th>Avatar</th>
                    <th className='btn btn-block' onClick={()=>dispatch(sortBet())}><FcCurrencyExchange/> Bet {Bet ? <IoIosArrowDropdownCircle/> : <IoIosArrowDropupCircle/>}</th>
                    <th><FcRating/> Wins</th>
                    <th><FcInternal/> Lost</th>
                    <th className='btn btn-block' onClick={()=>dispatch(sortPrice())}><FcSalesPerformance /> Price {Price ? <IoIosArrowDropdownCircle/> : <IoIosArrowDropupCircle/>}</th>
                </tr>
               </thead>
               <tbody>
                  
                  {filteredResult.map((res,index)=>(
                       <tr key={generate()} >
                            <td>
                                <input type="checkbox" onChange={(e)=>(e.target.checked ? dispatch({
                                    type:'PUSH',
                                    payload:{
                                        Name:res.Name,
                                        Price:res.Price,
                                        'Profile Image':res['Profile Image'],
                                        Bet:res.Bet
                                    }
                                })
                                :
                                dispatch({
                                    type:'POP',
                                    payload:{
                                        Name:res.Name,
                                        Price:res.Price,
                                        'Profile Image':res['Profile Image'],
                                        Bet:res.Bet
                                    },
                                    id:index,
                                    }))}/>
                            </td>
    
                            <td >
                                {res.Name}
                            </td>

                            <td>1</td>

                            <td>
                                <img className="shadow-sm" src={res['Profile Image']} alt={res.Name} style={{objectFit:'contain',width:40,borderRadius:10}}/>
                            </td>

                            <td>
                                {res.Bet}
                            </td>

                            <td>0</td>

                            <td>0</td>

                            <td>
                                {res.Price}
                            </td>
                   </tr>
                  ))}
               </tbody>
            </table>
               
        </div>
    )
}

export default MainList;
