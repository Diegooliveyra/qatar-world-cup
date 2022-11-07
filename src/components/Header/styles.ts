import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xsmall};

    display: grid;
    grid-template-columns: 2fr 1fr 0.5fr;
    align-items: center;
  `}
`
export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.small};
      list-style: none;
      justify-content: flex-end;

      li {
        cursor: pointer;
      }
    }
  `}
`
export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    gap: ${theme.spacings.small};

    a {
      cursor: pointer;
    }
  `}
`
