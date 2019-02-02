declare module "*.svg" {
    const content: string
    export default content
}

declare module '*.png'

declare module '*/emoji/allEmoji.js'

declare module 'recordrtc/RecordRTC.js'

declare module 'turndown'

declare module 'turndown-plugin-gfm/lib/turndown-plugin-gfm.es.js'

declare function captureEvents(name: string): void

interface Classes {
    preview?: string
}

interface Upload {
    url: string
    max?: number
    linkToImgUrl?: string
    success?: { (textarea: HTMLTextAreaElement, msg: string): void }
    error?: { (msg: string): void }
}

interface MenuItem {
    name: string
    icon?: string
    tip?: string
    hotkey?: string
    suffix?: string
    prefix?: string
    tail?: string
    tipPosition?: string
}

interface Preview {
    delay?: number
    show?: boolean
    parse?: { (element: HTMLElement): void }
    url?: string
}

interface Hint {
    delay?: number
    emoji?: any
    at?: { (value: string): Array<any> }
}

interface Options {
    height?: number | string
    width?: number | string
    placeholder?: string
    lang?: string
    toolbar?: Array<string | MenuItem>
    draggable?: boolean
    counter?: number
    userCache?: boolean
    preview?: Preview
    hint?: Hint
    upload?: Upload
    classes?: Classes
    input?: { (value: string, previewElement?: HTMLElement): void }
    focus?: { (value: string): void }
    blur?: { (value: string): void }
    esc?: { (value: string): void }
    ctrlEnter?: { (value: string): void }
    select?: { (value: string): void }
}

interface Vditor {
    id: string
    mdTimeoutId: number
    options: Options
    timeId: number
    toolbar?: any
    markdown?: any
    editor?: any
    counter?: any
    drag?: any
    hint?: any
    upload?: any
}