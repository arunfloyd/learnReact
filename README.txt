--------------------------------------------------------------------------------------------------------    
                                   <---This is the NOTES for React Learning --->
------------------------------------------------------------------------------------------------------------
" Transitive Dependencies "  ==> Dependency which depends on other dependency 
                             Eg: Parcel have many Dependencies and it have other dependency

==> What are the things PARSER done??

Parser will take all the development things 

--> Created A Server
--> HMR - Hot Module Replacement
--> File Watcher Algorithm - C++ (Wrote)
--> BUNDLING
--> MINFIY
--> Cleaning Our Code;
--> Dev and production Build
--> Super fast Build Algorithm
--> Image Optimization
--> Cache while development
--> Compactable with older version of browser (doing polyfills)
--> Gives HTTPS on development    
--> Port Number 
--> We Should put parcel cache folder in .gitignore(Any thing which auto or regenerated ont he server can put in gitinore)
--> Consistent Hashing Algorithm
--> Zero Config
--> Transitive Dependencies

...............................................................................................
                                               JSX 
...............................................................................................

--> JSX is not Html in JavaScript

--> JSX is HTML like or XML -like syntax

--> JSX is a react element

--> JSX will transpiled before it reaches the JS Engine
    (convert the code which have been in html to JS engine Understandable or React understand)

--> So here it PARSER(Manage) and the BABEL will make the convertion of JSX into react code

--> The JSX converted into the React.createElement actually 

--> The BABEL is converting the JSX to React code

--> JSX is aware of Cross site scripting 



...............................................................................................
                                               React Components  
...............................................................................................

-> Everything is Components in React (Button ,footer,heading,input box ,list of cards etc ......)

-> There are two types of Components 

           *1* - Class Based Components -OLD way of writing Components

           *2* - Functional Components -NEW way of writing Components
  
 >>>  React Functional Components  

  ->- Just a noraml JavaScript Function which returns some JSX element or React element
  
  ->- When naming Should start with Capital letter

  ->- To render the Functional Components [ <NameOfFun /> ] (this is the syntax which Our BABEL understand)

  ->- Component Composition  { Component inside Component}

   ->- { } we can write JS code inside the JSX

...............................................................................
              Props - Properties
.............................................................................

-> It is something which can be passed something to components

-> Props are just arguments of the functions

-> Passing props to the component can be said passing the arguments to the functions


..................................................................
             ConfigDrivenUI
.................................................................

-> Controlling UI using datas

........................................



....................................................................
                   Key looping
....................................................................
 -> The Child Components should be uniquely represented because at the time of the dynamic changes
    when a new thing is appended react can't find it as a new one .

 -> That time react will rerender all this cards .it treat all as same 

 -> But when we give a unique id then react will understand which is the new and it render only the new 
    so it can be a better Optimization .

 -> "React itself says that never use the loop index as the keys"
    not usig keys (not acceptable) <<< using index key <<<<<<<<<<<<<< unique id(Best Method)

 -> When you are looping you should pass a key as a variable like this 

  Eg: "<ResturantCard key={restaurant.info.id} resData={restaurant} />"
                     ........................

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        
        {resList.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

..................................................................................
                           Why React ??? !!
..................................................................................

-> Every thing which we can do in react can be done using HTML and CSS .

-> React makes our development so easy ,write less code and do more things on the web page.

-> Also easy to optimize the works


..............................................................
 -> Never Use Hard Coded things in the component file 

 -> You should save it in the folder Utils 
...............................................................


>>>>>>>>>>>>>>  Two types Export and Import  : -

                          >>>>>>> Default Export/Import 
                              >> export default Component
                              >> Import Component from "path"

                          >>>>>>> Named Export/Default
                              >> export default Component
                              >> Import {Component} from "path"   

!!!...........................IMPORTANT.......................................!!!

>>>>> Why React is fast  ?? 

-> Because React is doing efficent Manipulation of DOM .
-> How ? 
     -> It has a Virtual DOM 
     -> It having Diff Algorithm 
-> React can efficently find out the differnece between virtual DOM and update the UI

!!!...........................................................................!!!


..................................................................................
                            React Hooks !!
..................................................................................

-> State variable - super powerful variable you can use Hook 

-> Noraml JS Utility given by React is Hook super power 

->Types of  important !! Hooks 
     
      -> useState() - Superpowerful state variable in React
                    - Import {useState} from "react" : import as named 
                    - When ever a state variable updates react rerender the component
                    
      -> useEffect() - UseEffect Hooks which is normal JS function in which react give super power
                       which have specific function purpose

                     - useEffect(which have two arguments)    
                     - when this call back function called is after the render 
               Eg:-  
                     useEffect(() => {
                        console.log("UseEffect");
                             }, []);
                    - First the body function will render & after the render cycle the useEffect callback is called  

...................................................................................
    ->  React uses Reconcilation Algorithm (also known as REACT FIBER)

............Virtual DOM .......................

     -> Virtual DOM is not a actual DOM (<div> ....</div>)
     -> VDOM is only the representation of actual DOM


..........     Diff Algorithm ..............

  -> Its Find the differnece between updated and previous  


 
...........................................................................

 >>>>   Monolithic and Micro service Architecture  <<<<

 >>>> Monolithic <<<<

 ->Inside the product 
       - API Code
       - UI Code
       - Authentication Code
       - Database Code
       - Notification Code

-> Now all the big companies move to the MICROSERVICE

>>> MICROSERVICES <<<

-> We can write different programming languages for each MICROSERVICE
-> Different service differnt server like small services
       - API Code
       - UI Code
       - Authentication Code
       - Database Code
       - Notification Code

  after the completion small services it makes the application     

  -> Seperate project for all the services like API ,UI etc ...

  -> For each samll service it have different project called  SEPERATION OF CONCERNS '
     and it follow single service priciple

  >>> How this interact with each other 
     eg: UI wants to connect to the backend etc ..... 

     ->  Namaste React is UI MICROSERVICES 
     
     eg: Our UI is on PORT number : 1234 
         Our BACKEND is on PORT number : 1000
         Our SMS is on PORT number : 3000
     
     -> At the end all the ports connected to the DOMAIN NAME   
        / -UI
        /API - Backend


...> There are two options for render the UI

1.
 LOADS -->  API(500ms) --> RENDER 

2.(React approach which is good method)

 LOADS --> RENDER(Render the UI Skeloton) --> API --> RERENDER(it doesnit matter (only two),react render cycle is very fast)

 --> Gives better UX 



>>> Shimmer UI
  > Like lasy Loading like dummy UI


>>> Conditional Rendering : Running according to a Condition 

>>> Why do we need State Variable ??? 
  -> 

>>> State React Variable  <<<

 -> whenever state variables update ,react triggers a Reconcilation cycle(re-renders the component)


> > > > > Use Effect Hook Imp !!  < < < < < < 

 >> 1st Case -> if no dependency array is called useEffect is called on every render
   
         Eg: - useEffect(()=>{
               console.log("Header")
                })

 >> 2nd Case -> if dependency array is  empty = [] =>  useEffect is called on initial render(just once)

            Eg: - useEffect(()=>{
               console.log("Header")
                },[])
 >> 3rd Case -> if dependency array is [btnNameReact] (or some Dependencies are there) =>  
                              called Everythime [btnNameReact](dependency updated) updated.


> > > > > UseState Hook Imp !!  < < < < < <
 
 -> Call useState on Top for better

 -> It used to create local state variables inside the functional components  

 -> Call the use State inside the body 

 -> Don't create useState inside a condition ,for loop,inside a function => Makes inconsistency in program


  >>>> Never Use Anchor (<a>)tag to changes the Route
                 >>> Because the page is reloading 
    >>> Use link instead from react router dom             


>>> Single Page Application is React 

   >> Why ?? There is only one page just the components get interchanged via clientside Routing

 >>> Two type of Routing in web app

         >>> Client Side Routing 
              :- Not making network because all the datas are already have it when the route changes it load the component
         >>> Server Side Routing 
              : - Makes a network call and fetch the data from the network also reload the page


           
  >>> Dynamic Routing - loads the same page but with different Route
                         Eg:  Flipkart product selection 

                         
.....................>>> Class based Component  <<<.........................

>>> Functional component is basically a function that returns a piece of JSX

>>> Class based Component is which Extends React.Component and it has a render method to return the JSX
   >> React.Component a class which is inside the react package


>>>>>>>>>>>>>>>> Comparison between two of them <<<<<<<<<<<<<<<<

>>>> Functional component
  Eg:   const functional =()=>{
      
          return(
            <div className="user-card">
                  <h2>Name : Arun</h2>
                  <h2>Loaction : Malappuram</h2>
                  <h4>Contact : @arunfloyd</h4>
            </div>
        )
    
}
>>>> Class based Component
Eg: class UserClass extends React.Component{
    render(){
        return(
            <div className="user-card">
                  <h2>Name : Arun</h2>
                  <h2>Loaction : Malappuram</h2>
                  <h4>Contact : @arunfloyd</h4>
            </div>
        )
    }
}


>>>> Life Cycle Of Parent Child Component 

>>> How the flow works
  >>First the parent Constructor works ,then parent render method after this child constructor then child render method will works 


>>>> componentDidMount()  - when constructor and render method is called then the componetDidMount is called
                          - When all the components are called then the parent componentDidMount is called

       >>> ORDER 
             1.Parent Constructor
             2.Parent Render
             3.Child constructor
             4.Child render
             5.Child Component Mount 
             6.Parent Component Mount                    

 >>> componentDidMount Usage  -> Used to make API Call            

 >>> When there is multiple childrens are there the order of the life cycle will changes
   >> React is optimising 

        >>  ORDER
        1. Parent Constructor
        2. Parent Render
           3. ArUn FloYd (Class component)Child constructor
           4. ArUn FloYd (Class component)Child render
              5. Akshay Saini (Class component)Child constructor
              6. Akshay Saini (Class component)Child render

              < Here the DOM is Updated - In single Batch >

                 7. ArUn FloYd (Class component)Child Component Mount 
                 8. Akshay Saini (Class component)Child Component Mount 
        9. Parent Component Mount 

     >> Life Cycle Link 
        >> https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/    


  >>>>>> Mounting Life Cycle <<<<<<<<<<<<<<<<

  > 1 . Constructor(dummy)
    2 . Render(dummy)
              2.1 <HTML dummy>
    3. Component Did Mount
              3.1  <API Call> 
              3.2  <this.setState >  --> state variable is updated
    4--Updated
        4.1 Render(API data)
        4.2 HTML(new API data) 
    5. componentDid update     


  >>> Advantage Of Modular Codeing 
    >> Features of reuseabiltiy
    >> Maintainable
    >> Testable          



>>>  Chunking || Code Spliting  || Dynamic Bundling || Lazy Loading || On Demanding Loading || Dynamic import

  >> Decreasing the code into bundlers so it can be increase the performance of the app
   
   > Eg :- 
         import React, { lazy } from "react";
         const Grocery = lazy(()=>import("./components/Grocery"))  --(This line is powerfull)
   

   >>> Sass & SCSS

   >> Styled Component

   >> Exported and Use like library -- Material UI --Chakara UI  -- Ant UI


   >>> >>>>> >>>>>>   Tailwind CSS  <<<<<<<<< <<<<<<<<<<<< <<<<<<

   
>>> Higher Order Component 
   
    >> Higher order component is a function that takes a component and enhances the component then returns a component

>>> React Context 
  
  >> To Avoid prop drilling in react also which the data can be accessed from anywhere .
  >> Data which should be used on multiple areas we can use Context.
  >> Context is space which have space on the whole app or any particular sections. 

>>> Redux 
 
  >> Used for handling the state management of the application 
  >> Redux offers easy debugging  
  >> It is Not Mandatory in your application 
  >> Redux and React is Seperate library .
  >> Other than Redux -ZUSTAND  
  >> Redux uses Immer behind the screen

>> Redux Tool Kit (RTK)  

  >> Ref image -- Drawings > redux  
  >> Redux store is a big object and its kept on a global center state 
  >> If want to add the thing into redux it cant do directly it should dispatch a action then it calls a function internally modify the cart.
  >> When you press or call the Add button it will dispatch a action then it calls the reducer function which will update the slice of a redux store.
  >> To acess the data from the slice store selector is used to access the data and this process is  known as subscribing to the store.

  >> Selector - it is a hook in the react 
              - Hook is a normal js function

  >> Things to Remember when using the redux 

  >> Subscribe to the specific path only don't Subscribe to the entire store which wil reduce the performance
     Eg: const cartItems = useSelector((store) => store.cart.items);
           

  >> Testing / Test  Cases         

    >> Differnet Type of Testing - Developer Can do 
     
      >> Unit Testing
                 -> You test the react components in isolation (Eg : Test only the header or one unit component only)
      >> Integration Testing
                 -> Where multiple components are communicate each other to give the result (Eg: Searching functionality on siggy app)
      >> End to End Testing -E2E Testing
                 -> Test from the user enters to the application to which he leave from the app
  >> Setting Up Testing in our app 

      >> Testing library 
         >> React Testing library (it uses jest framework )   
         >> Jest 
          >> Babel installed and configured babel on babel.config.js  
          >> Config parcel file to disable default babel transpilation on .parcelrc    
          >> Jest configuration   (npx jest --init) 
         >> install jsdom 
         >> Install @babel/preset-react  - to make JSX work in test case
         >> Include @babel/preset-react inside my babel config
         >> Install @testing-library/jest-dom

    >> it === test both of them are same as alias of test
    >> "watch-test":"jest --watch" - automatically load (like nodemon)
    >> import { act } from "react-dom/test-utils"; if there is async we should wrap our component with it

    