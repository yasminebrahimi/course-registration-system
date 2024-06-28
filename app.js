




// Define enrolled courses and cart items
const enrolledCourses = [1, 2]; 
const cart = [
    {
        id: 1, 
        title: "P-1", 
        price: 80, 
    }, 
    {
        id: 2, 
        title: "P-2", 
        price: 70, 
    }, 
    {
        id: 3, 
        title: "P-2", 
        price: 90, 
    }, 
    {
        id: 4, 
        title: "P-4", 
        price: 110, 
    }
]; 

// Function to check if any enrolled course is already in the cart
function checkAlreadyEnrolled(cart, enrolledCourses){
    // Extract IDs from cart items
    const cartCourseIds = cart.map((c) => c.id);  // [1, 2, 3, 4]
    
    // Check if any enrolled course ID is in the cart
    const found = enrolledCourses.some(id => cartCourseIds.includes(id)); 
    
    // Return appropriate message based on whether a match was found
    if (found) {
        return "You are already registered in one of the courses in the cart."; 
    } else {
        return "Congrats! You successfully registered!";
    }
}


console.log(checkAlreadyEnrolled(cart, enrolledCourses));  
