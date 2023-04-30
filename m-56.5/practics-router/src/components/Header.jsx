
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import { getShoppingCart } from "../utilitis/fakeDB";

const Header = () => {

  const savedCart =  useContext(CartContext);
 
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">HeroGadget</a>
        </div>
        <div class="flex-none">
            <ul className="menu menu-horizontal px-1">
               <Link to='/'> <li><a>Home</a></li></Link>
              
               <Link to='/shop'> <li><a >Shop</a></li></Link>
              
                <Link to='about'><li><a href="#">About Us</a></li></Link>
            </ul>
          <div class="dropdown dropdown-end">
           <Link to='/cart'>
           <label tabindex="0" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="badge badge-sm indicator-item">{savedCart.length}</span>
              </div>
            </label>
           
           </Link>
            
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://simgbb.com/avatar/qMhZtCkRnRKp.png" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

[
  {
    "id": "1",
    "companyLogo": "https://example.com/images/company1.jpg",
    "jobTitle": "Software Engineer",
    "companyName": "ABC Company",
    "remoteOrOnsite": "Remote",
    "location": "Anywhere",
    "fulltimeOrParttime": "Fulltime",
    "salary": "$100,000 - $120,000",
    "jobDescription": "We are seeking a talented software engineer to join our team. You will be responsible for designing, developing, and maintaining software applications.",
    "jobResponsibility": "- Develop software solutions\n- Participate in code reviews\n- Work with cross-functional teams to determine project requirements",
    "educationalRequirements": "Bachelor's degree in computer science or related field",
    "experiences": "5+ years of software development experience",
    "contactInformation": {
      "phone": "555-1234",
      "email": "jobs@abccompany.com"
    }
  },
  {
    "id": "2",
    "companyLogo": "https://example.com/images/company2.jpg",
    "jobTitle": "Marketing Manager",
    "companyName": "XYZ Corporation",
    "remoteOrOnsite": "Onsite",
    "location": "New York, NY",
    "fulltimeOrParttime": "Fulltime",
    "salary": "$80,000 - $100,000",
    "jobDescription": "We are seeking an experienced marketing manager to lead our marketing team. You will be responsible for developing and implementing marketing strategies.",
    "jobResponsibility": "- Develop marketing strategies\n- Manage marketing team\n- Analyze market trends",
    "educationalRequirements": "Bachelor's degree in marketing or related field",
    "experiences": "7+ years of marketing experience, with at least 3 years in a management role",
    "contactInformation": {
      "phone": "555-5678",
      "email": "jobs@xyzcorp.com"
    }
  },
  {
    "id": "3",
    "companyLogo": "https://example.com/images/company3.jpg",
    "jobTitle": "Graphic Designer",
    "companyName": "123 Designs",
    "remoteOrOnsite": "Onsite",
    "location": "Los Angeles, CA",
    "fulltimeOrParttime": "Part-time",
    "salary": "$30 - $40 per hour",
    "jobDescription": "We are seeking a talented graphic designer to create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers.",
    "jobResponsibility": "- Develop the overall layout and production design of advertisements, brochures, magazines, and reports\n- Work with art directors to determine the scope of a project\n- Advise clients on strategies to reach a particular audience",
    "educationalRequirements": "Bachelor's degree in graphic design or related field",
    "experiences": "3+ years of graphic design experience",
    "contactInformation": {
      "phone": "555-9012",
      "email": "jobs@123designs.com"
    }
  },
  {
    "id": "4",
    "companyLogo": "https://example.com/images/company4.jpg",
    "jobTitle": "Human Resources Manager",
    "companyName": "456 Corp",
    "remoteOrOnsite": "Onsite",
    "location": "Chicago, IL",
    "fulltimeOrParttime": "Fulltime",
    "salary": "$70,000 - $90,000",
   
