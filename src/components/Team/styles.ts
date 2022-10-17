import styled, { css, DefaultTheme } from 'styled-components'
import { TeamColor } from '.'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    &:hover ${TeamFlag} {
      filter: brightness(1.1);
    }
  `}
`

// TeamFlag
type TeamFlagProps = {
  src: string
  invertedFlag?: boolean
}

export const TeamFlag = styled.div<TeamFlagProps>`
  ${({ theme, src, invertedFlag }) => css`
    width: 6.2rem;
    height: 4rem;
    background-image: url(${src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    order: ${invertedFlag ? 1 : 0};

    border-radius: calc(${theme.border.radius} / 2);
    border: 3px solid ${theme.colors.secondary};

    transition: ${theme.transition.default};
  `}
`

// TeamName
const TeamNameModifier = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary};
  `
}

export type TeamNameProps = {
  color: TeamColor
}

export const TeamName = styled.p<TeamNameProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${!!color && TeamNameModifier[color](theme)}
  `}
`
