import React from "react";
import { useState } from "react";

import Data from  './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Navbar.css';
import CarCard from "./CarCard";
 export default function Navbar(){
  const [Darkmode,setDarkmode]= useState("true");
  const [ currentPage, setCureentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage*recordsPerPage;
  const firstIndex = lastIndex- recordsPerPage;
  const   records =  Data.slice(firstIndex,lastIndex);
  const Npage = Math.ceil(Data.length/recordsPerPage)
   const numbers = [...Array(Npage + 1 ).keys()].slice(1)

function clicked(){
  setDarkmode(prevstate =>!prevstate)
}

 function previouspage(){
  if(currentPage!==1){
    setCureentPage(currentPage-1)
  }

 }
 function nextpage(){
  if(currentPage !==Npage){
    setCureentPage(currentPage +1)
  }
 }
 const changepage = (n) => {
  console.log("running")
  console.log(n)
  setCureentPage(n )
 
 }






    return(
   <div class={`${Darkmode ? 'Dark': 'Light'}`} >

   <nav className="d-flex" id="navbar">
<div className=" d-flex">
  <p class=" tittle">Cars..</p>
    <input type="search"  className="form-control rounded-pill fs-6" placeholder="Search.." id="searchbar"/>
  </div>
  <select class="form-select form-control" aria-label="Default select example" id="select1">
  <option selected>Relevance</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<select class="form-select form-control" aria-label="Default select example" id="select2">
  <option selected>All Brands</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 {/*    *****************************light and dark mode  ************************* */}
<div class="darkmode">
 <div class="theme-popup">
    <input type="radio" name="theme" id="default" checked=""/>
    <input type="radio" name="theme" id="light" onClick={clicked}/>
    <input type="radio" name="theme" id="dark" onClick={clicked}/>
    <input type="checkbox" id="checkbox"/>
  <label for="checkbox" class="theme-popup__button">
    <span class="theme-popup__icons">
      <svg class="default" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2.52267C6.13332 2.64713 4.86254 3.27802 3.9372 4.29146C3.01186 5.3049 2.49882 6.62766 2.49882 8C2.49882 9.37234 3.01186 10.6951 3.9372 11.7085C4.86254 12.722 6.13332 13.3529 7.5 13.4773V2.52267ZM1.5 8C1.5 4.41 4.41 1.5 8 1.5C11.59 1.5 14.5 4.41 14.5 8C14.5 11.59 11.59 14.5 8 14.5C4.41 14.5 1.5 11.59 1.5 8Z" fill="currentColor"></path>
      </svg>
      <svg class="sun" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_78_63)">
          <path d="M7.99998 3.99256C5.79024 3.99256 3.99254 5.79061 3.99254 8.00035C3.99254 10.2101 5.79024 12.0081 7.99998 12.0081C10.2094 12.0081 12.0074 10.2105 12.0074 8.00035C12.0074 5.79026 10.2094 3.99256 7.99998 3.99256ZM7.99998 2.81453C7.79266 2.81453 7.59383 2.73219 7.4472 2.58563C7.30057 2.43907 7.21814 2.24027 7.21805 2.03295V0.781931C7.21805 0.57455 7.30043 0.375663 7.44707 0.229022C7.59371 0.0823818 7.7926 0 7.99998 0C8.20736 0 8.40625 0.0823818 8.55289 0.229022C8.69953 0.375663 8.78191 0.57455 8.78191 0.781931V2.03295C8.78182 2.24027 8.6994 2.43907 8.55276 2.58563C8.40613 2.73219 8.2073 2.81453 7.99998 2.81453ZM7.99998 13.1851C7.8973 13.1851 7.79562 13.2053 7.70075 13.2446C7.60588 13.2839 7.51968 13.3415 7.44707 13.4141C7.37446 13.4868 7.31687 13.573 7.27757 13.6678C7.23828 13.7627 7.21805 13.8644 7.21805 13.9671V15.2177C7.21805 15.4251 7.30043 15.624 7.44707 15.7706C7.59371 15.9173 7.7926 15.9996 7.99998 15.9996C8.20736 15.9996 8.40625 15.9173 8.55289 15.7706C8.69953 15.624 8.78191 15.4251 8.78191 15.2177V13.9671C8.78182 13.7597 8.69941 13.5609 8.55279 13.4142C8.40617 13.2676 8.20733 13.1852 7.99998 13.1851ZM11.6662 4.33339C11.5197 4.18671 11.4374 3.98785 11.4374 3.78051C11.4374 3.57318 11.5197 3.37432 11.6662 3.22764L12.5509 2.34296C12.6232 2.26911 12.7095 2.21033 12.8047 2.17003C12.8999 2.12972 13.0021 2.1087 13.1055 2.10816C13.2088 2.10762 13.3113 2.12758 13.4069 2.16689C13.5025 2.2062 13.5894 2.26408 13.6625 2.33717C13.7356 2.41026 13.7934 2.49712 13.8327 2.59273C13.872 2.68833 13.892 2.79078 13.8915 2.89415C13.8909 2.99752 13.8699 3.09976 13.8296 3.19494C13.7893 3.29013 13.7305 3.37639 13.6567 3.44872L12.772 4.33339C12.6254 4.48001 12.4265 4.56238 12.2191 4.56238C12.0117 4.56238 11.8129 4.48001 11.6662 4.33339ZM4.33337 11.667C4.26081 11.5943 4.17463 11.5366 4.07976 11.4973C3.98489 11.4579 3.8832 11.4377 3.78049 11.4377C3.67779 11.4377 3.5761 11.4579 3.48123 11.4973C3.38636 11.5366 3.30018 11.5943 3.22762 11.667L2.34294 12.5513C2.19882 12.6984 2.11858 12.8965 2.11966 13.1025C2.12073 13.3084 2.20303 13.5057 2.34867 13.6513C2.49431 13.797 2.69154 13.8793 2.8975 13.8803C3.10347 13.8814 3.30154 13.8012 3.4487 13.657L4.33337 12.772C4.40599 12.6995 4.46361 12.6134 4.50291 12.5186C4.54222 12.4237 4.56245 12.3221 4.56245 12.2195C4.56245 12.1169 4.54222 12.0152 4.50291 11.9204C4.46361 11.8256 4.40599 11.7395 4.33337 11.667ZM13.1851 8C13.1851 7.56811 13.5351 7.21807 13.967 7.21807H15.218C15.3221 7.21585 15.4256 7.23444 15.5224 7.27273C15.6191 7.31102 15.7073 7.36825 15.7817 7.44106C15.8561 7.51387 15.9152 7.6008 15.9555 7.69675C15.9958 7.7927 16.0166 7.89574 16.0166 7.99982C16.0166 8.10391 15.9958 8.20695 15.9555 8.3029C15.9152 8.39884 15.8561 8.48577 15.7817 8.55859C15.7073 8.6314 15.6191 8.68863 15.5224 8.72692C15.4256 8.76521 15.3221 8.78379 15.218 8.78158H13.967C13.8644 8.78162 13.7627 8.76144 13.6678 8.72218C13.573 8.68293 13.4868 8.62536 13.4141 8.55278C13.3415 8.4802 13.2839 8.39403 13.2446 8.29918C13.2053 8.20433 13.1851 8.10267 13.1851 8ZM2.81451 8C2.81451 7.89732 2.79428 7.79564 2.75499 7.70077C2.71569 7.6059 2.65809 7.5197 2.58548 7.44709C2.51288 7.37448 2.42668 7.31689 2.33181 7.27759C2.23694 7.23829 2.13526 7.21807 2.03258 7.21807H0.781912C0.67785 7.21585 0.574393 7.23444 0.477607 7.27273C0.380821 7.31102 0.292654 7.36825 0.218276 7.44106C0.143897 7.51387 0.0848039 7.6008 0.044461 7.69675C0.00411808 7.7927 -0.0166626 7.89574 -0.0166626 7.99982C-0.0166626 8.10391 0.00411808 8.20695 0.044461 8.3029C0.0848039 8.39884 0.143897 8.48577 0.218276 8.55859C0.292654 8.6314 0.380821 8.68863 0.477607 8.72692C0.574393 8.76521 0.67785 8.78379 0.781912 8.78158H2.03293C2.24022 8.78158 2.43901 8.69923 2.58559 8.55266C2.73216 8.40608 2.81451 8.20729 2.81451 8ZM11.6662 11.667C11.8129 11.5204 12.0118 11.4381 12.2191 11.4381C12.4264 11.4381 12.6253 11.5204 12.772 11.667L13.6567 12.5516C13.8033 12.6983 13.8856 12.8971 13.8856 13.1045C13.8855 13.3118 13.8031 13.5106 13.6565 13.6572C13.5839 13.7298 13.4977 13.7874 13.4028 13.8266C13.308 13.8659 13.2063 13.8861 13.1037 13.8861C12.8963 13.8861 12.6975 13.8037 12.5509 13.657L11.6662 12.7724C11.5936 12.6998 11.536 12.6137 11.4967 12.5188C11.4574 12.424 11.4371 12.3223 11.4371 12.2197C11.4371 12.117 11.4574 12.0153 11.4967 11.9205C11.536 11.8257 11.5936 11.7395 11.6662 11.667ZM4.33337 4.33339C4.48 4.18675 4.56237 3.98788 4.56237 3.78051C4.56237 3.57315 4.48 3.37427 4.33337 3.22764L3.4487 2.34331C3.3011 2.20166 3.10386 2.12349 2.89929 2.12558C2.69473 2.12766 2.49913 2.20983 2.35445 2.35447C2.20976 2.4991 2.12753 2.69468 2.12538 2.89924C2.12323 3.10381 2.20133 3.30107 2.34294 3.44872L3.22762 4.33339C3.30018 4.40608 3.38636 4.46374 3.48123 4.50308C3.5761 4.54243 3.67779 4.56268 3.78049 4.56268C3.8832 4.56268 3.98489 4.54243 4.07976 4.50308C4.17463 4.46374 4.26081 4.40608 4.33337 4.33339Z" fill="currentColor"></path>
        </g>
        <defs>
          <clipPath>
            <rect width="16" height="16" fill="currentColor"></rect>
          </clipPath>
        </defs>
      </svg>
      <svg class="moon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_78_60)">
          <path d="M7.24135 14C10.1123 13.9981 12.6803 12.2445 13.7367 9.59537C13.7953 9.44832 13.727 9.39266 13.5866 9.46575C12.7818 9.88471 11.888 10.1036 10.9806 10.104C7.86082 10.1042 5.33169 7.57506 5.33188 4.45524C5.3323 3.64636 5.50645 2.84701 5.84254 2.11127C6.17863 1.37552 6.66883 0.720544 7.27996 0.190644C7.42672 0.0486062 7.38444 -0.0171645 7.09498 0.00382823C3.42058 0.029058 0.24231 3.13569 0.24231 7.00113C0.24231 10.8666 3.3758 14.0002 7.24135 14Z" fill="currentColor"></path>
        </g>
        <defs>
          <clipPath>
            <rect width="14" height="14" fill="currentColor"></rect>
          </clipPath>
        </defs>
      </svg>
    </span>
    Theme
  </label>
  <div class="theme-popup__list-container">
    <ul class="theme-popup__list">
      <li>
        <label for="default">
          <span class="theme-popup__icons">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2.52267C6.13332 2.64713 4.86254 3.27802 3.9372 4.29146C3.01186 5.3049 2.49882 6.62766 2.49882 8C2.49882 9.37234 3.01186 10.6951 3.9372 11.7085C4.86254 12.722 6.13332 13.3529 7.5 13.4773V2.52267ZM1.5 8C1.5 4.41 4.41 1.5 8 1.5C11.59 1.5 14.5 4.41 14.5 8C14.5 11.59 11.59 14.5 8 14.5C4.41 14.5 1.5 11.59 1.5 8Z" fill="currentColor"></path>
            </svg>
          </span>
          <span>
            OS Default
          </span>
        </label>
      </li>
      <li>
        <label for="light">
          <span class="theme-popup__icons">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_78_63)">
                <path d="M7.99998 3.99256C5.79024 3.99256 3.99254 5.79061 3.99254 8.00035C3.99254 10.2101 5.79024 12.0081 7.99998 12.0081C10.2094 12.0081 12.0074 10.2105 12.0074 8.00035C12.0074 5.79026 10.2094 3.99256 7.99998 3.99256ZM7.99998 2.81453C7.79266 2.81453 7.59383 2.73219 7.4472 2.58563C7.30057 2.43907 7.21814 2.24027 7.21805 2.03295V0.781931C7.21805 0.57455 7.30043 0.375663 7.44707 0.229022C7.59371 0.0823818 7.7926 0 7.99998 0C8.20736 0 8.40625 0.0823818 8.55289 0.229022C8.69953 0.375663 8.78191 0.57455 8.78191 0.781931V2.03295C8.78182 2.24027 8.6994 2.43907 8.55276 2.58563C8.40613 2.73219 8.2073 2.81453 7.99998 2.81453ZM7.99998 13.1851C7.8973 13.1851 7.79562 13.2053 7.70075 13.2446C7.60588 13.2839 7.51968 13.3415 7.44707 13.4141C7.37446 13.4868 7.31687 13.573 7.27757 13.6678C7.23828 13.7627 7.21805 13.8644 7.21805 13.9671V15.2177C7.21805 15.4251 7.30043 15.624 7.44707 15.7706C7.59371 15.9173 7.7926 15.9996 7.99998 15.9996C8.20736 15.9996 8.40625 15.9173 8.55289 15.7706C8.69953 15.624 8.78191 15.4251 8.78191 15.2177V13.9671C8.78182 13.7597 8.69941 13.5609 8.55279 13.4142C8.40617 13.2676 8.20733 13.1852 7.99998 13.1851ZM11.6662 4.33339C11.5197 4.18671 11.4374 3.98785 11.4374 3.78051C11.4374 3.57318 11.5197 3.37432 11.6662 3.22764L12.5509 2.34296C12.6232 2.26911 12.7095 2.21033 12.8047 2.17003C12.8999 2.12972 13.0021 2.1087 13.1055 2.10816C13.2088 2.10762 13.3113 2.12758 13.4069 2.16689C13.5025 2.2062 13.5894 2.26408 13.6625 2.33717C13.7356 2.41026 13.7934 2.49712 13.8327 2.59273C13.872 2.68833 13.892 2.79078 13.8915 2.89415C13.8909 2.99752 13.8699 3.09976 13.8296 3.19494C13.7893 3.29013 13.7305 3.37639 13.6567 3.44872L12.772 4.33339C12.6254 4.48001 12.4265 4.56238 12.2191 4.56238C12.0117 4.56238 11.8129 4.48001 11.6662 4.33339ZM4.33337 11.667C4.26081 11.5943 4.17463 11.5366 4.07976 11.4973C3.98489 11.4579 3.8832 11.4377 3.78049 11.4377C3.67779 11.4377 3.5761 11.4579 3.48123 11.4973C3.38636 11.5366 3.30018 11.5943 3.22762 11.667L2.34294 12.5513C2.19882 12.6984 2.11858 12.8965 2.11966 13.1025C2.12073 13.3084 2.20303 13.5057 2.34867 13.6513C2.49431 13.797 2.69154 13.8793 2.8975 13.8803C3.10347 13.8814 3.30154 13.8012 3.4487 13.657L4.33337 12.772C4.40599 12.6995 4.46361 12.6134 4.50291 12.5186C4.54222 12.4237 4.56245 12.3221 4.56245 12.2195C4.56245 12.1169 4.54222 12.0152 4.50291 11.9204C4.46361 11.8256 4.40599 11.7395 4.33337 11.667ZM13.1851 8C13.1851 7.56811 13.5351 7.21807 13.967 7.21807H15.218C15.3221 7.21585 15.4256 7.23444 15.5224 7.27273C15.6191 7.31102 15.7073 7.36825 15.7817 7.44106C15.8561 7.51387 15.9152 7.6008 15.9555 7.69675C15.9958 7.7927 16.0166 7.89574 16.0166 7.99982C16.0166 8.10391 15.9958 8.20695 15.9555 8.3029C15.9152 8.39884 15.8561 8.48577 15.7817 8.55859C15.7073 8.6314 15.6191 8.68863 15.5224 8.72692C15.4256 8.76521 15.3221 8.78379 15.218 8.78158H13.967C13.8644 8.78162 13.7627 8.76144 13.6678 8.72218C13.573 8.68293 13.4868 8.62536 13.4141 8.55278C13.3415 8.4802 13.2839 8.39403 13.2446 8.29918C13.2053 8.20433 13.1851 8.10267 13.1851 8ZM2.81451 8C2.81451 7.89732 2.79428 7.79564 2.75499 7.70077C2.71569 7.6059 2.65809 7.5197 2.58548 7.44709C2.51288 7.37448 2.42668 7.31689 2.33181 7.27759C2.23694 7.23829 2.13526 7.21807 2.03258 7.21807H0.781912C0.67785 7.21585 0.574393 7.23444 0.477607 7.27273C0.380821 7.31102 0.292654 7.36825 0.218276 7.44106C0.143897 7.51387 0.0848039 7.6008 0.044461 7.69675C0.00411808 7.7927 -0.0166626 7.89574 -0.0166626 7.99982C-0.0166626 8.10391 0.00411808 8.20695 0.044461 8.3029C0.0848039 8.39884 0.143897 8.48577 0.218276 8.55859C0.292654 8.6314 0.380821 8.68863 0.477607 8.72692C0.574393 8.76521 0.67785 8.78379 0.781912 8.78158H2.03293C2.24022 8.78158 2.43901 8.69923 2.58559 8.55266C2.73216 8.40608 2.81451 8.20729 2.81451 8ZM11.6662 11.667C11.8129 11.5204 12.0118 11.4381 12.2191 11.4381C12.4264 11.4381 12.6253 11.5204 12.772 11.667L13.6567 12.5516C13.8033 12.6983 13.8856 12.8971 13.8856 13.1045C13.8855 13.3118 13.8031 13.5106 13.6565 13.6572C13.5839 13.7298 13.4977 13.7874 13.4028 13.8266C13.308 13.8659 13.2063 13.8861 13.1037 13.8861C12.8963 13.8861 12.6975 13.8037 12.5509 13.657L11.6662 12.7724C11.5936 12.6998 11.536 12.6137 11.4967 12.5188C11.4574 12.424 11.4371 12.3223 11.4371 12.2197C11.4371 12.117 11.4574 12.0153 11.4967 11.9205C11.536 11.8257 11.5936 11.7395 11.6662 11.667ZM4.33337 4.33339C4.48 4.18675 4.56237 3.98788 4.56237 3.78051C4.56237 3.57315 4.48 3.37427 4.33337 3.22764L3.4487 2.34331C3.3011 2.20166 3.10386 2.12349 2.89929 2.12558C2.69473 2.12766 2.49913 2.20983 2.35445 2.35447C2.20976 2.4991 2.12753 2.69468 2.12538 2.89924C2.12323 3.10381 2.20133 3.30107 2.34294 3.44872L3.22762 4.33339C3.30018 4.40608 3.38636 4.46374 3.48123 4.50308C3.5761 4.54243 3.67779 4.56268 3.78049 4.56268C3.8832 4.56268 3.98489 4.54243 4.07976 4.50308C4.17463 4.46374 4.26081 4.40608 4.33337 4.33339Z" fill="currentColor"></path>
              </g>
              <defs>
                <clipPath>
                  <rect width="16" height="16" fill="currentColor"></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            Light
          </span>
        </label>
      </li>
      <li>
        <label for="dark">
          <span class="theme-popup__icons">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_78_60)">
                <path d="M7.24135 14C10.1123 13.9981 12.6803 12.2445 13.7367 9.59537C13.7953 9.44832 13.727 9.39266 13.5866 9.46575C12.7818 9.88471 11.888 10.1036 10.9806 10.104C7.86082 10.1042 5.33169 7.57506 5.33188 4.45524C5.3323 3.64636 5.50645 2.84701 5.84254 2.11127C6.17863 1.37552 6.66883 0.720544 7.27996 0.190644C7.42672 0.0486062 7.38444 -0.0171645 7.09498 0.00382823C3.42058 0.029058 0.24231 3.13569 0.24231 7.00113C0.24231 10.8666 3.3758 14.0002 7.24135 14Z" fill="currentColor"></path>
              </g>
              <defs>
                <clipPath>
                  <rect width="14" height="14" fill="currentColor"></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            Night
          </span>
        </label>
      </li>
    </ul>
  </div>
</div>

</div>








{/*                             dark and light mode ends here 
*/}

   </nav>
   <div className="file">
{records.map((d,i)=>(
  <div className="d-flex " key={i} >
   <div class=" layouts">
    <CarCard 
      id={d.id}
      carimage={d.carimage}
      year={d.year}
      feul={d.feul}
      carname={d.carname}
      speeds={d.speeds}
      peoples={d.peoples}
      price={d.price}
      steering={d.steering}

/>
</div>

  </div>
))}
</div>

{//                                                    pagination  starts from here 
}

<div className="page">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous"
      onClick={previouspage}
      >
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
{
numbers.map((n,i) =>(
  <li className= "page-item"  key={i}>
<a  className='page-link'  href='#'  onClick={() =>  changepage(n)}> {n}  </a>

  </li>
))

}
<li className="page-item">
    
      <a class="page-link" href="#" aria-label="Next"
      onClick={nextpage}> Next
       
      </a>
    </li>
  </ul>
-
</div>



   </div>
    )
 }