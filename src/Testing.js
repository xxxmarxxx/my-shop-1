import React from 'react'
import styled from 'styled-components'


const Testing = () => {
    return (
       <Wrapper>
           <h3>hello world</h3>
           <p>hello people</p>
           <div className="article">
               <p>this is article
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime adipisci velit aliquam tempora distinctio excepturi commodi non fuga ipsam? Blanditiis sed ad aliquid enim illum repellendus beatae. Dolorum, distinctio!
               </p>
           </div>
           <button>cklick me</button>
       </Wrapper>
    )
}

const Wrapper = styled.section`
h3{
    padding: 2rem;
    background: #343434;
    color: red;
}
.article{
    p {
        padding: 10px;
        color: green;
    }
}
`
export default Testing;