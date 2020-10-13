import { useEffect } from 'react'


const useAnimate = elements => {
    useEffect(()=> {
        console.log(elements)
        setTimeout(()=> {
            if (elements.length > 0) {
                for (let element of elements) {
                    element.classList.add("aos-init", "aos-animate");
                }
            }else {
                console.log(elements)
            }
        }, 1000);
    }, [])
}


export default useAnimate;