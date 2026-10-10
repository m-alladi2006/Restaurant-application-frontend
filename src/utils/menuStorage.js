import initialMenuData from "../data/menuData";

export const getMenu = () => {
    const savedMenu = localStorage.getItem("restaurant_menu");
    if (savedMenu) {
        return JSON.parse(savedMenu);
    }
    // Seed with initial data if not present
    localStorage.setItem("restaurant_menu", JSON.stringify(initialMenuData));
    return initialMenuData;
};

export const saveMenu = (menuItems) => {
    localStorage.setItem("restaurant_menu", JSON.stringify(menuItems));
};
