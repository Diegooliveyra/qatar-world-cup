import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.small};
  `}
`
export const Header = styled.div``
export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xlarge};

    font-family: 'Inter';
    font-weight: ${theme.font.bold};
  `}
`
export const Score = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
  `}
`
export const Footer = styled.div``
