import React, {useEffect, useState} from "react";
import axios from 'axios';

import Header from "../../widgets/Header";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../../editor-constants";
import {getAuthToken} from "../../utils";


const CreatePost = () => {

    const [editorInstance, setEditorInstance] = useState(null);

    let editor = null;

    const placeholderData =
        {
          time: 1556098174501,
          blocks: [
              {
              type: "image",
              data: {
                text: "Image Goes here",
                caption: "Your Article Image Here",
              }
            },
            {
              type: "header",
              data: {
                text: "Your Heading goes here",
                level: 2
              }
            },
            {
              type: "paragraph",
              data: {
                text:
                  "Place your sub heading text here. Make your sub heading text descriptive about the content of the post<br /><br />"
              }
            },
              {
                  type: "paragraph",
                  level: 3,
                  data: {
                      text:
                      "Your post content goes here."
                  }
              }
            ],
        version: "2.12.4"
    }

    const savePost = async () => {
        const savedData = await editorInstance.save();
        sessionStorage.setItem("post", JSON.stringify(savedData));

        savedData.blocks.slice(0, 2);   // Remove Titles
        const postData = {
            title: JSON.stringify(savedData.blocks[1]),
            subTitle: JSON.stringify(savedData.blocks[2]),
            description: JSON.stringify(savedData)  // b .blocks.slice(3, savedData.blocks.length))
        }

        const token = `Token ${getAuthToken()}`;
        axios.post('http://localhost:9000/api/posts/', postData, {
            headers: {
                Authorization: token
            }
        })
            .then(response=> {
                console.log(response);
            })
            .catch(error=> {
                if (error.response){
                    console.log(error.response.data);
                }
            });
    }

    return (
        <div>
            <Header nav={true} />
            <main>
                <section className="mb-6 mb-lg-7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 py-10 z-index-1">
                                <EditorJs
                                    data={placeholderData}
                                    instanceRef={instance => setEditorInstance(instance)}
                                    tools={EDITOR_JS_TOOLS}
                                />
                                <div className="btn-row">
                                    <button onClick={savePost} className="btn btn-sm btn-primary float-right ml-5 mr-lg-9">
                                        Publish
                                    </button>
                                    <button className={"btn btn-sm btn-soft-secondary float-right"} id="savePost">Save as draft</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}


export default CreatePost;