import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/editorjs";
import List from "@editorjs/editorjs";
import Embed from "@editorjs/editorjs/";


const editor = new EditorJS({
    holderId: 'postForm',
    tools: {
        header: {
            class: Header,
            inlineToolbar: ["link"]
        },
        list: {
            class: List,
            inlineToolbar: [
                'link',
                'bold'
            ]
        },
        embed: {
            class: Embed,
            inlineToolbar: false,
            config: {
                youtube: true,
                coub: true
            },
        },
    },
})


export const save = saveButton => {
    saveButton.addEventListener('click', ()=> {
        editor.saver().then((data)=> {
            console.log(data)
        }).catch((error)=> {
            console.log("Saving Failed:", error);
        })
    })
}


