// 20-03-2023 - Notifications

// Show notification on top of header (Right Corner)
// Design Should show a circular or any small icon, to show number of notifications
// Upon click it should expand in rectangular box and show all the notification messages 
// All notification messages should be clickable
// Upon click of any of them it should reduce the count in notification icon
// It should have two types of notifications - static and dynamic
// Static Notifications To Assist User
// 1. To Add Products from Product Screen
// 2. To Add Items from Cart Page
// 3. To review cart from Checkout Page
// 4. To Make Payment from Payment Page
// 5. To Assist Them for cancel/reorder
// Dynamic Notifications To Assist User
// 1. To Check the number of items added in the Cart
// 2. If user cancels an order it should it should add one notification that an order has been cancelled and add it to notification row


// 17-03-2023 - Logout
// LogOut : Set up logout button/link on TopRight corner, upon click user should be cleared and back to home

// 17-03-2023 - Review Page
// This should get its reviews from recent orders page
// User should be allowed to give ratings and his comments to each products
// Upon successful submission each product should have a link to show its review 
// When user expands product detail we should also see the button to which will take us to its review
// on recent order page we can show a popup to submit rating or a new page its up to you //can use -> react bootstrap
// user should only be able to give rating once cancel button is gone


// 15-01-2023 - Practice Question

// Reorder
// User to reorder from recent orders or from cancelled orders
// A Simple process just add the order to your cart and replace or merge whatever is present in cart


// 14-01-2022 - Recentorder Page 
// Upon MakePayment Click
// Save the cart to RecentOrders collection (should have userid, order, dateTime)
// Make API to Save and Fetch from RecentOrders
// Make a component RecentOrders to Show all previous Orders of current user
// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days (48 hrs) after that it should be marked delivered

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