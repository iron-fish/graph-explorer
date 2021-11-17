import styled from '@emotion/styled'
import IronFishLogo from 'svg/logo-white.svg'
import Magnifier from 'svg/search.svg'

const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 7.125rem;
  border: 1px solid #dedfe2;
  height: calc(2.875rem - 1.5rem);
  width: 26.5rem;
  align-self: center;
  svg {
    margin-top: 0.25rem;
  }
  input {
    margin: 0;
    display: inline-block;
    border: 0;
    width: calc(100% - 0.5rem);
  }
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 5.875rem;
  background-color: white;
  border: 1px solid #dedfe2;
  box-sizing: border-box;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.04);
  svg {
    max-width: 10rem;
  }
`
const Header = () => (
  <StyledHeader>
    <IronFishLogo />
    <Search>
      <Magnifier />
      <input type="text" />
    </Search>
  </StyledHeader>
)

export default Header
