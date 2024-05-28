import React from "react";
import "./Navbar.css";

const Footer = () => {
  return (
    <div className="bg-navbar">
      <footer class="footer p-12  text-base-content">
        <aside>
          <div class="w-10 rounded-full">
            <img alt="" src="/logo.png" />
          </div>
          <p className="text-align: left">
            {" "}
            Design amazing digital experince <br></br> that cre more happy in
            the world
          </p>
        </aside>
        <nav>
          <h6 class="footer-title">Products</h6>
          <a class="link link-hover">Overview</a>
          <a class="link link-hover">Features</a>
          <a class="link link-hover">Solutions</a>
          <a class="link link-hover">Turorials</a>
          <a class="link link-hover">Pricing</a>
          <a class="link link-hover">Releases</a>
        </nav>
        <nav>
          <h6 class="footer-title">Company</h6>
          <a class="link link-hover">About Us</a>
          <a class="link link-hover">Careers</a>
          <a class="link link-hover">Press</a>
          <a class="link link-hover">News</a>
          <a class="link link-hover">Media Kit</a>
          <a class="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 class="footer-title">Resources</h6>
          <a class="link link-hover">Blog</a>
          <a class="link link-hover">Newsletter</a>
          <a class="link link-hover">Event</a>
          <a class="link link-hover">Help centre</a>
          <a class="link link-hover">Tutorials</a>
          <a class="link link-hover">Support</a>
        </nav>
        <nav>
          <h6 class="footer-title">Social</h6>
          <a class="link link-hover">Twitter</a>
          <a class="link link-hover">Linkedin</a>
          <a class="link link-hover">Facebook</a>
          <a class="link link-hover">Github</a>
          <a class="link link-hover">AngelList</a>
          <a class="link link-hover">Dribble</a>
        </nav>
        <nav>
          <h6 class="footer-title">Legal</h6>
          <a class="link link-hover">Terms </a>
          <a class="link link-hover">Privacy </a>
          <a class="link link-hover">Cookies</a>
          <a class="link link-hover">Licenses</a>
          <a class="link link-hover">Setting</a>
          <a class="link link-hover">Contact</a>
        </nav>
      </footer>

      <footer class="footer px-12 py-4 border-t  text-base-content border-base-300">
        <aside class="items-center grid-flow-col">
          <p>&copy; 2024 Heritage-Nest . All rights reserved.</p>
        </aside>
        <nav class="md:place-self-center md:justify-self-end">
          <div class="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  fill="blue"
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                ></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  fill="blue"
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                ></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  fill="blue"
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                ></path>
              </svg>
            </a>

            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32"
                height="32"
              >
                <path
                  fill="blue"
                  d="M16 7a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2zm-3 9v1a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1v-1h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3h-5a3 3 0 0 0-3 3zm8 0v1a1 1 0 0 1-1 1h-1v2h1a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3h-1v-1h1a1 1 0 0 1 1 1z"
                />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
