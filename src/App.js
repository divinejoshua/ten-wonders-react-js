import './App.css';

function App() {
  return (
     // Main box 
    <div className="App mx-auto">

      {/* Navbar */}
      <nav className="nav-header font-bold pl-5 pr-5">   
        <div className='nav-div pb-4 logo-text font-bold text-pink-800'>
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
          <form className='mt-16'  method="get">
              <input 
              type="text" 
              required
              name='q'
              autoFocus={true}
              placeholder='Search Ten Wonders...'
              className='w-full text-gray-700 text-sm p-2 pt-3 pb-3 pr-5 pl-5 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-0.5 focus:border-100 transition duration-0 hover:duration-150'
              />

              <br></br>

            </form>

          {/* Gallery section  */}
          <p className='text-sm mt-4 text-gray-500'> Seach results for "Nature"</p>

          <section class="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5">
            <div class=" overflow-hidden">
                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="Image 1" class="w-full h-48 object-cover rounded-lg"/>
                <div class="">
                    <h2 class="title mt-3 text-gray-600 ml-1">Image 1</h2>
                    <p class="caption text-gray-400 ml-1">website.com</p>
                </div>
            </div>
            <div class="overflow-hidden">
                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="Image 2" class="w-full h-48 object-cover rounded-lg"/>
                <div class="">
                    <h2 class="title mt-3 text-gray-600 ml-1">Image 1</h2>
                    <p class="caption text-gray-400 ml-1">website.com</p>
                </div>
            </div>
            <div class="overflow-hidden">
                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="Image 3" class="w-full h-48 object-cover rounded-lg"/>
                <div class="">
                    <h2 class="title mt-3 text-gray-600 ml-1">Image 1</h2>
                    <p class="caption text-gray-400 ml-1">website.com</p>
                </div>
            </div>
            <div class="overflow-hidden">
                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="Image 4" class="w-full h-48 object-cover rounded-lg"/>
                <div class="">
                    <h2 class="title mt-3 text-gray-600 ml-1">Image 1</h2>
                    <p class="caption text-gray-400 ml-1">website.com</p>
                </div>
            </div>
            <div class="overflow-hidden">
                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" class="w-full h-48 object-cover rounded-lg"/>
                <div class="">
                    <h2 class="title mt-3 text-gray-600 ml-1">Image 1</h2>
                    <p class="caption text-gray-400 ml-1">website.com</p>
                </div>
            </div>
            <div class="overflow-hidden">
                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="Image 6" class="w-full h-48 object-cover rounded-lg"/>
                <div class="">
                    <h2 class="title mt-3 text-gray-600 ml-1">Image 1</h2>
                    <p class="caption text-gray-400 ml-1">website.com</p>
                </div>
            </div>
        </section>



        </main> 


  </div>
  );
}

export default App;
