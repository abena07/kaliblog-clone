import Embed from '@editorjs/embed';
import Table from '@editorjs/table'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'


const imageUploadEndpoint = 'http://localhost:2000/api/post/image/'

export const EDITOR_JS_TOOLS = {
    embed: Embed,
    table: Table,
    list: List,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    image: {
        class: Image,
        config: {
            endpoints: {
                byFile: imageUploadEndpoint,
                byUrl: imageUploadEndpoint
            }
        }
    },
    raw: Raw,
    header: Header,
    quote: Quote,
    marker: Marker,
    checkList: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage

};