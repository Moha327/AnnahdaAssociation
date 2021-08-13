import React from 'react'
import {Container,Wrapper,Row,Column,Link,Title} from '.styles/footer'

export default function Footer({children, ...reastProps}){
    return <Container {...reastProps}>{children}</Container>
}
Footer.Wrapper = function FooterWrapper({children, ...reastProps}){
   return <Wrapper {...reastProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children, ...reastProps}){
    return <Row {...reastProps}>{children}</Row>
 }

 Footer.Column = function FooterColumn({children, ...reastProps}){
    return <Column {...reastProps}>{children}</Column>
 }

 Footer.Link = function FooterLink({children, ...reastProps}){
    return <Link {...reastProps}>{children}</Link>
 }

 Footer.Title = function FooterTitle({children, ...reastProps}){
    return <Title {...reastProps}>{children}</Title>
 }