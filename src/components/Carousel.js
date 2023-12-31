import React from 'react'

export default function Carousel() {
  return (
    <div>
     <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner">
    <div className="carousel-caption" style={{zIndex: "10"}}>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="search" aria-label="search" />
        <button className="btn btn-outline-danger text-white bg-secondary" type="submit">search</button>
      </form>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900x700?fried chicken" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700?shakes" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700?pizza" className="d-block w-100" style={{filter: "brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  
  </div>
  )
}
