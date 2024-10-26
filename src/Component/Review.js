import React from 'react'
import '../ALLCSS/Reviews.css'

const Review = () => {
  return (
    <div className="container">
      <section className="reviews-section">
        <h2>Reviews</h2>
        <div className="card">
          <h3>Anushka Powar</h3>
          <p>Positive reviews often highlight fast, reliable delivery</p>
          <div className="card-icons">
          </div>
        </div>

        <div className="card">
          <h3>Yashashri Gite</h3>
          <p>People like the app’s easy navigation, filters, and smooth checkout process.</p>
          <div className="card-icons">
          </div>
        </div>

        <div className="card">
          <h3>Shraddha Chande</h3>
          <p>Good experiences with customer support,and helpful resolution of issues</p>
          <div className="card-icons">
          </div>
        </div>
      </section>
    </div>
  )
}

export default Review
