import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    margin-top: ${theme.spacings.xxlarge};
    padding: 2rem;
  `}
`
