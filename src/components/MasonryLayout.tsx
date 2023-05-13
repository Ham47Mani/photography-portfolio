import Masonry from "react-masonry-css";

type MasonryProps = {
  children: any
}

type breakpointColObjType = {
  default: number,
  1000: number,
  700: number,
  500: number
}

const MasonryLayout = ({children}: MasonryProps) => {
  const breakpointColObj : breakpointColObjType = {
    default: 3,
    "1000": 3,
    "700": 2,
    "500": 1
  }
  return (
    <Masonry className="flex gap-4" columnClassName="photography-grid-col" breakpointCols={breakpointColObj} >
      {children}
    </Masonry>
  )
}

export default MasonryLayout