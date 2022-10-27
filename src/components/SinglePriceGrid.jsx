import './SinglePriceGrid.css'

function SinglePriceGrid() {
  return (
    <main>
      <div id="join">
        <h2>Join our community</h2>
        <h3>30-day, hassle-free money back guarantee</h3>
        <p>Gain access to our full library of tutorials along with expert code reviews.</p>
      </div>
      <div id="container">
        <div id="monthly">
          <h2>Monthly Subscription</h2>
          <h2 id="capitalize">$29</h2>
          <p id="minicap">per month</p>
          <p id="priceline">Full access for less than $1 a day</p>
          <button>Sign Up</button>
        </div>
        <div id="why">
          <h2>Why Us</h2>
          <ul>
            <li><a href="#">Tutorials by industry experts</a></li>
            <li><a href="#">Peer & expert code review</a></li>
            <li><a href="#">Coding exercises</a></li>
            <li><a href="#">Access to our github repos</a></li>
            <li><a href="#">Community forum</a></li>
            <li><a href="#">Flashcard decks</a></li>
            <li><a href="#">New videos every week</a></li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default SinglePriceGrid
