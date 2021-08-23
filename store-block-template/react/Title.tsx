import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from "vtex.css-handles"

const CSS_HANDLES = ["title"] as const

interface TitleProps {
    title: string
}

const Title: StorefrontFunctionComponent<TitleProps> = ({title}) => {
    const handles = useCssHandles(CSS_HANDLES)
    const titleText = title || <FormattedMessage id="leadform.title" />

    return(
        <div className={`${handles.container} t-heading-2 fw3 w-100 c-muted-1 bd tc`}>
            <div className={`${handles.title} db tc`}>{titleText}</div>
        </div>
    )
}

Title.schema = {
    title: 'editor.leadform-title.title',
    description: 'editor.leadform-title.description',
    type: 'object',
    properties: {
        title: {
            title: "editor.leadform.title.title",
            type: "string",
            default: null,
        }
    }
}

export default Title
