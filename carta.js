function showCategory(category) {

    const categories = document.querySelectorAll('.menu-category');
    categories.forEach(cat => cat.style.display = 'none');

    document.getElementById(category).style.display = 'flex';
}