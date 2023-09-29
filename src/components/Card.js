import React from 'react'

export default function Card() {
  return (
    <div><div>
    <div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
<img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-express-by-gigih-rudya-designcrowd.png" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">Card title</h5>
<p className="card-text">Important Content.</p>
<div className='container w-100'></div>
<select className='m-2 h-100  bg-success'>
  {Array.from(Array (6), (e,i)=>{
    return(
      <option key={i+1} value={i+1}> {i+1} </option>
    )
  })}
</select>
<select className="m-3 h-100 bg-sucess rounded">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <div className="d-inline h-100 fs-5">Total Amount</div>
</div>
</div>
    </div></div>
  )
}
