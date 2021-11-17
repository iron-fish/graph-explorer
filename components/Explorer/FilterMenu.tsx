/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
// import { useZoom } from 'hooks/useZoom'
import ZoomContext from 'contexts/ZoomContext'
import HierarchySVG from 'svg/hierarchy.svg'
import TabularSVG from 'svg/tabular.svg'
import ChevronUp from 'svg/chevron-up.svg'
import ChevronDown from 'svg/chevron-down.svg'

export const StyledMenu = styled.aside`
  position: fixed;
  right: 1em;
  top: 7em;
  width: 13.5em;
  height: 5.5em;
  border: 1px solid #dedfe2;
  background-color: white;
  border-radius: 4px;
  padding: 1.5em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`

export const buttonStyle = css`
  cursor: pointer;
  width: 2.25em;
  height: 2.25em;
  border: 1px solid #dedfe2;
  background-color: white;
`

export const ZoomOut = styled.button`
  ${buttonStyle}
  border-radius: 4px 0 0 4px;
`
export const ZoomIn = styled.button`
  ${buttonStyle}
  border-radius: 0 4px 4px 0;
`
export const TabularView = styled.button`
  ${buttonStyle}
  border-radius: 4px 0 0 4px;
`
export const HierarchyView = styled.button`
  ${buttonStyle}
  border-radius: 0 4px 4px 0;
`
export const StyledActiveZoom = styled.input`
  padding: 0.375em 0;
  border: 1px solid #dedfe2;
  max-width: 3em;
  text-align: center;
`
export const ZoomUI = styled.div`
  display: flex;
  flex-direction row;
  max-width: 8em;
  width: 8em;
  `

export const ViewUI = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 4.5em;
  width: 4.5em;
  margin-left: 1em;
`

export const ActiveZoom = ({ zoom }: { zoom: number }) => {
  const percentage = ((zoom / 1) * 100).toFixed(0) + '%'
  return <StyledActiveZoom value={percentage} type="text" />
}
export const ForkUI = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
`

export const TotalForks = styled.span`
  font-weight: bolder;
`
export const ForkNav = styled.div`
  width: 3.5em;
  border-left: 1px solid #dedfe2;
  padding-left: 4px;
`

export const chevron = css`
  width: 16px;
  height: 16px;
  margin-left: 0.5em;
`

export const FilterMenu = () => {
  return (
    <ZoomContext.Consumer>
      {({ zoom, zoomIn, zoomOut }) => (
        <StyledMenu>
          <ZoomUI>
            <ZoomOut onClick={() => zoomOut()}>&minus;</ZoomOut>
            <ActiveZoom zoom={zoom} />
            <ZoomIn onClick={() => zoomIn()}>&#43;</ZoomIn>
          </ZoomUI>
          <ViewUI>
            <TabularView>
              <TabularSVG />
            </TabularView>
            <HierarchyView>
              <HierarchySVG />
            </HierarchyView>
          </ViewUI>
          <ForkUI>
            <label>Forks</label>
            <TotalForks>1/10</TotalForks>
            <ForkNav>
              <ChevronDown css={chevron} />
              <ChevronUp css={chevron} />
            </ForkNav>
          </ForkUI>
        </StyledMenu>
      )}
    </ZoomContext.Consumer>
  )
}

export default FilterMenu
