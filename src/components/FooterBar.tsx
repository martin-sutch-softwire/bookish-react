import React from 'react'

type FooterBarProps = {
    errorMessage: string
}

const FooterBar: React.FC<FooterBarProps> = ({errorMessage}) => {
    return (
        <div>
            <span>{errorMessage}</span>
        </div>
    )
}

export default FooterBar