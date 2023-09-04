import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Download from "../Components/Download";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";



const Storeavl = () => {
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search");



const openstore =() =>{
  window.open('/store1','_self')
}

const [showall, setShowall] = useState(null);

const handleclickall = () => {
  setShowall(!showall);
};
  




  return (
    <div>
      <Navbar />
      <div className="searchbarre">
        <h1>Available stores in: {searchValue}</h1>
        <label className="showlevel">
          Sort by:
          <select className="dropdown">
            <option className="opt">Most popular</option>
            <option className="opt" onClick={handleclickall}>All Store</option>
          </select>
        </label>
      </div>
      <div className="searchbox26">
        <div className="serchbox1">
          <div className="box123">

            {/* 1 */}

            <motion.img onClick={openstore}whileHover={{scale:1.1}}  src="grocery_store_logo_4x.png" alt="" className="imagebox3" />
            <motion.h1 onClick={openstore}>Twisted shrimp</motion.h1>
            <p>min.50rs</p>
            <div class="star-rating">
              <input type="radio" name="rating" id="star5" value="5"/>
              <label for="star5"></label>
              <input type="radio" name="rating" id="star4" value="4"/>
              <label for="star4"></label>
              <input type="radio" name="rating" id="star3" value="3"/>
              <label for="star3"></label>
              <input type="radio" name="rating" id="star2" value="2"/>
              <label for="star2"></label>
              <input type="radio" name="rating" id="star1" value="1"/>
              <label for="star1"></label>
            </div>
          

         {/* 2 */}
          </div>
          <div className="box123">
            <img src="5315.png" alt="" className="imagebox6" />
            <h1 className="">Dragon Foods</h1>
            <p>min.50rs</p>
            <div class="star-rating">
              <input type="radio" name="rating" id="star5" value="5"/>
              <label for="star5"></label>
              <input type="radio" name="rating" id="star4" value="4"/>
              <label for="star4"></label>
              <input type="radio" name="rating" id="star3" value="3"/>
              <label for="star3"></label>
              <input type="radio" name="rating" id="star2" value="2"/>
              <label for="star2"></label>
              <input type="radio" name="rating" id="star1" value="1"/>
              <label for="star1"></label>
            </div>
          </div>

          {/* 3 */}
          <div className="box123">
            <img src="jgbjn,.png" alt="" className="imagebox2" />
            <h1>Checf Special</h1>
            <p>min.50rs</p>
            <div class="star-rating">
              <input type="radio" name="rating" id="star5" value="5"/>
              <label for="star5"></label>
              <input type="radio" name="rating" id="star4" value="4"/>
              <label for="star4"></label>
              <input type="radio" name="rating" id="star3" value="3"/>
              <label for="star3"></label>
              <input type="radio" name="rating" id="star2" value="2"/>
              <label for="star2"></label>
              <input type="radio" name="rating" id="star1" value="1"/>
              <label for="star1"></label>
            </div>
          </div>



          {/* 4 */}
          <div className="box123">
            <img src="optimized_large_thumb_stage.png" alt="" className="imagebox8" />
            <h1>Dontstealhere</h1>
            <p>min.50rs</p>
            <div class="star-rating">
              <input type="radio" name="rating" id="star5" value="5"/>
              <label for="star5"></label>
              <input type="radio" name="rating" id="star4" value="4"/>
              <label for="star4"></label>
              <input type="radio" name="rating" id="star3" value="3"/>
              <label for="star3"></label>
              <input type="radio" name="rating" id="star2" value="2"/>
              <label for="star2"></label>
              <input type="radio" name="rating" id="star1" value="1"/>
              <label for="star1"></label>
            </div>
          </div>



          {/* 5 */}
          <div className="box123">
            <img src="supermarket-logo-with-groceries_23-2148470294.png" alt="" className="imagebox9" />
            <h1>Honeycomb Store</h1>
            <p>min.50rs</p>
            <div class="star-rating">
              <input type="radio" name="rating" id="star5" value="5"/>
              <label for="star5"></label>
              <input type="radio" name="rating" id="star4" value="4"/>
              <label for="star4"></label>
              <input type="radio" name="rating" id="star3" value="3"/>
              <label for="star3"></label>
              <input type="radio" name="rating" id="star2" value="2"/>
              <label for="star2"></label>
              <input type="radio" name="rating" id="star1" value="1"/>
              <label for="star1"></label>
            </div>
          </div>

          {/* 6 */}

          <div className="box123">
            <img src="pngegg (1).png" alt="" className="imagebox10" />
            <h1>Dontstealhere</h1>
            <p>min.50rs</p>
            <div class="star-rating1">
              <input type="radio" name="rating" id="star5" value="5"/>
              <label for="star5"></label>
              <input type="radio" name="rating" id="star4" value="4"/>
              <label for="star4"></label>
              <input type="radio" name="rating" id="star3" value="3"/>
              <label for="star3"></label>
              <input type="radio" name="rating" id="star2" value="2"/>
              <label for="star2"></label>
              <input type="radio" name="rating" id="star1" value="1"/>
              <label for="star1"></label>
            </div>
          </div>

          {/* 7 */}

          <div className="box123">
            <img src="pngegg (2).png" alt="" className="imagebox11" />
            <h1>Dontstealhere</h1>
            <p>min.50rs</p>
            <div class="star-rating1">
              <input type="radio" name="rating" id="star5" value="5"/>
              <label for="star5"></label>
              <input type="radio" name="rating" id="star4" value="4"/>
              <label for="star4"></label>
              <input type="radio" name="rating" id="star3" value="3"/>
              <label for="star3"></label>
              <input type="radio" name="rating" id="star2" value="2"/>
              <label for="star2"></label>
              <input type="radio" name="rating" id="star1" value="1"/>
              <label for="star1"></label>
            </div>
          </div>

          {/* 8 */}

          <div className="box123">
            <img src="pngegg (4).png" alt="" className="imagebox" />
            <h1>Dontstealhere</h1>
            <p>min.50rs</p>
            <div class="star-rating1">
              <input type="radio" name="rating" id="star5" value="5"/>
              <label for="star5"></label>
              <input type="radio" name="rating" id="star4" value="4"/>
              <label for="star4"></label>
              <input type="radio" name="rating" id="star3" value="3"/>
              <label for="star3"></label>
              <input type="radio" name="rating" id="star2" value="2"/>
              <label for="star2"></label>
              <input type="radio" name="rating" id="star1" value="1"/>
              <label for="star1"></label>
            </div>
          </div>

          {/* 9 */}

          {showall &&<div className="box123">
            <img src="supermarket-logo-with-groceries_23-2148470294.png" alt="" className="imagebox" />
            <h1>Dontstealhere</h1>
            <p>min.50rs</p>
            <div class="star-rating1">
              <input type="radio" name="rating" id="star5" value="5"/>
              <label for="star5"></label>
              <input type="radio" name="rating" id="star4" value="4"/>
              <label for="star4"></label>
              <input type="radio" name="rating" id="star3" value="3"/>
              <label for="star3"></label>
              <input type="radio" name="rating" id="star2" value="2"/>
              <label for="star2"></label>
              <input type="radio" name="rating" id="star1" value="1"/>
              <label for="star1"></label>
            </div>
          </div>}

          

          {showall &&  <div className="box123">
            <img src="ytgyjhn.png" alt="" className="imagebox" />
            <h1>Dontstealhere</h1>
            <p>min.50rs</p>
            <div class="star-rating2">
              <input type="radio" name="rating" id="star5" value="5"/>
              <label for="star5"></label>
              <input type="radio" name="rating" id="star4" value="4"/>
              <label for="star4"></label>
              <input type="radio" name="rating" id="star3" value="3"/>
              <label for="star3"></label>
              <input type="radio" name="rating" id="star2" value="2"/>
              <label for="star2"></label>
              <input type="radio" name="rating" id="star1" value="1"/>
              <label for="star1"></label>
            </div>
          </div>}
        
        {showall && <div className="box123">
            <img src="pngegg (4).png" alt="" className="imagebox" />
            <h1>Dontstealhere</h1>
            <p>min.50rs</p>
            <div class="star-rating3">
              <input type="radio" name="rating" id="star5" value="5"/>
              <label for="star5"></label>
              <input type="radio" name="rating" id="star4" value="4"/>
              <label for="star4"></label>
              <input type="radio" name="rating" id="star3" value="3"/>
              <label for="star3"></label>
              <input type="radio" name="rating" id="star2" value="2"/>
              <label for="star2"></label>
              <input type="radio" name="rating" id="star1" value="1"/>
              <label for="star1"></label>
            </div>
          </div>}
       
          {showall && <div className="box123">
            <img src="pngegg (4).png" alt="" className="imagebox" />
            <h1>Dontstealhere</h1>
            <p>min.50rs</p>
            <div class="star-rating3">
              <input type="radio" name="rating" id="star5" value="5"/>
              <label for="star5"></label>
              <input type="radio" name="rating" id="star4" value="4"/>
              <label for="star4"></label>
              <input type="radio" name="rating" id="star3" value="3"/>
              <label for="star3"></label>
              <input type="radio" name="rating" id="star2" value="2"/>
              <label for="star2"></label>
              <input type="radio" name="rating" id="star1" value="1"/>
              <label for="star1"></label>
            </div>
          </div>}
                

        </div>
      </div>
      <div className="paddimng">
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default Storeavl;
