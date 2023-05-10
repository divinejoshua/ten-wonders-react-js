import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

let baseURL = "https://api.scaleserp.com/search";

if (process.env.REACT_APP_DEBUG==="1"){  
  baseURL = "/data/search.json";
}

function App() {

  
  const [isLoading, setisLoading] = useState(false);
  const [results, setresults] = useState([]);
  const [query, setquery] = useState("");
  const [queryValue, setqueryValue] = useState("");
  const [timeTaken, settimeTaken] = useState("");




    // Submit form 
    const submitForm = (event) => {

       //Preventing page refresh
       event.preventDefault();

      // Get the results 
      getResults(query)
   }
  

  // Get result function
  const getResults = async (query) =>{

    if((!query || /^\s*$/.test(query))===true){ return }
    setisLoading(true)

    setresults([])
  

    // set up the request parameters
    const params = {
      api_key: process.env.REACT_APP_SCALESERP_API_KEY,
      q: query,
      search_type: "images",
      location: "United+States"
    }

    // Run the requests
    try{
      let response = await axios.get(baseURL, { params })
      setqueryValue(query)
      setresults(response.data)
      settimeTaken(response.data.search_metadata.total_time_taken)
    }
    catch {
      console.log("An error occured")
    }

    finally{
      setisLoading(false)
    }
  }


  //USE EFFECT
  useEffect(() => {

      //Default function goes here
      getResults("Beautiful nature images")

    return () => {
    }
  }, [])

  
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
          <form className='mt-16'  method="get" onSubmit={submitForm}>
              <input 
              type="text" 
              required
              name='query'
              onChange={e => setquery(e.target.value)}
              autoFocus={true}
              placeholder='Search Ten Wonders...'
              className='w-full text-gray-700 text-sm p-2 pt-3 pb-3 pr-5 pl-5 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-0.5 focus:border-100 transition duration-0 hover:duration-150'
              />

              <br></br>

            </form>

          {/* Gallery section  */}
          {
            isLoading ?
            <p className='text-small mt-4 text-gray-500 ml-2 '> Loading...</p>
            :
            <p className='text-small mt-4 text-gray-500 ml-2'> {queryValue} &nbsp;  ({timeTaken} Seconds)</p> 

          }

        <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5">
            {Array.isArray(results.image_results) ? results.image_results.map((post,index) => (
                <div className=" overflow-hidden" key={index}>
                  <a href={post.link} rel="noreferrer" target="_blank" >
                    <img src={post.image}  alt={post.title} className="w-full h-48 object-cover rounded-lg"/>
                    <div className="">
                        <h2 className="title mt-3 text-gray-600 ml-1">{post.title}</h2>
                        <p className="caption text-gray-400 ml-1">{post.domain}</p>
                    </div>
                    </a>
                </div>
  
        )) : ""}
            </section>
          

        </main> 


  </div>
  );
}

export default App;
