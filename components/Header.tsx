import styled from '@emotion/styled'
import IronFishLogo from 'svg/logo-white.svg'
import Magnifier from 'svg/search.svg'

const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0.75em 1.5em;
  border-radius: 7.125em;
  border: 1px solid #dedfe2;
  height: calc(2.875em - 1.5em);
  width: 26.5em;
  align-self: center;
  svg {
    margin-top: 0.25em;
  }
  input {
    margin: 0;
    display: inline-block;
    border: 0;
    width: calc(100% - 0.5em);
  }
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 5.875em;
  background-color: white;
  border: 1px solid #dedfe2;
  box-sizing: border-box;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.04);
  position: relative;
  z-index: 100;
  svg {
    max-width: 10em;
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
