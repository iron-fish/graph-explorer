/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useZoom } from 'hooks/useZoom'
import HierarchySVG from 'svg/hierarchy.svg'
import TabularSVG from 'svg/tabular.svg'

export const StyledMenu = styled.aside`
  position: fixed;
  right: 1rem;
  top: 7rem;
  width: 13.5rem;
  height: 5.5rem;
  border: 1px solid #dedfe2;
  background-color: white;
  border-radius: 4px;
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`

export const buttonStyle = css`
  cursor: pointer;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid #dedfe2;
  background-color: white;
`

export const ZoomIn = styled.button`
  ${buttonStyle}
  border-radius: 4px 0 0 4px;
`
export const ZoomOut = styled.button`
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
  padding: 0.375rem 0;
  border: 1px solid #dedfe2;
  max-width: 3rem;
  text-align: center;
`
export const ZoomUI = styled.div`
  display: flex;
  flex-direction row;
  max-width: 8rem;
  width: 8rem;
  `

export const ViewUI = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 4.5rem;
  width: 4.5rem;
  margin-left: 1rem;
`

export const ActiveZoom = ({ zoom }: { zoom: number }) => {
  const percentage = (zoom / 1) * 100 + '%'
  return <StyledActiveZoom value={percentage} type="text" />
}

export const FilterMenu = () => {
  const { zoom, zoomIn, zoomOut } = useZoom()
  return (
    <StyledMenu>
      <ZoomUI>
        <ZoomIn onClick={() => zoomIn()}>&minus;</ZoomIn>
        <ActiveZoom zoom={zoom} />
        <ZoomOut onClick={() => zoomOut()}>&#43;</ZoomOut>
      </ZoomUI>
      <ViewUI>
        <TabularView>
          <TabularSVG />
        </TabularView>
        <HierarchyView>
          <HierarchySVG />
        </HierarchyView>
      </ViewUI>
    </StyledMenu>
  )
}

export default FilterMenu
