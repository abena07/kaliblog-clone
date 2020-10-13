/**
 * Returns the Authentication Token of the logged in user
 * @returns {string}
 */
export const getAuthToken = () => {
    return localStorage.getItem("auth_token");
}


/**
 * Add class to animate elements
 * @param elements -> array or equivalent sequence
 */
export const animateElements = elements => {
    for (let element of elements) {
        element.classList.add("aos-init", "aos-animate")
    }
}