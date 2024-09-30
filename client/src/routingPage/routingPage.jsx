import {
  createBrowserRouter,
} from "react-router-dom";
export const router = createBrowserRouter([
           {
        path:"/",
       element:<div>Root page</div>,
      },
              {
        path:"home",
       element:<div>Home page</div>,
      },
            {
        path:"profile",
       element:<div>This is progile page</div>,
      },
           {
        path:"sport",
        element:<div>sport</div>,
      },
]);
