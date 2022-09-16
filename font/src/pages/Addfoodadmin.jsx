import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../App.css';
import axios from 'axios';
import { show } from '../store/notificationSlice'
function Addfoodadmin() {
    const [food , setFood] = useState({})
    const [option , setOption] = useState({sizes:[{}],sups:[{}]})
    const dispatch = useDispatch()
    function modify(e){
        setFood({...food,[e.target.name]:e.target.value})
    }
    function size(e,i){
        var si = [...option.sizes]
        si[i] = {...si[i],[e.target.name]:e.target.value}
        setOption({...option,sizes:si})
    }
    function sup(e,i){
        var si = [...option.sups]
        si[i] = {...si[i],[e.target.name]:e.target.value}
        setOption({...option,sups:si})
    }
    function deletesize(e){
        if(option.sizes.length > 1 ){
            var si = [...option.sizes]
            si.pop()
            setOption({...option,sizes:si})
        }
       
    }
    function deletesup(e){
        var si = [...option.sups]
        si.pop()
        setOption({...option,sups:si})
    }
    function save(e){
      
      var s = {}
      var su = {}
        option.sizes.forEach(o => {
            s[o.sizeName] = o.sizePrice
        })
        option.sups.forEach(o => {
            su[o.supName] = o.supPrice
        })
        var f = {...food,size:s,sup:su}
        console.log(f);

        axios.post(`http://localhost:5000/api/v1/food/`,f)
        .then(response => {
          console.log(response.data)
          dispatch(show({msg:"Saved",error :false}))
        })
        .catch(error => {
            dispatch(show({msg:"Saving Failed",error :true}))
        })
    }
    return (
        <div>
        <div id="last-step" className="last-step">
            <div id="food-container">      

            <form action="">
                
                <h1 className="title">Add Food</h1>
                <div className="inputBox">
                    <div className="input">
                        <span>name</span>
                        <input type="text" name='name'  placeholder='Food Name' onChange={e => modify(e)}/>
                    </div>
                    <div className="input">
                        <span>image</span>
                        <input type="text" autoComplete='off' name='img' placeholder='Image Link' onChange={e => modify(e)}/>
                    </div>
                    <div className="input">
                        <span>Category</span>
                        <input type="text" name='category' placeholder='Food Category' onChange={e => modify(e)}/>
                    </div>
                    <div className="input">
                        <span>price</span>
                        <input type="number" name='price' placeholder='Food Price' onChange={e => modify(e)}/>
                    </div>
                    <div className="input">
                        <span>sizes</span>
                        
                            <div className='add-remove'>
                                <span className='add' style={{  color: "white"}} onClick={e => setOption({...option,sizes:[...option.sizes,{}]})} >add</span>
                                <span className='remove' style={{  color: "white"}} onClick={e => deletesize(e)} >remove</span>
                            </div>
                            

                        {
                            option.sizes.map((e,i) => (
                            <div>
                                <span className='broder-sup-size-top'></span>
                                <input type="text" name='sizeName'  placeholder='Size name' onChange={e => size(e,i)} />
                                <input type="number" name='sizePrice'  placeholder='Size Price' onChange={e => size(e,i)}/>
                                <span className='broder-sup-size'> </span>
                            </div>
                            ))
                        }
                        
                    </div>
                    <div className="input">
                            <span>Supplements</span>
                            
                            <div className="add-remove">
                                <span className='add' style={{  color: "white"}} onClick={e => setOption({...option,sups:[...option.sups,{}]})} >add</span>
                                <span className='remove' style={{  color: "white"}} onClick={e => deletesup(e)} >remove</span>
                            </div>
                            

                            {
                                option.sups.map((e,i) => (
                                <div>
                                    <span className='broder-sup-size-top'></span>
                                    <input type="text" name='supName'  placeholder='Supplement Name' onChange={e => sup(e,i)} />
                                    <input type="number" name='supPrice'  placeholder='Supplement Price' onChange={e => sup(e,i)}/>
                                    <span className='broder-sup-size'></span>
                                </div>
                                ))
                            }
                        
                    </div>
                </div>
                {/* <div className="inputBox">
                    
                </div> */}
                {/* <div className="inputBox_newPassword">
                    
                    
                </div> */}
                <div className='submitting-location'>

                    <input type="button" value="Save" className='btn' onClick={e=> save(e)}/>
                </div>
                
                
            </form>



            </div>
            
        </div>
    </div>
    );
}

export default Addfoodadmin;