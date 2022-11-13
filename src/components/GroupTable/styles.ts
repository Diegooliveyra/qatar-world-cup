import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 620px;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};

    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};

    p,
    span {
      font-family: 'Inter';
      font-weight: ${theme.font.bold};
    }

    span {
      text-align: end;
    }

    h2 {
      text-align: start;
    }
  `}
`

export type GridProps = {
  columns: string
}

export const Grid = styled.div<GridProps>`
  ${({ theme, columns }) => css`
    display: grid;
    grid-template-columns: ${columns};
    grid-gap: ${theme.spacings.xsmall};
    align-items: center;
    text-align: center;
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.lightGray};
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`

export type TeamWrapperProps = {
  isClassified: boolean
}

export const TeamWrapper = styled.div<TeamWrapperProps>`
  ${({ theme, isClassified }) => css`
    position: relative;

    padding: ${theme.spacings.xxsmall} 0;
    border-bottom: 1px solid ${theme.colors.lightGray};

    &:last-child {
      border-bottom: none;
    }

    ${isClassified &&
    css`
      span {
        &::before {
          content: '';
          position: absolute;
          width: ${theme.spacings.xxsmall};
          border-radius: 2px;
          height: 70%;
          left: -5px;
          top: 15%;
          background-color: ${theme.colors.green};
        }
      }
    `}
  `}
`
