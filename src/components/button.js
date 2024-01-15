
import React from 'react'

const Button = ({ text, bgColor, textColor, onTap, disable }) => {
    return (
        <button style={{
            cursor: "pointer",
            backgroundColor: bgColor,
            border: "1px solid transparent",
            borderRadius: "6px",
            width: "100%",
            boxSizing: "border-box",
            color: textColor,
            padding: "12px",
            fontSize: "12px",
            textAlign: "center",
            fontWeight: "700"
        }}
            onClick={onTap}
            disabled={disable}
        >
            {text}
        </button >


    )
}

export default Button
