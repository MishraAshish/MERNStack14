// 13-03-2023 - Practice

// Coupon Page 
// Create a component with Name - CouponComponent (Functional Component and Use Hooks)
// On the page add a Button - GenerateCoupon
// Upon Click Generate a random coupon of - 6 digits (basically a numeric random value)
// Dispatch this generated coupon using useDispatch
// Create a Coupon Reducer to have Coupon Value, Use Reducer to update the coupon value (useSelector coupon)
// Create action to pass coupon to reducer, with type and payload

// Part 2 : 
// Hide all the links except : Home, User and About for a user not logged-in
// In Product Component show Save to product section only to a user with name "admin" so that not all users 
// can insert the products to database


// 09-03-2023 - Practice

// Checkout Component
// Create A functional component and use react hook or using container to read data from store
// Show - User Details (Name, address) //We will deliver products to below address kind of message as well
// Show Table of cart put up for purchase (you need to re-use the cartlist and cartitem components)
// Show the purchase Summary (total qty and total amount)
// Show a Button to Proceed to Payment
// Integrate this page on CartComponent Button (Go to checkout) -(Go To Checkout From Cart Component)

// Second Task :
// Create a state using useState to show hide (Make Payment Message)
// Upon Clicking on MakePayment button, hide everything and just show the message - "Thankyou for the payment, your items under process!"
// Change the header from Checkout Page to Payment Page

// 06-03-2023 - Practice

// Cart Implementation
// Create New Cart Component using react hooks, functional component
// Each Item in this component should be added from Product Component 
// Now each Product should have general fields, like Name, Description, Rating, Price, Category (New Product Document/ Collection)
// In Product component each item when we click to display details should also have a button "Add To Item" on click should add to New Cart
// On Cart Component, Button for save to Checkout should save the cart item to database (New Cart Document/ Collection)

// 01-03-2023 - Create Product and Display Them

// Create a product component using functional component and hooks (try using use state to read default values from reducer)
// Create a form to allow user to submit Product Details - name, price, desc, rating - textboxes and button
// Create an action method to add the detail to database using a server api - api/saveproduct
// Server Side - Create product router and api to save the product using productdatamodel
// Then create and API to fetch the products and displaye them on Another component - DisplayProducts


// 28-02-2023 - Other Practice Questions
// Practice - 1

//1. Create a component with name Hobby, add a textbox to insert hobbyname into it and save it to the database using SaveAPI
//2. Create an action to save the hobby, can use useractions file and userrouter file for the same