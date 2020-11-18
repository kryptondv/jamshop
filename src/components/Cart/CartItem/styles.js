import styled from "styled-components"

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`

export const StyledImg = styled.img`
  width: 24px;
  margin-right: 15px;
`

export const StyledName = styled.span`
  flex-grow: 1;
  color: ${({ theme }) => theme.color.neutralLight};
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 15px;
  text-transform: uppercase;
`

export const StyledPrice = styled.span`
  color: ${({ theme }) => theme.color.neutralLight};
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 14px;
`
