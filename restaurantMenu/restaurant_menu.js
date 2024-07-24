document.addEventListener('DOMContentLoaded', () => {
    const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
    const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
    const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

    // Generate HTML for breakfast menu items
    const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
    document.getElementById('breakfastTotalItems').innerHTML = `<p>Total Items: ${breakfastMenu.length}</p>`;

    // Debugging: Check if the elements are being accessed correctly
    console.log('Main Course Menu Element:', document.getElementById('mainCourseMenuItems'));
    console.log('Dessert Menu Element:', document.getElementById('dessertMenuItems'));

    // Generate HTML for main course menu items
    let mainCourseMenuItemsHTML = '';
    mainCourseMenu.forEach((item, index) => {
        mainCourseMenuItemsHTML += `<p>Item ${index + 1}: ${item}</p>`;
    });
    document.getElementById('mainCourseMenuItems').innerHTML = mainCourseMenuItemsHTML;
    document.getElementById('mainCourseTotalItems').innerHTML = `<p>Total Items: ${mainCourseMenu.length}</p>`;

    // Generate HTML for dessert menu items
    let dessertMenuItemsHTML = '';
    for (let i = 0; i < dessertMenu.length; i++) {
        dessertMenuItemsHTML += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
    }
    document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML;
    document.getElementById('dessertTotalItems').innerHTML = `<p>Total Items: ${dessertMenu.length}</p>`;
});


