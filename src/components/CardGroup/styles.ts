import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border: 3px solid ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.primary};

    width: 310px;
    min-height: 350px;

    position: relative;

    @media (max-width: 768px) {
      width: 290px;
      min-height: 330px;
    }

    &:hover {
      filter: brightness(1.05);
    }
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;

    border-bottom: 3px solid ${theme.colors.secondary};
    margin-bottom: ${theme.spacings.xsmall};

    h1 {
      margin: ${theme.spacings.xsmall} 0;
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`
export const Teams = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacings.xsmall};
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;

    border: 3px solid ${theme.colors.secondary};
    font-size: ${theme.spacings.large};

    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);

    cursor: pointer;

    transition: ${theme.transition.default};

    &:hover {
      filter: brightness(1.1);
    }
  `}
`
