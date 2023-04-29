import './App.css';

function App() {
  return (
     // Main box 
    <div className="App mx-auto">

      {/* Navbar */}
      <nav className="nav-header font-bold pl-5 pr-5">   
        <div className='nav-div pb-4 logo-text font-bold'>
          Ten Wonders   
          {/* Link to twitter account  */}
          <a href='https://twitter.com/Divine_Er' rel="noreferrer" target="_blank" > 
            <span className='float-right'> <i className="fa fa-brands fa-twitter text-gray-400"></i></span>
          </a>
          {/* Link to codebase  */}
          <a href='https://github.com/divinejoshua/ten-wonders-react-js' rel="noreferrer" target="_blank" >
            <span className='float-right mr-4'> <i className="fa fa-brands fa-github text-gray-400"></i></span>
          </a>
        </div>
      </nav>


    <main className='p-5'>
        {/* Search box  */}
          <form className='mt-20'  method="post">
              <input 
              type="text" 
              required
              autoFocus={true}
              placeholder='Ask Didi anything...'
              className='w-full text-gray-700 text-sm p-2 pt-3 pb-3 pr-5 pl-5 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-0.5 focus:border-100 transition duration-0 hover:duration-150'
              />


              <br></br>

            </form>
        </main>


  </div>
  );
}

export default App;
