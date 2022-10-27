import React from "react";

const Title = ({title,textColor})=>(
    // title은 h1 요소의 textContent, textColor은 글자색이 되는 props입니다.
    <h1 style={{color: textColor}}>{title}</h1>
)

export default Title;

